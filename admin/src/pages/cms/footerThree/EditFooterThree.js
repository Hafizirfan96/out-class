import React, { Component } from "react";
import { Container, Card, CardHeader, CardBody, Button } from "reactstrap";
import Joi from "joi-browser";

import Header from "components/Headers/Header.jsx";
import Loader from "../../../components/Loader";
import Input from "../../../components/Inputs/Input";

import { connect } from "react-redux";
import validateSchema from "../../../helpers/validation";

import { getFooterLink, editFooterLink } from "../../../store/api/footerThree";
import MySelect from "../../../components/Inputs/MySelect";

import { getPages } from "../../../store/api/dynamicPages";
const schema = {
  name: Joi.string().required(),
  link: Joi.string().required(),
};
class EditFooterThree extends Component {
  state = {
    pages: [],
    id: "",
    form: {
      name: "",
      link: "",
    },
    errors: {},
    showLoader: false,
  };
  componentDidMount = () => {
    const { id } = this.props.match.params;
    this.setState({ id });
    this.getMenu(id);
    this.loadPages();
  };

  loadPages = () => {
    this.props.getPages({
      onSuccess: (res) => {
        this.setState({ pages: res.data.data });
      },
    });
  };
  getMenu = (id) => {
    this.setState({ showLoader: true });
    this.props.getFooterLink({
      id,
      onSuccess: (res) => {
        const { name, link } = res.data.data;
        const form = {
          name,
          link,
        };
        this.setState({ form });
      },
      onError: (err) => {
        // this.props.history.goBack();
      },
      onEnd: () => {
        this.setState({ showLoader: false });
      },
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const { form, id } = this.state;

    const errors = validateSchema(form, schema);
    if (errors) return this.setState({ errors });
    this.setState({ showLoader: true });
    this.props.editFooterLink({
      id,
      body: form,
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
              label="Link"
              placeholder="Link"
              name="Link"
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
                <h2 className="mb-0 float-left">Edit Footer Section Three Link</h2>
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
  editFooterLink: (params) => dispatch(editFooterLink(params)),
  getFooterLink: (params) => dispatch(getFooterLink(params)),
  getPages: (params) => dispatch(getPages(params)),
});

export default connect(mapStateToProps, mapDispatchToprops)(EditFooterThree);
