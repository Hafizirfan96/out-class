import React, { Component } from "react";
import {
  Container,
  Card,
  CardHeader,
  CardBody,
  Button,
  ListGroup,
  ListGroupItem,
  Progress,
} from "reactstrap";
import ReactPlayer from "react-player";
import Header from "components/Headers/Header.jsx";
import Loader from "../../components/Loader";
import LessonCard from "../../components/Course/LessonCard";
import { connect } from "react-redux";
import SortableList from "../../components/sortable/SortableList";
import {
  getLesson,
  updateLessonVideo,
  updateLessonVideoCaptions,
  useAnotherVideo,
  editLessonMetaTags,
  createLessonPdf,
  deleteLessonPdf,
} from "../../store/api/lessons";
import { getQuizes, rearrangeQuizes } from "../../store/api/quizes";
import QuizCard from "../../components/Course/QuizCard";
import Input from "../../components/Inputs/Input";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
class LessonDetails extends Component {
  state = {
    id: "", //chapter Id
    lesson: {
      quiz:{
        doc:"",
        pdfName:"",
        desc: ""
      },
      name: "",
      chapter: {
        _id: "",
        name: "",
      },
      metaTitle: "",
      metaDescription: "",
      metaKeyWords: "",
    },
    form: {
      pdfName: "",

      desc: "",
    },
    doc: "",
    quizes: [],
    showLoader: false,

    videoUrl: "",
    uploadingVideo: false,
    uploadProgress: 50,

    uploadingCaptions: false,
    captionUploadProgress: 50,
  };

  componentDidMount = () => {
    const { id } = this.props.match.params;
    this.setState({ id });
    this.loadLesson(id);
    this.loadQuizes(id);
  };

  loadQuizes = (lessonId) => {
    this.props.getQuizes({
      lessonId,
      onSuccess: (res) => {
        this.setState({ quizes: res.data.data });
      },
    });
  };

  createQuiz = () => {
    const { id } = this.props.match.params;
    const quiz = {
      name: "",
      lesson: id,
      type: "multi-choice",
    };
    const { quizes } = this.state;
    quizes.push(quiz);
    this.setState({ quizes });
    window.scrollTo(0, document.body.scrollHeight);
  };

  loadLesson = (id) => {
    this.props.getLesson({
      id,
      onSuccess: (res) => {
        this.setState({ lesson: res.data.data });
        console.log(res.data.data);
        console.log("new vedio========>>>>", this.state.lesson.newVideo);
        console.log("old vedio========>>>>", this.state.lesson.video);
      },
    });
  };

  renderOtherVideoForm = () => {
    return (
      <div className="row">
        <div className="col-10">
          <Input
            label="Video URL"
            value={this.state.videoUrl}
            onChange={(videoUrl) => {
              this.setState({ videoUrl });
            }}
          />
        </div>
        <div className="col-2">
          <button
            className="btn btn-primary"
            style={{ marginTop: "33px" }}
            onClick={() => {
              let { videoUrl, id } = this.state;
              videoUrl = videoUrl.trim();
              if (!videoUrl) return alert("Video URL is required");

              this.setState({ showLoader: true });
              this.props.useAnotherVideo({
                id,
                body: { videoUrl },

                onSuccess: (res) => {
                  const { lesson } = this.state;
                  lesson.video = res.data.data.newVideo;
                  this.setState({ lesson: { ...lesson }, videoUrl: "" });
                },
                onEnd: () => {
                  this.setState({ showLoader: false });
                },
              });
            }}
          >
            Submit
          </button>
        </div>
      </div>
    );
  };
  onSubmitRemovePdf = (e) => {
    e.preventDefault();
    const { form, id, doc } = this.state;

    this.setState({ showLoader: true });
    localStorage.removeItem("pdfname");
    localStorage.removeItem("pdfdesc");
    localStorage.removeItem("selectedPdf");

    this.props.deleteLessonPdf({
      id,

      onSuccess: (res) => {
        console.log("res----", res);
        window.location.reload();

      },
      onEnd: () => {
        this.setState({ showLoader: false });
      },
    });
  };
  onFormSubmitPdf = (e) => {
    e.preventDefault();
    const { form, id, doc } = this.state;

    this.setState({ showLoader: true });

    localStorage.setItem("pdfname", this.state.form.pdfName);
    localStorage.setItem("pdfdesc", this.state.form.desc);
    localStorage.setItem("selectedPdf", this.state.doc.name);

    const formData = new FormData();
    console.log("dasdasdasd=====>>", this.state.form);

    formData.append("doc", this.state.doc);

    formData.append("pdfName", this.state.form.pdfName);
    formData.append("desc", this.state.form.desc);

    this.props.createLessonPdf({
      id,
      body: formData,

      onSuccess: (res) => {
        console.log("res----", res);
        window.location.reload();
      },
      onEnd: () => {
        this.setState({ showLoader: false });
      },
    });
  };

  renderPdfForm = () => {
    const { form, lesson } = this.state;
    const namePDF = localStorage.getItem("pdfname");
    const descPDF = localStorage.getItem("pdfdesc");
    const docPDF = localStorage.getItem("selectedPdf");

    console.log("lesssonsss idd---->>", this.state.lesson.chapter._id);
    console.log("lesssonsss idd22222---->>", this.state.id);
    return (
      <form>
        <div className="row">
          <div className="col-12">
            <Input
              label="PDF Name"
              // placeholder={this.state.lesson.quiz.pdfName ? this.state.lesson.quiz.pdfName : "pdf name"}
              placeholder="pdf name"
              name="pdfName "
              onChange={(pdfName) => {
                form.pdfName = pdfName;

                this.setState({ form });
              }}
              value={form.pdfName}
            />
          </div>

          <div className="col-12">
            <Input
              type="textarea"
              label="PDF Description"
              placeholder= "description"
              name="desc"
              onChange={(desc) => {
                form.desc = desc;

                this.setState({ form });
              }}
              value={form.desc}
            />
          </div>

          <div className="col-12">
            <label>
              <span className="btn btn-info">Choose PDF</span>
              <input
                type="file"
                multiple
                accept="application/pdf"
                className="d-none"
                onChange={(e) => {
                  const video = e.target.files[0];
                  console.log("asdasd===", video);
                  // console.log("pdf name===",video.name)
                  this.setState({ doc: video });
                }}
              />
            </label>
            {/* {console.log("asdasd===>>",this.state.lesson.quiz.doc)} */}
            {this.state.doc.name ? (
              <h1 style={{ fontSize: "1.2vw" }}>{this.state.doc.name} </h1>
            ) : (
              <>
              {/* <h1 style={{ fontSize: "1.2vw" }}>{this.state.lesson.quiz.doc} </h1> */}

              </>
            )}
            {/* <h1 style={{fontSize:"1.2vw"}}>{docPDF?docPDF: this.state.doc.name} </h1> */}
          </div>

          <div className="col-12 text-center">
            <Button
              type="submit"
              color="primary"
              onClick={this.onFormSubmitPdf}
            >
              Save
            </Button>
          </div>
          {/* {console.log("lesss=====>.", this.state.lesson.quiz.desc)}
          {this.state.lesson ? (
            <>
              {this.state.lesson.quiz.doc.length ? ( */}
                <div className="col-12 text-center" style={{ marginTop: "2%" }}>
                  <Button
                    type="submit"
                    color="danger"
                    onClick={this.onSubmitRemovePdf}
                  >
                    Delete
                  </Button>
                </div>
              {/* ) : (
               null
              )}{" "} */}
            {/* </>
          ) : (
            <></>
          )} */}
          {/* {this.state.lesson.quiz?this.state.lesson.quiz.pdfName:''} */}
        </div>
      </form>
    );
  };
  renderMetaForm = () => {
    const {
      lesson: { metaTitle, metaDescription, metaKeyWords },
    } = this.state;

    return (
      <Formik
        enableReinitialize={true}
        onSubmit={(values) => {
          this.setState({ showLoader: true });

          const { id } = this.state;

          this.props.editLessonMetaTags({
            id,
            body: { ...values },
            onSuccess: (res) => {
              const lesson = res.data.data;
              this.setState({ lesson });
            },
            onEnd: () => {
              this.setState({ showLoader: false });
            },
          });
        }}
        initialValues={{
          metaTitle,
          metaDescription,
          metaKeyWords,
        }}
        validationSchema={Yup.object().shape({
          metaTitle: Yup.string().min(1).required(),
          metaDescription: Yup.string().min(1).required(),
          metaKeyWords: Yup.string().min(1).required(),
        })}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          submitForm,
          setFieldValue,
        }) => {
          return (
            <Form>
              <div className="row">
                <div className="col-12">
                  <Input
                    label="Meta Title"
                    value={values.metaTitle}
                    error={errors.metaTitle}
                    placeholder="metaTitle"
                    name="metaTitle"
                    onChangeFormik={handleChange}
                    error={touched.metaTitle && errors.metaTitle}
                  />
                </div>

                <div className="col-12">
                  <Input
                    type="textarea"
                    label="Meta Description"
                    value={values.metaDescription}
                    error={errors.metaDescription}
                    placeholder="metaDescription"
                    name="metaDescription"
                    onChangeFormik={handleChange}
                    error={touched.metaDescription && errors.metaDescription}
                  />
                </div>

                <div className="col-12">
                  <Input
                    type="textarea"
                    label="Meta Keywords"
                    value={values.metaKeyWords}
                    error={errors.metaKeyWords}
                    placeholder="metaKeyWords"
                    name="metaKeyWords"
                    onChangeFormik={handleChange}
                    error={touched.metaKeyWords && errors.metaKeyWords}
                  />
                </div>

                <div className="col-12 text-center">
                  <Button type="submit" color="primary" onClick={submitForm}>
                    Save
                  </Button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    );
  };
  renderQuizes = () => {
    const { quizes } = this.state;
    return (
      <ListGroup>
        <SortableList
          data={quizes}
          keyExtractor={(item, index) => {
            return item._id + "quiz" + index;
          }}
          onListSort={(list) => {
            this.setState({ quizes: list });
            this.props.rearrangeQuizes({
              body: { orderIds: list.map((quiz) => quiz._id) },
            });
          }}
          renderItem={(item, index) => {
            return (
              <div className="rounded mb-1 bg-white">
                <QuizCard
                  quiz={item}
                  onUpdate={(newQuiz) => {
                    quizes[index] = newQuiz;
                    this.setState({ quizes });
                  }}
                  onDelete={() => {
                    quizes.splice(index, 1);
                    this.setState({ quizes });
                  }}
                />
              </div>
            );
          }}
        />
      </ListGroup>
    );
  };

  render() {
    const {
      showLoader,
      lesson,
      uploadProgress,
      uploadingVideo,
      uploadingCaptions,
      captionUploadProgress,
    } = this.state;
    const { chapter, videoProcessingStatus } = lesson;
    return (
      <>
        <Header>
          <div>
            <h1 className="text-center course-title text-secondary">
              {chapter.name}
            </h1>
          </div>
        </Header>
        <Container className="mt--7" fluid>
          <Card className="shadow">
            <CardHeader>
              <div className="clearfix">
                <h2 className="mb-0 float-left">{lesson.name}</h2>
              </div>
            </CardHeader>

            <CardBody className="bg-secondary position-relative">
              {showLoader && (
                <div className="overlapping-loader">
                  <Loader />
                </div>
              )}

              {!uploadingVideo && (
                <>
                  {lesson.video || lesson.newVideo ? (
                    <>
                      {lesson.isBulk === true ? (
                        <>
                          <ReactPlayer
                            controls={true}
                            playing={false}
                            url={lesson.newVideo}
                            style={{ maxHeight: "250px" }}
                          />
                        </>
                      ) : (
                        <ReactPlayer
                          controls={true}
                          playing={false}
                          url={lesson.video.replace("playlist", "360p")}
                          style={{ maxHeight: "250px" }}
                        />
                      )}
                      {/* <ReactPlayer
                        controls={true}
                        playing={false}
                        url={lesson.video.replace("playlist", "360p")}
                        style={{ maxHeight: "250px" }}
                      /> */}
                      {lesson.isBulk === true ? (
                        <p> VIDEO URL: {lesson.newVideo}</p>
                      ) : (
                        <p>VIDEO URL: {lesson.video}</p>
                      )}
                      {/* <p>VIDEO URL: {lesson.video}</p> */}
                    </>
                  ) : (
                    <div>
                      <p>No Video Available</p>
                    </div>
                  )}
                </>
              )}

              {uploadingVideo ? (
                <>
                  <p className="mb-0">Uploading video {uploadProgress}%...</p>
                  <Progress value={`${uploadProgress}`} />
                </>
              ) : (
                <div className="clearfix my-1">
                  <label className="float-left">
                    <span className="btn btn-primary">Upload Video</span>
                    <input
                      type="file"
                      multiple={false}
                      accept="video/*"
                      className="d-none"
                      onChange={(e) => {
                        const video = e.target.files[0];
                        if (!video) return;
                        this.setState({
                          uploadProgress: 0,
                          uploadingVideo: true,
                        });
                        const { id } = this.state;
                        this.props.updateLessonVideo({
                          id,
                          body: { video },
                          onSuccess: () => {
                            lesson.videoProcessingStatus = "processing";
                            this.setState({ lesson });
                          },
                          onProgress: (prog) => {
                            this.setState({ uploadProgress: prog });
                          },
                          onEnd: () => {
                            this.setState({
                              uploadingVideo: false,
                              uploadProgress: 0,
                            });
                          },
                        });
                      }}
                    />
                  </label>
                  {videoProcessingStatus && (
                    <h2 className="float-left mt-1">
                      Processing Status: {videoProcessingStatus}
                    </h2>
                  )}
                </div>
              )}
              <br />

              {this.renderOtherVideoForm()}

              {lesson.videoCaptions && (
                <a href={lesson.videoCaptions}>{lesson.videoCaptions}</a>
              )}

              {uploadingCaptions ? (
                <>
                  <p className="mb-0">
                    Uploading Captions {captionUploadProgress}%...
                  </p>
                  <Progress value={`${captionUploadProgress}`} />
                </>
              ) : (
                <div className="clearfix my-1">
                  <label className="float-left">
                    <span className="btn btn-primary">Upload Captions</span>
                    <input
                      type="file"
                      multiple={false}
                      accept="*/*"
                      className="d-none"
                      onChange={(e) => {
                        const captions = e.target.files[0];
                        if (!captions) return;
                        this.setState({
                          uploadProgress: 0,
                          uploadingCaptions: true,
                        });
                        const { id } = this.state;
                        this.props.updateLessonVideoCaptions({
                          id,
                          body: { captions },
                          onSuccess: (res) => {
                            this.setState({ lesson: res.data.data });
                          },
                          onProgress: (prog) => {
                            this.setState({ captionUploadProgress: prog });
                          },
                          onEnd: () => {
                            this.setState({
                              uploadingCaptions: false,
                              captionUploadProgress: 0,
                            });
                          },
                        });
                      }}
                    />
                  </label>
                </div>
              )}
              {this.renderPdfForm()}

              {this.renderMetaForm()}
              <div className="clearfix my-2">
                <h2 className="float-left">Quizes</h2>
                <Button
                  className="float-right"
                  color="dark"
                  size="sm"
                  onClick={this.createQuiz}
                >
                  Create Quiz
                </Button>
              </div>

              {this.renderQuizes()}
            </CardBody>
          </Card>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToprops = (dispatch) => ({
  getLesson: (params) => dispatch(getLesson(params)),
  updateLessonVideo: (params) => dispatch(updateLessonVideo(params)),
  getQuizes: (params) => dispatch(getQuizes(params)),
  rearrangeQuizes: (params) => dispatch(rearrangeQuizes(params)),
  updateLessonVideoCaptions: (params) =>
    dispatch(updateLessonVideoCaptions(params)),
  useAnotherVideo: (params) => dispatch(useAnotherVideo(params)),
  editLessonMetaTags: (params) => dispatch(editLessonMetaTags(params)),
  createLessonPdf: (params) => dispatch(createLessonPdf(params)),
  deleteLessonPdf: (params) => dispatch(deleteLessonPdf(params)),
});

export default connect(mapStateToProps, mapDispatchToprops)(LessonDetails);
