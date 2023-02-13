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
  createMCQs,
} from "../../../store/api/quizCard";
// import {
//   createHomeSlider,
//   editSliderImage,
// } from "../../../store/api/homeSliders";
const schema = {
    correctAnswer1: Joi.string().required(),
    // desc: Joi.string().optional().allow(""),
    explanation: Joi.string().required(),
    option1: Joi.string().required(),
    option2: Joi.string().required(),
    option3: Joi.string().required(),
    option4: Joi.string().required(),
    question: Joi.string().required(),
  // buttonLink: Joi.string().optional().allow(""),
};

class CreateQuizMcqs2 extends Component {
  state = {
    pages: [],
    form: {
        correctAnswer: [],
        // answer: "",
        explanation: "",
     
        question:"",
        options:[]

    },
    form2: {
        option1:"",
        option2:"",
        option3:"",
        option4:"",
        correctAnswer1:"",
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

  onFormSubmit = (e) => {
    this.state.form.options.push(this.state.form2.option1,this.state.form2.option1,this.state.form2.option3,this.state.form2.option4)
    this.state.form.correctAnswer.push(this.state.form2.correctAnswer1)
    console.log("form", this.state.form)
    
    const id = localStorage.getItem('QAID');
    console.log("id==-=-=-=-=-=>>", id)
    e.preventDefault();
    const { form } = this.state;
    // const errors = validateSchema(form, schema);
    // if (errors) return this.setState({ errors });
    console.log("form2", form)

    // this.setState({ showLoader: true });

    this.props.createMCQs({
        id,
      body: form,
      onSuccess: () => {
        this.props.history.goBack();
        // console.log("fuck u ols")
      },
      onEnd: () => {
        this.setState({ showLoader: false });
      },
    });
  };
  onFormSubmit2=()=>{
   
  }
saveinput =(e)=>{
    this.setState({
        input :e.target.value
    })
}
  renderForm = () => {
    const {
      form,
      form2,
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
        <div className="col-12">
            <Input
              label="Question"
              placeholder="question"
              name="question"
              onChange={(question) => {
                form.question = question;
                errors.question = "";
                this.setState({ form, errors });
              }}
              value={form.question}
              error={errors.question}
            />
          </div>
          <div className="col-12">
            <Input
              label="CorrectAnswer"
              placeholder="correctAnswer"
              name="correctAnswer1"
              onChange={(correctAnswer1) => {
                form2.correctAnswer1 = correctAnswer1;
                errors.correctAnswer1 = "";
                this.setState({ form, errors });
              }}
              value={form2.correctAnswer1}
              error={errors.correctAnswer1}
            />
          </div>
          <div className="col-12">
            <Input
              label="Option A"
              placeholder="option"
              name="option1"
              
              onChange={(option1) => {
                form2.option1 = option1;
                errors.option1 = "";
                this.setState({ form, errors });
              }}
              value={form2.option1}
              error={errors.option1}
            />
             <Input
              label="Option B"
              placeholder="option"
              name="option2"

              onChange={(option2) => {
                form2.option2 = option2;
                errors.option2 = "";
                this.setState({ form, errors });
              }}
              value={form2.option2}
              error={errors.option2}
            />
             <Input
              label="Option C"
              placeholder="option"
              name="option3"

              onChange={(option3) => {
                form2.option3 = option3;
                errors.option3 = "";
                this.setState({ form, errors });
              }}
              value={form2.option3}
              error={errors.option3}
            /> <Input
            label="Option D"
            placeholder="option"
            name="option4"

            onChange={(option4) => {
              form2.option4 = option4;
              errors.option4 = "";
              this.setState({ form, errors });
            }}
            value={form2.option4}
            error={errors.option4}
          />
          </div>
          <div className="col-12">
            <Input
              label="Explanation"
              placeholder="explanation"
              name="explanation"
              onChange={(explanation) => {
                form.explanation = explanation;
                errors.explanation = "";
                this.setState({ form, errors });
              }}
              value={form.explanation}
              error={errors.explanation}
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
                <h2 className="mb-0 float-left">Create Quiz MCQS Option</h2>
              </div>
            </CardHeader>

            <CardBody className="bg-secondary position-relative">
              {showLoader && (
                <div className="overlapping-loader">
                  <Loader />
                </div>
              )}
              {this.renderForm()}
              {/* {this.renderPdfForm()} */}

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
  createMCQs: (params) => dispatch(createMCQs(params)),
  
});

export default connect(mapStateToProps, mapDispatchToprops)(CreateQuizMcqs2);
