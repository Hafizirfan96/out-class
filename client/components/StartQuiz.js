import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadQAMcqs } from "../store/api/quizBank";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import StartMcqs from "./StartMcqs";
import Pagination from "./pagination";

export default function StartQuiz() {
  const [quizMcqs, SetQuizMcqs] = useState("");
  const dispatch = useDispatch();
  const params = useParams();
  const [showLoader, setShowLoader] = useState(false);
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(1)
  const [name , setName]= useState("")
  const [quizBankId , setQuizBankId]= useState("")
  const [quizBankQA , setQuizBankQA]= useState("")
    useEffect(() => {
        setLoading(true)
        dispatch(
            loadQAMcqs({
                id: params.id,
            onSuccess: (res) => {
                SetQuizMcqs(res.data.data.quizBankQA.mcqs);
              console.log("mcqs=======>>>", res.data.data.quizBankQA.mcqs.length);
              console.log("startQuiz=====>>>", res)
              setName(res.data.data.quizBankQA.name)
              setQuizBankId(res.data.data.quizBankQA.quizBank)
              setQuizBankQA(res.data.data.quizBankQA._id)
              console.log("name quizchp===>", res.data.data.quizBankQA.name)
              setLoading(false)
            },
            // onEnd: () => {
   
            //   },
          })
        );
      }, []);
      const renderLoader = () => {
        return (
          <div className="overlapping-loader">
            <Loader />
          </div>
        );
      };

      if (loading && quizMcqs.length === 0) {
        return <h2>Loading...</h2>
      }
      //Get current posts
      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
      const currentPosts = quizMcqs.slice(indexOfFirstPost, indexOfLastPost)
      const howManyPages = Math.ceil(quizMcqs.length/postsPerPage)
  return (
    <>
    
    <div
    
    
    style={{
        marginTop: "15%",
      }}
    ></div>
    <div className='quiz_head'>
		<h1> {name}</h1> </div>
        <h6 className='sub_heading text-center mt-4'
        
        style={{textAlign:"center"}}
        >COMPLETE QUIZ BANK</h6>

   {/* {showLoader && renderLoader()} */}
   {/* {quizMcqs !== "" ? (
<>

{quizMcqs.quizBankQA.mcqs?.map((fl) => {
                      return (
                        <>
                        
                        <h1> {fl.question}</h1>
                        
                        
                        
                        
                        </>
                      )})}

</>
    
   ):(
    <></>
   )} */}
   <div className="wrap-quiz-start">
   	<div className='quiz_paper mt-5'>
       <div className='quiz_paper_head'>
					<div className='content'>
						{/* <h6 className='sub_heading'>Question 13</h6> */}
						<p className='theme_para'>Total Questions: <span><b>{quizMcqs.length}</b></span></p>
					</div>
					<div className='time'>
						<p className='theme_para'>Time : <span className='text-danger'><b>25:07</b></span></p>
					</div>
				</div>
  <Pagination crntBtn = {currentPage} pages = {howManyPages} setCurrentPage={setCurrentPage}/>

   {quizMcqs !== "" ? (

    <>

 <StartMcqs  name={name}   quizBankId={quizBankId} quizBankQA={quizBankQA}  currentPage = {currentPage} setCurrentPage={setCurrentPage} quizMcqs={currentPosts}/>
 </>
 ):(null)}
  
                </div>
                </div>
 
                {/* <div className='btn_wrap flex-columan'>
          <button className='btn btn_previs mr-2'>Pause</button>
          <button className='btn btn-danger2'>Save & Exit</button>
        </div> */}

 </>
  )
}
