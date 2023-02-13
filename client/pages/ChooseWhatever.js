import React from 'react'
import img1 from "../components/css/cw1.png";
import img2 from "../components/css/cw2.png";
import { Link } from "react-router-dom";

export default function ChooseWhatever() {
  // const navigate = useNavigate(); 
  return (
    <div className='choose-what'> 

        <h1 className='choose-heading'>Choose whatever style suits you</h1>
        <div className='wrap-whatever'>
            <div className='card-whatever' 
             onClick={() => navigate("/all-courses")}
            >
            <div className='card-w-img'>

            <img src={img2}/>
            </div>
            <Link to="/all-courses" className='card-whateverh1'>
           <h1 className='card-whateverh1'>SELF-STUDY LESSONS</h1> 
            </Link>
            {/* <h1>SELF-STUDY LESSONS</h1> */}

            </div>
            <div className='card-whatever'>
            <div className='card-w-img2'>

            <img src={img1}/>
            </div>
            <Link to="" className='card-whateverh1'>

            <h1 className='card-whateverh1'>CLASSES</h1>
            </Link>
                <p>BY SCHEDULE</p>
            </div>
        </div>
        <p style={{fontSize:"1.3vw", marginBottom:"2%"}}>Choose from a library of hundreds of pre-recorded lessons and study on your schedule with self-study lessons, or choose live classes from our superstar instructors!</p>
    </div>
  )
}
