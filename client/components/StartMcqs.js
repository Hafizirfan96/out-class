import React, { useState } from "react";
import { Formik, ErrorMessage } from "formik";
import { postRecord } from "../store/api/quizBank";
import { useDispatch } from "react-redux";
import {  useHistory } from "react-router-dom";

export default function StartMcqs({ quizMcqs, setCurrentPage, currentPage, name ,quizBankId, quizBankQA }) {
  const [practice, setpractice] = useState([]);
  const [solved, setSolved] = useState([]);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const history = useHistory()
const fuck ={
    0: "A",
    1:"B",
    2:"C",
    3:"D"
}
  // useState
  const initialValues = {
    op: "",
    // description: "",
    // image: "",
  };
  const onSubmit = async (values) => {
    var as = {};
    var as2 = {
      name: "ali",
      age: 30,
      role: "admin",
    };
    practice.push(as, as2);
    console.log("asdasd====", practice);
    console.log("value-===>>", values);
    // localStorage.setItem("haris", "hr")
  };

  const handleChangew = (e, question, correctAnswer, options, explanation) => {
      const solvedMcQ = {
          answer:[e.target.value],
          question: question,
          correctAnswer:correctAnswer,
          options:options,
          explanation:explanation
        }
        setSolved([...solved, solvedMcQ]);
        // setCurrentPage(currentPage+1);
        console.log("handleChange==>>", e.target, question);

  };

  const save =()=>{
    console.log("name000===>>",name)
    console.log("quiz id===>>",quizBankId)
    console.log("quiz QA id===>>",quizBankQA)
let user=localStorage.getItem("user")
user=JSON.parse(user)
console.log("user===> ", user._id)
    console.log(solved);
    dispatch(
        postRecord({
            body:{
               
                name:name,
                quizBank:quizBankId,
               user: user._id,
               quizBankQA:quizBankQA,
                solvedQuiz:solved,

            },
            onSuccess: (res) => {
                console.log("res", res)
          //  navigate("/quiz-result");
           history.push("/quiz-result");

            }

        }))
  }
  return (
    <>
      {quizMcqs?.map((fl) => {
        console.log("fl===> ", fl)
        return (
          <>
          
            <div className="question_wrap_step">
              <h5 className="sub_heading mb-3">{fl.question}</h5>
              <div class="lender-with-cross">
                <Formik
                  initialValues={initialValues}
                  //   validationSchema={validationSchema}
                  onSubmit={onSubmit}
                  //   onSubmit={(values) => {
                  //     console.log("feedback values", values);
                  //   }}
                >
                  {({
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    errors,
                    touched,
                  }) => (
                    <>
                      <ul>
                        {fl.options?.map((op, index) => {
                          return (
                            <>
                              <li class="option">
                                <input
                                  type="radio"
                                  name="op"
                                  onChange={(e) =>
                                    handleChangew(e, fl.question, fl.correctAnswer, fl.options, fl.explanation)
                                  }
                                  onBlur={handleBlur("op")}
                                     value={op}
                                  // name="op"
                                  id={op}
                                  class="custom-checkbox"
                                />
                                <label class="bankClkTrack" for={op}>
                                  <span class="option_title title_1">{op}</span>
                                </label>
                                <span className="nubmer">{fuck[index]}</span>
                              </li>
                            </>
                          );
                        })}
                        {/* 							
							<li class="option">
								<input type="radio" name="lightest-gas" id="Hydrogen" class="custom-checkbox" />
								<label class="bankClkTrack" for="Hydrogen"><span class="option_title title_1">{fl.options}</span></label>
                <span className='nubmer'>2</span>
							</li>
							<li class="option">
								<input type="radio" name="lightest-gas" id="Carbon_dioxide" class="custom-checkbox" />
								<label class="bankClkTrack" for="Carbon_dioxide"><span class="option_title title_1">   Carbon dioxide</span></label>
                <span className='nubmer'>3</span>
							</li>
							<li class="option">
								<input type="radio" name="lightest-gas" id="Argon" class="custom-checkbox" />
								<label class="bankClkTrack" for="Argon"><span class="option_title title_1"> Argon</span></label>
                <span className='nubmer'>4</span>
							</li> */}
                      </ul>
                      
                    </>
                  )}
                </Formik>
                
              </div>
            </div>
          </>
        );
      })}
      {/* <button onClick={save}>saaaaaave</button> */}
      <div className='btn_wrap flex-columan sav-paus'>
          <button className='btn btn_previs mr-2'>Pause</button>
          <button className='btn btn-danger2' 
          onClick={save}
          >Save & Exit</button>
        </div>
    </>
  );
}
