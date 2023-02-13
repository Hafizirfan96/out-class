import React, { Component } from "react";
import { Container, Card, CardHeader, CardBody } from "reactstrap";
import Joi from "joi-browser";

import Header from "../../../components/Headers/Header.jsx";
import Loader from "../../../components/Loader";
import Input from "../../../components/Inputs/Input";
import MySelect from "../../../components/Inputs/MySelect";
import Toggle from "../../../components/Inputs/Toggle";
import { connect } from "react-redux";
import validateSchema from "../../../helpers/validation";
import { getPages } from "../../../store/api/dynamicPages";
import {
  editStat,
  editSliderImage,
  createStat,
} from "../../../store/api/popularCourses";
// import {
//   createHomeSlider,
//   editSliderImage,
// } from "../../../store/api/homeSliders";
const schema = {
    name: Joi.string().required(),
    // desc: Joi.string().optional().allow(""),
  color: Joi.string().required(),
  link: Joi.string().required(),
  // buttonLink: Joi.string().optional().allow(""),
};

class CreatePopularCourses extends Component {
  state = {
    pages: [],
    form: {
        name: "",
        desc: "",
      color: "",
      link: "",
    },
    errors: {},
    showLoader: false,
    imageSource: null,
    imagePreview: "",

    mobileImageSource: null,
    mobileImagePreview: "",
  };
  componentDidMount = () => {
    this.loadPages();
  };

  loadPages = () => {
    this.props.getPages({
      onSuccess: (res) => {
        this.setState({ pages: res.data.data });
      },
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const { form, imageSource } = this.state;
    const errors = validateSchema(form, schema);
    if (errors) return this.setState({ errors });

    this.setState({ showLoader: true });

    if (imageSource) {
      form.image = imageSource;
    }

    const formData = new FormData();
    for (let key in form) formData.append(key, form[key]);

    this.props.createStat({
      body: formData,
      onSuccess: (res) => {
        ["mobileImage"].forEach((key) => {
          const source = this.state[key + "Source"];
          if (!source) return;
          const body = { image: source };
          this.props.editSliderImage({
            id: res.data.data._id,
            key,
            body,
          });
        });
        this.props.history.goBack();
      },
      onEnd: () => {
        this.setState({ showLoader: false });
      },
    });
  };

  renderForm = () => {
    const {
      form,
      errors,
      imagePreview,
      pages = [],
      mobileImagePreview,
    } = this.state;
    const selectList = pages.map((p) => {
      return { label: p.title, value: "/page/" + p.slug };
    });
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="row">
          <div className="col-md-6">
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
          </div>
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
              label="Description"
              placeholder="description"
              name="desc"
              onChange={(desc) => {
                form.desc = desc;
                errors.desc = "";
                this.setState({ form, errors });
              }}
              value={form.desc}
              error={errors.desc}
            />
          </div>
          <div className="col-12">
            <Input
              label="color"
              placeholder="color"
              name="color"
              onChange={(color) => {
                form.color = color;
                errors.color = "";
                this.setState({ form, errors });
              }}
              value={form.color}
              error={errors.color}
            />
          </div>
          <div className="col-12">
            <Input
              label="link"
              placeholder="link"
              name="link"
              onChange={(link) => {
                form.link = link;
                errors.link = "";
                this.setState({ form, errors });
              }}
              value={form.link}
              error={errors.link}
            />
          </div>
         
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
                <h2 className="mb-0 float-left">Create Popular Courses</h2>
              </div>
            </CardHeader>

            <CardBody className="bg-secondary position-relative">
              {showLoader && (
                <div className="overlapping-loader">
                  <Loader />
                </div>
              )}
              {this.renderForm()}
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
  //editSliderImage
  editSliderImage: (params) => dispatch(editSliderImage(params)),
  getPages: (params) => dispatch(getPages(params)),
  createStat: (params) => dispatch(createStat(params)),
});

export default connect(mapStateToProps, mapDispatchToprops)(CreatePopularCourses);
