import React, { useState, useEffect } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img8 from "./css/user.png";
import next from "./css/slidernext.png";
import pre from "./css/sliderpre.png";
import studentimage from "./css/Picture2.jpg";
import shap from "./css/shap.png";
import { useDispatch } from "react-redux";
import { loadStudents } from "../store/api/students";
import { DynamicStar } from 'react-dynamic-star';
export default function StudentRating() {
	const dispatch = useDispatch();
  const [sliders, setSliders] = useState([]);
  useEffect(() => {
    dispatch(
		loadStudents({
        onSuccess: (res) => {
          setSliders(res.data.data);
        },
      })
    );
  }, []);
	const settings = {
		// dots: true,
		  infinite: true,
		  // speed: 500,
		  slidesToShow: 1,
		  
		  slidesToScroll: 1,
		  nextArrow: 
		  <div className="teacher-slider">
	
			<img className=" homestudent13-next"  src={next}/>
		  </div>,
		  prevArrow: 
		  <div className="teacher-slider">
		  
		  <img className="homeSlider3-pre " src={pre}/></div>,
		  autoplay: true,
	  };
  return (
    <div>
		  <div className='homeSlider4'>
    <h1> Why our  </h1>
    <h1 className='bT2'>students love us…</h1>
</div>

<div className='wrap-student-rating'>

		 <Slider {...settings} arrows={true}>
		 {sliders.map((item) => {
              const { review, name, designation,image ,rating} = item;
              {
                console.log("student===2", item);
              }
              return (
                <div>
			<div className='student-review-card'>
				<div className='wrap-student-review-card-img'>

				<div className='student-review-card-img'>
					
<img src={image} />
<h1 className='sr-student-name'>
{name}

</h1>
<p className='sr-student-cat'> 
{designation}

</p>
				</div>
				</div>
				<div className="rating-starrr1">
            <DynamicStar rating={rating} outlined={true} totalStars={5} width={30} height={30}/>
			<h1 style={{fontSize:"1.2vw", textAlign:"center", marginTop:"2%"}}>[{rating}]</h1>
        </div>
            <div className='student-review-text'>
			<img src={shap}/>
				<p className='student-rating-text'> {review}</p>
			
			</div>
			</div>
          </div>
                );
              })}
      
     
		  </Slider>
</div>
	</div>
  )
}
