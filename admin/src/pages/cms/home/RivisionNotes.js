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
// import { editHomeJoin, getHomeJoin } from "../../../store/api/homeJoin";
import {editHomeMiddle, getHomeMiddle } from "../../../store/api/liveClasses";

import RichEditor from "../../../components/Inputs/RichEditor";

const schema = {
  heading7: Joi.string().optional().allow(""),
  text7: Joi.string().optional().allow(""),
  text9: Joi.string().optional().allow(""),
  text10: Joi.string().optional().allow(""),
  // buttonText: Joi.string().optional().allow(""),
  // buttonLink: Joi.string().optional().allow(""),
  // buttonText2: Joi.string().optional().allow(""),
  // buttonLink2: Joi.string().optional().allow(""),
};

class EditRivisionNotes extends Component {
  state = {
    id: "",
    pages: [],
    form: {
      heading7: "",
      text7: "",
      text9: "",
      text10: "",
      // buttonText: "",
      // buttonLink: "",
    },
    errors: {},
    showLoader: false,
    imageSource: null,
    imagePreview: "",
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
    this.props.getHomeMiddle({
      id,
      onSuccess: (res) => {
        const { form } = this.state;
        for (let key in form) form[key] = res.data.data[key];

        const imagePreview = res.data.data.image7 || "";
        this.setState({ form, imagePreview });
      },

      onEnd: () => {
        this.setState({ showLoader: false });
      },
    });
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    const { form, id, imageSource } = this.state;
    const errors = validateSchema(form, schema);
    if (errors) return this.setState({ errors });

    this.setState({ showLoader: true });

    if (imageSource) {
      form.image = imageSource;
    }

    const formData = new FormData();
    for (let key in form) formData.append(key, form[key]);

    this.props.editHomeMiddle({
      id,
      body: formData,
      onEnd: () => {
        this.setState({ showLoader: false });
      },
    });
  };

  renderForm = () => {
    const { form, errors, imagePreview, pages = [] } = this.state;
    const selectList = pages.map((p) => {
      return { label: p.title, value: "/page/" + p.slug };
    });
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="row">
          <div className="col-12">
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
              label="Heading"
              placeholder="Heading"
              name="heading"
              onChange={(heading7) => {
                form.heading7 = heading7;
                errors.heading7 = "";
                this.setState({ form, errors });
              }}
              value={form.heading7}
              error={errors.heading7}
            />
          </div>

          <div className="col-12">
            <Input
              label="Text"
              type="textarea"
              rows={3}
              placeholder="Text"
              name="text"
              onChange={(text7) => {
                form.text7 = text7;
                errors.text7 = "";
                this.setState({ form, errors });
              }}
              value={form.text7}
              error={errors.text7}
            />
          </div>
          <div className="col-12">
            <Input
              label="Text 2"
              type="textarea"
              rows={3}
              placeholder="Text 2"
              name="text"
              onChange={(text9) => {
                form.text9 = text9;
                errors.text9 = "";
                this.setState({ form, errors });
              }}
              value={form.text9}
              error={errors.text9}
            />
          </div>
          <div className="col-12">
            <Input
              label="Text 10"
              type="textarea"
              rows={3}
              placeholder="Text 10"
              name="text"
              onChange={(text10) => {
                form.text10 = text10;
                errors.text10 = "";
                this.setState({ form, errors });
              }}
              value={form.text10}
              error={errors.text10}
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
                <h2 className="mb-0 float-left">Edit Revision Notes Section</h2>
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
  editHomeMiddle: (params) => dispatch(editHomeMiddle(params)),
  getHomeMiddle: (params) => dispatch(getHomeMiddle(params)),
  getPages: (params) => dispatch(getPages(params)),
});

export default connect(mapStateToProps, mapDispatchToprops)(EditRivisionNotes);
