import React, { Component } from "react";
  
import { Container, Card, CardHeader, CardBody , Button,Label} from "reactstrap";
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

import {
  editStat,
  editSliderImage,
  createStat,
  createCsv,
} from "../../../store/api/quizCard";
// import {
//   createHomeSlider,
//   editSliderImage,
// } from "../../../store/api/homeSliders";
const schema = {
    name: Joi.string().required(),
    // desc: Joi.string().optional().allow(""),
    type: Joi.string().required(),
    duration: Joi.string().required(),
//   link: Joi.string().required(),
  // buttonLink: Joi.string().optional().allow(""),
};

class CreateQuizMcqs extends Component {
  state = {
    pages: [],
    form: {
        name: "",
        type: "",
        duration: "",
    //   color: "",
    //   link: "",
    // published:false,
    },
    csv:"",
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
  onFormSubmitPdf = (e) => {
    e.preventDefault();
    const id = localStorage.getItem('QAID');
console.log("csv./.,.,.,",id)
    this.setState({ showLoader: true });

    const formData = new FormData();

    formData.append("csv", this.state.csv);

  
    this.props.createCsv({
      id,
      body: formData,

      onSuccess: (res) => {
        console.log("res----", res);
        this.props.history.goBack();


      },
      onEnd: () => {
        this.setState({ showLoader: false });
      },
    });
  };

  renderPdfForm = () => {
    const { form, lesson } = this.state;

    return (
      <form>
        <div className="row">
       

          <div className="col-12">
            <label>
              <span className="btn btn-info">Choose CSV</span>
              <input
                type="file"
                multiple
                accept=".csv"
                className="d-none"
                onChange={(e) => {
                  const video = e.target.files[0];
                  console.log("asdasd===", video);
                  // console.log("pdf name===",video.name)
                  this.setState({ csv: video });
                }}
              />
            </label>
            {console.log("asdasd===>>",this.state.csv.name)}
            <h1 style={{fontSize:"1.4vw"}}>{this.state.csv.name}</h1>
            {/* {this.state.doc.name ? (
              <h1 style={{ fontSize: "1.2vw" }}>{this.state.doc.name} </h1>
            ) : (
              <> */}
              {/* <h1 style={{ fontSize: "1.2vw" }}>{this.state.lesson.quiz.doc} </h1> */}

              {/* </> */}
            {/* )} */}
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
         
        </div>
      </form>
    );
  };
  onFormSubmit = (e) => {
    const id = localStorage.getItem('id');
    console.log("id==-=-=-=-=-=>>", id)
    e.preventDefault();
    const { form } = this.state;
    const errors = validateSchema(form, schema);
    if (errors) return this.setState({ errors });

    this.setState({ showLoader: true });

    this.props.createStat({
        id,
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
                <h2 className="mb-0 float-left">Create Quiz MCQS Option</h2>
              </div>
            </CardHeader>

            <CardBody className="bg-secondary position-relative">
              {showLoader && (
                <div className="overlapping-loader">
                  <Loader />
                </div>
              )}
              {/* {this.renderForm()} */}
              {this.renderPdfForm()}
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
  createCsv: (params) => dispatch(createCsv(params)),
  
});

export default connect(mapStateToProps, mapDispatchToprops)(CreateQuizMcqs);
