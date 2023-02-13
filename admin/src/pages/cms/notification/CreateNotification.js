import React, { Component } from "react";
import { Container, Card, CardHeader, CardBody, Button } from "reactstrap";
import Joi from "joi-browser";

import Header from "components/Headers/Header.jsx";
import Loader from "../../../components/Loader";
import Input from "../../../components/Inputs/Input";
import MySelect from "../../../components/Inputs/MySelect";

import { connect } from "react-redux";
// import { createFooterLink } from "../../../store/api/f";
import {
    editStat,
    editSliderImage,
    createStat,
  } from "../../../store/api/notification";
import validateSchema from "../../../helpers/validation";

const schema = {
    title: Joi.string().required(),
    desc: Joi.string().required(),
    link: Joi.string().required(),
    category: Joi.string().required(),
    
};
class CreateNotification extends Component {
  state = {
    pages: [],
    form: {
        title:"",
        desc: "",
      link: "",
      category:"",
    },
    errors: {},
    showLoader: false,
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const { form } = this.state;
    const errors = validateSchema(form, schema);
    if (errors) return this.setState({ errors });

    this.setState({ showLoader: true });

    this.props.createStat({
      body: form,
      onSuccess: () => {
        this.props.history.goBack();
      },
      onEnd: () => {
        this.setState({ showLoader: false });
      },
    });
  };

  renderForm = () => {
    const { form, errors, pages } = this.state;
    const selectList = pages.map((p) => {
      return { label: p.title, value: "/page/" + p.slug };
    });
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="row">
          <div className="col-12">
            <Input
              label="Title"
              placeholder="title"
              name="title"
              onChange={(title) => {
                form.title = title;
                errors.title = "";
                this.setState({ form, errors });
              }}
              value={form.title}
              error={errors.title}
            />
          </div>

          <div className="col-12">
            <Input
              label="Description"
              placeholder="Description"
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
              label="Link"
              placeholder="Link"
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
          <div className="col-12">
            <Input
              label="category"
              placeholder="category"
              name="category"
              onChange={(category) => {
                form.category = category;
                errors.category = "";
                this.setState({ form, errors });
              }}
              value={form.category}
              error={errors.category}
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
                <h2 className="mb-0 float-left">Create Notification</h2>
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
    createStat: (params) => dispatch(createStat(params)),
});

export default connect(mapStateToProps, mapDispatchToprops)(CreateNotification);
