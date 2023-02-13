import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadQuizBank, loadQA } from "../store/api/quizBank";
// import { loadFooterFour } from "../store/api/footerFour";
import http from "../services/http";
import Axios from "axios";
import quizimg from "../components/css/quiz.png";
import quizimg2 from "../components/css/quiz_banner.png";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { Link } from "react-router-dom";
// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

export default function NewQuizBank() {
  const dispatch = useDispatch();
  //   useEffect

  const [quizBank, SetQuizBank] = useState([]);
  const [quizQA, SetQuizQA] = useState("");
  // useState
  useEffect(() => {
    dispatch(
      loadQuizBank({
        onSuccess: (res) => {
          SetQuizBank(res.data.data);
          console.log("res====sase", res);
        },
      })
    );

  }, []);
  // localStorage.setItem('Name', "ali");
  const getquizQA = (e, id) => {
    dispatch(
      loadQA({
        id,
        onSuccess: (res) => {
          SetQuizQA(res.data.data);
          console.log("res====second", res.data.data.quizBankQA[0].quizBankQA);
          console.log("res====second", res.data.data);
          // console,("gdf",res.data.data.quizBankQA[0].quizBankQA)
        },
      })
    );
  };
  return (
    <>
      <div
        style={{
          marginTop: "20%",
        }}
      >
        <div>
          <h1 className="quiz-heading">
            Practice with 10,000+ quiz questions!
          </h1>
          <div className="wrap-quizbank">
            <div className="quiz-ctgy">
              <div className="class_list_btn">
                <ul>
                  {quizBank.map((fl) => {
                    // {console.log("footerOne", fl)}
                    return (
                      <li>
                        <button
                          type="button"
                          className="them_btn_quiz"
                          onClick={(e) => getquizQA(e, fl._id)}
                        >
                          {fl.name}
                        </button>
                      </li>
                    );
                  })}

                  <li>
                    <button type="button" className="them_btn_quiz">
                      FSc
                    </button>
                  </li>
                  <li>
                    <button type="button" className="them_btn_quiz">
                      O Levels
                    </button>
                  </li>
                  <li>
                    <button type="button" className="them_btn_quiz">
                      Matric
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="img-quizbank">
              <img src={quizimg} />
            </div>
          </div>
          <div className="quiz-btm-img">
            <img src={quizimg2} />
          </div>
        </div>
      </div>
      <div className="quiz-accordin">
        {quizQA !== "" ? (
          
          <>
          
            <div className="quiz-accordin-heading">
              <h1>
                {quizQA.quizBankQA[0].name}
                {/* FSc - PHYSICS – PART I - PUNJAB BOARD */}
              </h1>
            </div>

            {quizQA.quizBankQA[0].quizBankQA.map((fl) => {
                      return (
                        
                        <>
                           <Accordion>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="acd-head">
                  <b>{fl.name}</b>
                  <b>{fl.type}</b>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
             <div className="start-quiz-div">
              <Link to={"/quiz/" + fl._id} className="Start-quiz">
                Start Quiz
              </Link>
             </div>
          
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
                        </>
                      )})}
         
          </>
        ) : (
         null
        )}

    
      </div>
      <div className="wrap-quiz-bank">

  <div className="wrap-quiz-bank-section">
    <div className="quiz-bank-section1">
      <h1>
      Unlock 3000+ MCQ questions
      </h1>
      <p>with answer explanations</p>
    </div>
    <div className="quiz-bank-section2">
      <p>
      Buy Quiz Bank 

      </p>
    </div>
  </div>
</div>
    </>
  );
}
