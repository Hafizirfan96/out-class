
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
  editMCQS,
  loadStats,
  createStat,
  editSliderImage,
  getonemcq

} from "../../../store/api/quizCard";
import QuizCard from "./QuizCard";
import { conditionallyUpdateScrollbar } from "reactstrap/lib/utils.js";
const schema = {
  correctAnswer1: Joi.string().required(),
  // desc: Joi.string().optional().allow(""),
  explanation: Joi.string().required(),
  option1: Joi.string().required(),
  option2: Joi.string().required(),
  option3: Joi.string().required(),
  option4: Joi.string().required(),
  question: Joi.string().required(),

};

class EditQuizMcqs extends Component {
  state = {
    id: "",
    res:"",
    pages: [],
    form: {
      correctAnswer: [],
      // answer: "",
      explanation: "",
   _id:"",
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
    errors: {},
    showLoader: false,
    imageSource: null,
    imagePreview: "",

    mobileImageSource: null,
    mobileImagePreview: "",
    form2:{

        // published:false,
    },
    op:"",
    op2:"",
    op3:"",
    op4:"",

  };
  componentDidMount = () => {
    const { id } = this.props.match.params;
    this.setState({ id });
    this.loadSlider(id);
    this.loadPages();
    // console.log("bar id =====>>", this.state.id)
  };
  
  

  loadPages = () => {
    this.props.getPages({
      onSuccess: (res) => {
        this.setState({ pages: res.data.data });
      },
    });
  };

  loadSlider = () => {
   
    this.setState({ showLoader: true });
    const id = localStorage.getItem("QAID")
    const mcq = localStorage.getItem("mcqid")
    // console.log("mcq id=====>>>", _id)
    // console.log("QA id=====>>>", id)
    // const _id="63d8d8160b8d012405e2b71e"
    this.props.getonemcq({
      mcq,
      id,
      
      onSuccess: (res) => {
        console.log("RES =>", res.data.data.options[0]);
        // console.log("ressss===== =>", res.data.data[0].mcqs);
// {this.state.id = res.data.data[0].mcqs[1]? <> ali</>:<>raza</>}
        // const { form } = this.state;
        // for (let key in form) form[key] = res.data.data[key];

        // this.setState({ form });

    this.state.res= res.data.data;
    console.log("data==-=--=->>", this.state.res)
        // console.log("RE dataaa =>", res.data.data.correctAnswer);
this.state.op=res.data.data.options[0]
this.state.op2=res.data.data.options[1]
this.state.op3=res.data.data.options[2]
this.state.op4=res.data.data.options[3]
       
      },

      onEnd: () => {
        this.setState({ showLoader: false });
      },
    });
  };
  onFormSubmit = (e) => {
    this.state.form.options.push(this.state.form2.option1,this.state.form2.option1,this.state.form2.option3,this.state.form2.option4)
    this.state.form.correctAnswer.push(this.state.form2.correctAnswer1)
    console.log("form", this.state.form)
    
    const id = localStorage.getItem('QAID');
    // console.log("id==-=-=-=-=-=>>", id)
    const { form } = this.state;
    e.preventDefault();
    const id2 = this.state.id;
    console.log("this id ===" , id2)
    this.state.form._id= id2

console.log("asdfasdf", form )
    
    // const errors = validateSchema(form, schema);
    // if (errors) return this.setState({ errors });

    this.setState({ showLoader: true });

    this.props.editMCQS({
     id ,
      body: form,
       onSuccess:()=>{
        window.location.reload();
       }, 
      onEnd: () => {
        this.setState({ showLoader: false });
      },
    });

    
    
  };
  renderForm = () => {
    const {
        id,
      form,
      res,
      errors,
      imagePreview,
      pages = [],
      mobileImagePreview,
      form2,
      op,
      op2,
      op3,
      op4,
    } = this.state;
    
    console.log("form 2" , form)
console.log("response=====>>>", res.options)
    const selectList = pages.map((p) => {
      return { label: p.title, value: "/page/" + p.slug };
    });
    return (
      <form onSubmit={this.onFormSubmit}>
           <div className="row">
        <div className="col-12">
            <Input
              label={` Question .......  ${ res.question}  `}
              
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
          {/* <h1>{this.state.f}</h1> */}
          <div className="col-12">
            <Input
              label={`CorrectAnswer ....... ${res.correctAnswer}`}
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
              label={`Option A ....... ${op} `}
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
                            label={`Option B ....... ${op2} `}

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
                    label={`Option C ....... ${op3} `}

              placeholder="option "
              name="option3"

              onChange={(option3) => {
                form2.option3 = option3;
                errors.option3 = "";
                this.setState({ form, errors });
              }}
              value={form2.option3}
              error={errors.option3}
            /> <Input
            label={`Option D ....... ${op4} `}

            placeholder="option "
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
              label={`Explanation ....... ${res.explanation}`}
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
  getonemcq: (params) => dispatch(getonemcq(params)),
  loadStats: (params) => dispatch(loadStats(params)),
  editMCQS: (params) => dispatch(editMCQS(params)),
  getPages: (params) => dispatch(getPages(params)),
});

export default connect(mapStateToProps, mapDispatchToprops)(EditQuizMcqs);
