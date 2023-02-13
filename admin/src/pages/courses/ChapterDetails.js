import React, { Component } from "react";
import {
  Container,
  Card,
  CardHeader,
  CardBody,
  Button,
  ListGroup,
  ListGroupItem,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import Joi from "joi-browser";

import Header from "components/Headers/Header.jsx";
import Loader from "../../components/Loader";
import { getChapter } from "../../store/api/chapters";
import {
  getLessons,
  rearrangeLesson,
  createLesson,
} from "../../store/api/lessons";
import LessonCard from "../../components/Course/LessonCard";
// import newLessonCard from "../../components/Course/LessonCard";
import { connect } from "react-redux";
import SortableList from "../../components/sortable/SortableList";
import { Link } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import RichEditor from "../../components/Inputs/RichEditor";
import { basePath } from "../../configs";

import { editChapter } from "../../store/api/chapters";

class ChapterDetails extends Component {
  state = {
    id: "", //chapter Id
    form: {},
    showSave: false,
    chapter: {
      name: "",
      price: 0,
      description: "",
      course: {
        _id: "",
        name: "",
      },
    },

    //lessons
    lessons: [],
    video_name: "",
    video_lenth: "",
    showLoader: false,
  };

  componentDidMount = () => {
    console.log("video in com---->", this.state.video_name);
    const { id } = this.props.match.params;
    this.setState({ id });

    this.loadChapter(id);
    this.loadLessons(id);
  };

  loadChapter = (id) => {
    this.setState({ showLoader: true });

    this.props.getChapter({
      id,
      onSuccess: (res) => {
        const { data: chapter } = res.data;
        this.setState({ chapter });
      },
      onEnd: () => {
        this.setState({ showLoader: false });
      },
    });
  };

  saveChapter = () => {
    const {
      chapter: { name, price, description, course },
      id,
    } = this.state;
    this.setState({ showLoader: true });
    this.props.editChapter({
      id,
      body: {
        name,
        price,
        description,
        course: course._id,
      },
      onSuccess: () => {
        this.setState({ showSave: false });
      },
      onEnd: () => {
        this.setState({ showLoader: false });
      },
    });
  };
  loadLessons = (chapterId) => {
    this.props.getLessons({
      chapterId,
      onSuccess: (res) => {
        this.setState({ lessons: res.data.data });
      },
    });
  };

  createNewLesson = () => {
    const { id } = this.props.match.params;
    const lesson = {
      name: "",
      chapter: id,
      published: false,
    };
    const { lessons } = this.state;
    lessons.push(lesson);
    this.setState({ lessons });
    window.scrollTo(0, document.body.scrollHeight);
  };

  renderLessons = () => {
    const { lessons } = this.state;
    return (
      <ListGroup>
        <SortableList
          data={lessons}
          keyExtractor={(item, index) => {
            return item._id + "lessons" + index;
          }}
          onListSort={(list) => {
            this.setState({ lessons: list });
            this.props.rearrangeLesson({
              body: { orderIds: list.map((lesson) => lesson._id) },
            });
          }}
          renderItem={(item, index) => {
            return (
              <div className="rounded mb-1 bg-white">
                <LessonCard
                  lesson={item}
                  onUpdate={(newLesson) => {
                    lessons[index] = newLesson;
                    this.setState({ lessons });
                  }}
                  onDelete={() => {
                    lessons.splice(index, 1);
                    this.setState({ lessons });
                  }}
                />
              </div>
            );
          }}
        />
      </ListGroup>
    );
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    console.log("eeeee====", this.state.video_name);

    this.setState({ showLoader: true });

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    const formData = new FormData();
    for (let i = 0; i < this.state.video_name.length; i++) {
      formData.append("video", this.state.video_name[i]);
    }

    formData.append("chapter", this.state.id);
    console.log("dfghjk=====>>", formData.get("video"));

    this.props.createLesson({
      // headers: { video: formData },

      body: formData,
      // config,
      // data:this.state.video_name

      onSuccess: (res) => {
        console.log("res----", res);
        // this.props.history.goBack();
        this.props.history.push(
          basePath + "/courses/chapters_lessons/" + this.state.id
        );
      },
      onEnd: () => {
        this.setState({ showLoader: false });
      },
    });
  };

  renderForm = () => {
    const { form, errors, pages } = this.state;
    // const selectList = pages.map((p) => {
    //   return { label: p.title, value: "/page/" + p.slug };
    // });
    return (
      <form>
        <div style={{ marginBottom: "2%" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <label>
              <span className="btn btn-info">Choose Videos</span>
              <input
                type="file"
                multiple
                accept="video/*"
                className="d-none"
                onChange={(e) => {
                  const video = e.target.files;
                  // if (!video) return;

                  const len = Object.keys(video).length;
                  console.log("videos======>>>", len);

                  this.setState({
                    video_name: video,

                    video_lenth: len + " video selected",
                  });
                  // console.log("video_name",this.state.video_name)
                }}
              />
            </label>
            {/* <h1>{this.state.video_name}</h1> */}
          </div>
          <h1 style={{ textAlign: "center" }}>{this.state.video_lenth} </h1>

          <div className="col-12 text-center">
            <button className="btn btn-primary" onClick={this.onFormSubmit}>
              Save
            </button>
          </div>
        </div>
      </form>
    );
  };
  render() {
    const { showLoader, chapter, showSave } = this.state;
    const { course } = chapter;
    return (
      <>
        <Header>
          <div>
            <h1 className="text-center course-title text-secondary">
              {course.name}
            </h1>
          </div>
        </Header>
        <Container className="mt--7" fluid>
          <Card className="shadow">
            <CardHeader>
              <div className="clearfix">
                <h2 className="mb-0 float-left">{chapter.name}</h2>
                <h2 className="mb-0 ml-2 float-left">Rs.{chapter.price}</h2>

                {showSave && (
                  <Button
                    size="sm"
                    color="success"
                    className="float-right"
                    onClick={this.saveChapter}
                  >
                    <i className="fa fa-save"></i>
                  </Button>
                )}
              </div>
            </CardHeader>

            <CardBody className="bg-secondary position-relative">
              {showLoader && (
                <div className="overlapping-loader">
                  <Loader />
                </div>
              )}
              {/* 
              <div>
                <Breadcrumb>
                  <BreadcrumbItem>
                    <Link
                      to={basePath + "/courses/" + course._id}
                      className="course-title"
                    >
                      {course.name}
                    </Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <Link
                      to={basePath + "/courses/" + course._id}
                      className="course-title"
                    >
                      {chapter.name}
                    </Link>
                  </BreadcrumbItem>
                </Breadcrumb>
              </div> */}

              <div className="row">
                <div className="col-12">
                  <RichEditor
                    label="Chapter Detail"
                    value={chapter.description}
                    onChange={(description) => {
                      const updatedChap = {
                        ...this.state.chapter,
                        description,
                      };
                      this.setState({ chapter: updatedChap, showSave: true });
                    }}
                  />
                </div>
              </div>

              <>
                <p style={{ textAlign: "center" }}> upload the lessons </p>
                {showLoader === true ? (
                <>
                <div className="overlapping-loader">
                  <Loader />
                </div>
                <p> upload</p>
                </>
              ):(

                this.renderForm()
              )
              
              }
              </>
              {this.state.lessons.length ? (
                <>
                  <div>
                    {" "}
                    <p style={{ textAlign: "center" }}>
                      Already uploaded lesson
                    </p>
                  </div>
                  <div
                    style={{
                      width: "20%",
                      backgroundColor: "#5e72e4",
                      display: "flex",
                      justifyContent: "center",
                      padding: "1%",
                      borderRadius: "25px",
                      margin: "auto",
                    }}
                  >
                    <Link
                      style={{
                        color: "#fff",
                        fontSize: "1.2vw",
                        fontWeight: "600",
                      }}
                      to={
                        basePath + "/courses/chapters_lessons/" + this.state.id
                      }
                    >
                      See Lessons
                    </Link>
                  </div>
                </>
              ) : null}

              {/* <input
                type="file"
                multiple
                accept="video/*"
                // className="d-none"
                onChange={(e) => {
                  const video = e.target.files;
                  // if (!video) return;
                  console.log("videos======>>>", video);
                }}
              />
              {console.log()}
              <div className="clearfix my-2">
                <h2 className="float-left">Lessons</h2>
                <Button
                  className="float-right"
                  color="dark"
                  size="sm"
                  onClick={this.createNewLesson}
                >
                  Create Lesson
                </Button>
              </div> */}
              {/* Lessons */}
              {/* {this.renderLessons()} */}
              {/* <Newles */}
            </CardBody>
          </Card>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToprops = (dispatch) => ({
  getChapter: (params) => dispatch(getChapter(params)),
  getLessons: (params) => dispatch(getLessons(params)),
  createLesson: (params) => dispatch(createLesson(params)),
  rearrangeLesson: (params) => dispatch(rearrangeLesson(params)),
  editChapter: (params) => dispatch(editChapter(params)),
});

export default connect(mapStateToProps, mapDispatchToprops)(ChapterDetails);
