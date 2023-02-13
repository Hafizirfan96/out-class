
import React, { Component } from "react";
import { Container, Card, CardHeader, CardBody,Label } from "reactstrap";
import Joi from "joi-browser";

import Header from "../../../components/Headers/Header.jsx";
import Loader from "../../../components/Loader";
import Input from "../../../components/Inputs/Input";
import MySelect from "../../../components/Inputs/MySelect";
// import Toggle from "../../../components/Inputs/Toggle";
import { connect } from "react-redux";
import validateSchema from "../../../helpers/validation";
import { getPages } from "../../../store/api/dynamicPages";
import Toggle from "../../../components/Inputs/Toggle";
import { Link } from "react-router-dom";

import { basePath } from "../../../configs";
// import {
//   editHomeSlider,
//   getHomeSlider,
//   editSliderImage,
// } from "../../../store/api/homeSliders";
import RichEditor from "../../../components/Inputs/RichEditor";
import {
  editStat,
  getStat,
  createStat,
  editSliderImage,

} from "../../../store/api/quizCard";
import QuizCard from "./QuizCard";
const schema = {
  name: Joi.string().required(),
  type: Joi.string().required(),
  duration: Joi.number().required(),

};

class EditQuizCard extends Component {
  state = {
    id: "",
    pages: [],
    form: {
      name: "",
      type: "",
      duration: "",


    },
    errors: {},
    showLoader: false,
    imageSource: null,
    imagePreview: "",

    mobileImageSource: null,
    mobileImagePreview: "",
    form2:{

        // published:false,
    }

  };
  componentDidMount = () => {
    const { id } = this.props.match.params;
    this.setState({ id });
    this.loadSlider(id);
    this.loadPages();
  };
  
  

  loadPages = () => {
    this.props.getPages({
      onSuccess: (res) => {
        this.setState({ pages: res.data.data });
      },
    });
  };

  loadSlider = (id) => {
    this.setState({ showLoader: true });
    this.props.getStat({
      id,
      onSuccess: (res) => {
        console.log("RES =>", res.data.data);
        const { form } = this.state;
        for (let key in form) form[key] = res.data.data[key];

        this.setState({ form });

        const previews = {};
        ["image", "mobileImage"].forEach((img) => {
          try {
            previews[img + "Preview"] = res.data.data[img] || "";
          } catch (err) {}
        });
        this.setState(previews);
      },

      onEnd: () => {
        this.setState({ showLoader: false });
      },
    });
  };
  onFormSubmit = (e) => {
    const id = localStorage.getItem('id');
    console.log("id==-=-=-=-=-=>>", id)
    e.preventDefault();
    const { form } = this.state;
    const errors = validateSchema(form, schema);
    if (errors) return this.setState({ errors });

    this.setState({ showLoader: true });

    this.props.editStat({
      id,
      body: form,

      onEnd: () => {
        this.setState({ showLoader: false });
      },
    });

    
    
  };
  renderForm = () => {
    const {
        id,
      form,
      errors,
      imagePreview,
      pages = [],
      mobileImagePreview,
      form2
    } = this.state;
    // console.log("id=====>>>", id)
    localStorage.setItem("QAID", id);
    console.log("quiz QA id-=-=->>>",this.state.id)


    const selectList = pages.map((p) => {
      return { label: p.title, value: "/page/" + p.slug };
    });
    return (
      <form onSubmit={this.onFormSubmit}>
           <div className="row">
          {/* <div className="col-md-6">
            {imagePreview && (
              <img
                src={imagePreview}
                style={{ maxWidth: "200px" }}
                className="mb-2"
              />
            )}
            <br />
            <label>
              <span className="btn btn-info">Choose Image</span>
              <input
                type="file"
                accept="image/*"
                multiple={false}
                className="d-none"
                onChange={(e) => {
                  const imageSource = e.target.files[0];
                  if (imageSource) {
                    this.setState({ imageSource });
                    const reader = new FileReader();
                    reader.readAsDataURL(imageSource);
                    reader.onloadend = function () {
                      this.setState({ imagePreview: reader.result });
                    }.bind(this);
                  }
                }}
              />
            </label>
          </div> */}
          <div className="col-12">
            <Input
              label="Name"
              placeholder="Name"
              name="name"
              onChange={(name) => {
                form.name = name;
                errors.name = "";
                this.setState({ form, errors });
              }}
              value={form.name}
              error={errors.name}
            />
          </div>
          <div className="col-12">
            <Input
              label="type"
              placeholder="Free / paid"
              name="type"
              onChange={(type) => {
                form.type = type;
                errors.type = "";
                this.setState({ form, errors });
              }}
              value={form.type}
              error={errors.type}
            />
          </div>
          <div className="col-12">
            <Input
              label="Duration"
              placeholder="duration"
              name="duration"

              onChange={(duration) => {
                form.duration = duration;
                errors.duration = "";
                this.setState({ form, errors });
              }}
              value={form.duration}
              error={errors.duration}
            />
          </div>
          {/* <div className="col-2 pt-2">
                  <Label className="form-control-label">Published</Label>
                  <br />
                  {console.log("publish", this.state.form.published)}
                  <Toggle
              checked={form.published}
              onChange={(published) => {
                form.published = published;
                errors.published = "";
                this.setState({ form, errors });
              }}
            />
                </div> */}
       
         
          <div className="col-12 text-center">
            <button className="btn btn-primary" type="submit">
              Save
            </button>
          </div>
        </div>
      </form>
    );
  };
  render() {
    const { showLoader } = this.state;
    return (
      <>

        <Header />
        <Container className="mt--7" fluid>
          <Card className="shadow">
            <CardHeader>
              <div className="clearfix">
                <h2 className="mb-0 float-left">Edit Quiz Bank</h2>
              </div>
            </CardHeader>

            <CardBody className="bg-secondary position-relative">
              {showLoader && (
                <div className="overlapping-loader">
                  <Loader />
                </div>
              )}
              {this.renderForm()}
              {/* <QuizCard/> */}
              <Link
                  to={basePath + "/cms/quiz-Mcqs"}
                  className="btn btn-sm btn-primary float-right"
                >
                  <i className="fas fa-plus"></i> Add
                </Link>

            </CardBody>
          </Card>
        </Container>

      </>
    );
  }
}

const mapStateToProps = (state) => ({
  links: state.cms.links.list,
});
const mapDispatchToprops = (dispatch) => ({
    // publishedQuizBank: (params) => dispatch(publishedQuizBank(params)),
  editSliderImage: (params) => dispatch(editSliderImage(params)),
  editStat: (params) => dispatch(editStat(params)),
  getStat: (params) => dispatch(getStat(params)),
  getPages: (params) => dispatch(getPages(params)),
});

export default connect(mapStateToProps, mapDispatchToprops)(EditQuizCard);
