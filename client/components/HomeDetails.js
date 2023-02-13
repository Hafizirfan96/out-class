import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import img1 from "./css/img4.png";
import img2 from "./css/img5.png";
import img3 from "./css/img6.png";
import img4 from "./css/img7.png";
import img5 from "./css/img8.png";
import img6 from "./css/img9.png";
import bottom from "./css/colorline2.png";
import top from "./css/colorline1.png";
import line1 from "./css/line1.png"
import line2 from "./css/line2.png"
// import { getHomeJoin } from "../store/api/homeJoin";
import { getHomeMiddle } from '../store/api/liveClasses';
import { getStudentStats } from "../store/api/studentStats";
export default function HomeDetails() {
  const dispatch = useDispatch();

    const [homeJoin, setHomeJoin] = useState({
        heading1: "",
        image: "",
        text1: "",
        heading2: "",
        image2: "",
        text2: "",
        heading3: "",
        image3: "",
        text3: "",
        heading4: "",
        image4: "",
        text4: "",
        heading5: "",
        image5: "",
        text5: "",
        heading6: "",
        image6: "",
        text6: "",
         heading7: "",
        image7: "",
        text7: "",
        heading8: "",
        image8: "",
        text8: "",
        text9: "",
        text10: "",
        // buttonText: "",
        // buttonLink: "",
        // buttonText2: "",
        // buttonLink2: "",
      });
      const [studentStats, setstudentStats] = useState({
        score: "",
        scoreText: "",
        rating: "",
        ratingText: "",
        ratingSubtext: "",
        partnership: "",
        partnershipText: "",
      });
  useEffect(() => {
    dispatch(
        getHomeMiddle({
        onSuccess: (res) => {
          setHomeJoin(res.data.data);
        },
      })
    );
  }, []);
  useEffect(() => {
    dispatch(
        getStudentStats({
        onSuccess: (res) => {
            setstudentStats(res.data.data);
        },
      })
    );
  }, []);
  return (
<div className='wrap-homeDetails'>
    <h1 className='wrap-homeDetails-h1'>
Start Your Out-class journey today!
    </h1>
    <p className='wrap-homeDetails-p'> 
    Test prep is a combination of concept clarity, practice questions, exam tips and consistent revison. we ensure all that and more, which reflects in the grades our students get. 
    </p>
<div className='wrap-setion-details'>
    <div className='wrap-setion-heading1'>
    {/* <h1>Live Classes with Top Teachers </h1> */}
    {/* <p>Enroll in live classes, taught by the best exam prep gurus</p> */}
    <h1>

{homeJoin.heading1}

    </h1>
    <p>
    {homeJoin.text1}

    </p>
    </div>
    <div className='wrap-setion-img1'>
        {/* <img src={img5}/> */}
        <img src={homeJoin.image}/>
    </div>
</div>
    <img className='line' src={line2}/>
<div className='wrap-setion-details'>
    <div className='wrap-setion-img2'>
        {/* <img src={img6}/> */}
        <img src={homeJoin.image2}/>
    </div>
    <div className='wrap-setion-heading2'>
    {/* <h1>Self-Study Crash Courses </h1> */}
    {/* <p>Students can choose any topic of any subject at any time</p> */}
    {/* <p>Our crash courses guarantee test prep in crunch times</p> */}
    <h1>
{homeJoin.heading2}

    </h1>
    <p>
{homeJoin.text2}

    </p>
    </div>
</div>
<img className='line m30' src={line1}/>

<div className='wrap-setion-details'>
    <div className='wrap-setion-heading3'>
    <h1>
{homeJoin.heading3}

    </h1>
    <p>
{homeJoin.text3}

    </p>
    </div>
    <div className='wrap-setion-img3'>
        <img

src={homeJoin.image3}
        />
    </div>
</div>
<img className='line' src={line2}/>

<div className='wrap-setion-details'>
    <div className='wrap-setion-img'>
        <img src={homeJoin.image4}/>
    </div>
    <div className='wrap-setion-heading4'>
    <h1>
{homeJoin.heading4}

    </h1>
    <p>
{homeJoin.text4}

    </p>
    </div>
</div>
<img className='line m30' src={line1}/>

<div className='wrap-setion-details'>
    <div className='wrap-setion-heading5'>
    <h1>{homeJoin.heading5}</h1>
    <p>{homeJoin.text5}</p>
    </div>
    <div className='wrap-setion-img'>
        <img src={homeJoin.image5}/>
    </div>
</div>
<img className='line' src={line2}/>

<div className='wrap-setion-details'>
    <div className='wrap-setion-img'>
        <img src={homeJoin.image6}/>
    </div>
    <div className='wrap-setion-heading6'>
    <h1>{homeJoin.heading6} </h1>
    <p>{homeJoin.text6}</p>
    </div>
</div>
<img className='line m30' src={line1}/>

<div className='wrap-setion-details'>
    <div className='wrap-setion-heading7'>
    <h1>{homeJoin.heading7} </h1>
    <p>{homeJoin.text7}</p>
    <p>{homeJoin.text9}</p>
    <p>{homeJoin.text10}</p>
    </div>
    <div className='wrap-setion-img'>
        <img src={homeJoin.image7}/>
    </div>
</div>
<img className='line' src={line2}/>

<div className='wrap-setion-details'>
    <div className='wrap-setion-img'>
        <img src={homeJoin.image8}/>
    </div>
    <div className='wrap-setion-heading8'>
    <h1>{homeJoin.heading8} </h1>
  <p>{homeJoin.text8}</p>
    </div>
</div>
<img className='line m30' src={line1}/>
<div className=" wrap-boxshadow">
    <img className="shadowimg" src={top}/>
    <div className='wrap-94'>
        <div className='warp-94-details'>
            <h1> {studentStats.score}</h1>
            <p>{studentStats.scoreText}</p>
        </div>
        <div className='warp-94-details'>
            <h1> {studentStats.rating}</h1>
            <p>{studentStats.ratingText}</p>
            <small>{studentStats.ratingSubtext}</small>
        </div><div className='warp-94-details'>
            <h1> {studentStats.partnership}</h1>
            <p>{studentStats.partnershipText}</p>
        </div>
    </div>
    <img className="shadowimg" src={bottom}/>
    </div>

</div>
  )
}
