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
import { editStudentStats,getStudentStats } from "../../../store/api/studentStats.js";
// import { getStudentStats } from "../../../store/api/studentStats.js";
import RichEditor from "../../../components/Inputs/RichEditor";

const schema = {
  score: Joi.string().optional().allow(""),
  scoreText: Joi.string().optional().allow(""),
  rating: Joi.string().optional().allow(""),
  ratingText: Joi.string().optional().allow(""),
  ratingSubtext: Joi.string().optional().allow(""),
  partnership: Joi.string().optional().allow(""),
  partnershipText: Joi.string().optional().allow(""),

  // buttonText: Joi.string().optional().allow(""),
  // buttonLink: Joi.string().optional().allow(""),
  // buttonText2: Joi.string().optional().allow(""),
  // buttonLink2: Joi.string().optional().allow(""),
};

class EditStudentStats extends Component {
  state = {
    id: "",
    pages: [],
    form: {
        score: "",
        scoreText: "",
        rating: "",
        ratingText: "",
        ratingSubtext: "",
        partnership: "",
        partnershipText: "",
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
    this.props.getStudentStats({
      id,
      onSuccess: (res) => {
        const { form } = this.state;
        for (let key in form) form[key] = res.data.data[key];

        // const imagePreview = res.data.data.image6 || "";
        this.setState({ form});
      },

      onEnd: () => {
        this.setState({ showLoader: false });
      },
    });
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    const { form, id,  } = this.state;
    const errors = validateSchema(form, schema);
    if (errors) return this.setState({ errors });

    this.setState({ showLoader: true });

    // if (imageSource) {
    //   form.image = imageSource;
    // }

    const formData = new FormData();
    for (let key in form) formData.append(key, form[key]);

    this.props.editStudentStats({
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
         <Input
           label="Score"
           placeholder="score"
           name="score"
           onChange={(score) => {
             form.score = score;
             errors.score = "";
             this.setState({ form, errors });
           }}
           value={form.score}
           error={errors.score}
         />
       </div>
        <div className="col-12">
         <Input
           label="Score Text"
           type="textarea"
           rows={3}
           placeholder="scoreText"
           name="scoreText"
           onChange={(scoreText) => {
             form.scoreText = scoreText;
             errors.scoreText = "";
             this.setState({ form, errors });
           }}
           value={form.scoreText}
           error={errors.scoreText}
         />
       </div>
       <div className="col-12">
         <Input
           label="rating"
           placeholder="rating"
           name="rating"
           onChange={(rating) => {
             form.rating = rating;
             errors.rating = "";
             this.setState({ form, errors });
           }}
           value={form.rating}
           error={errors.rating}
         />
       </div>
        <div className="col-12">
         <Input
           label="Rating Text "
           type="textarea"
           rows={3}
           placeholder="Text"
           name="ratingText"
           onChange={(ratingText) => {
             form.ratingText = ratingText;
             errors.ratingText = "";
             this.setState({ form, errors });
           }}
           value={form.ratingText}
           error={errors.ratingText}
         />
       </div>
       <div className="col-12">
         <Input
           label="Rating SubText "
           type="textarea"
           rows={3}
           placeholder="ratingSubtext"
           name="ratingSubtext"
           onChange={(ratingSubtext) => {
             form.ratingSubtext = ratingSubtext;
             errors.ratingSubtext = "";
             this.setState({ form, errors });
           }}
           value={form.ratingSubtext}
           error={errors.ratingSubtext}
         />
       </div>
       <div className="col-12">
         <Input
           label="Partnership"
           placeholder="partnership"
           name="partnership"
           onChange={(partnership) => {
             form.partnership = partnership;
             errors.partnership = "";
             this.setState({ form, errors });
           }}
           value={form.partnership}
           error={errors.partnership}
         />
       </div>
        <div className="col-12">
         <Input
           label="Partnership Text"
           type="textarea"
           rows={3}
           placeholder="partnership Text"
           name="partnershipText"
           onChange={(partnershipText) => {
             form.partnershipText = partnershipText;
             errors.partnershipText = "";
             this.setState({ form, errors });
           }}
           value={form.partnershipText}
           error={errors.partnershipText}
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
                <h2 className="mb-0 float-left">Edit Student Stats</h2>
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
    editStudentStats: (params) => dispatch(editStudentStats(params)),
    getStudentStats: (params) => dispatch(getStudentStats(params)),
  getPages: (params) => dispatch(getPages(params)),
});

export default connect(mapStateToProps, mapDispatchToprops)(EditStudentStats);
