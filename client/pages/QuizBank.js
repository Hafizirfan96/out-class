import React from "react";
import { useDispatch } from "react-redux";
import { loadQuizBank } from "../store/api/quizBank";
import { loadFooterFour } from "../store/api/footerFour";
import http from "../services/http";
import Axios from "axios";

export default function QuizBank() {
  //     const dispatch = useDispatch();
 
  //   const [quizBank , SetQuizBank] = useState([]);
  useEffect(() => {
    // dispatch(
    //     loadFooterFour({
    //     onSuccess: (res) => {
    //         // SetQuizBank(res.data.data);
    //         console.log("res====", res)
    //     },
    //   })
    // );
    
  }, []);
  return (
    <div
      style={{
        marginTop: "20%",
      }}
    >
      QuizBank
    </div>
  );
}
