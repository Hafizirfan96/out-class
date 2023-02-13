import React, { useState, useEffect } from "react";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ayes from "./css/ayes.png";
import mdcat from "./css/mdcat.png";
import user from "./css/user.png";
// imo
import img8 from "./css/user.png";
import { Carousel } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import next from "./css/slidernext.png";
import pre from "./css/sliderpre.png";
import { useDispatch } from "react-redux";
import { loadHomeSliders } from "../store/api/studyMaterial";
export default function homeSlider3() {
	const dispatch = useDispatch();
  const [sliders, setSliders] = useState([]);
  useEffect(() => {
    dispatch(
      loadHomeSliders({
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
      slidesToShow: 3,
      
      slidesToScroll: 1,
      nextArrow: 
      <div className="teacher-slider">

        <img className=" homeSlider3-next"  src={next}/>
      </div>,
      prevArrow: 
      <div className="teacher-slider">
      
      <img className="homeSlider3-pre " src={pre}/></div>,
      autoplay: true,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
        
          }
        },
        {
          breakpoint: 426,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            
          }
        },
      ]
  };
  return (

    <>
  <div
  style={{marginBottom:"4%"}}
  >
  <div className='homeSlider4'>
    <h1> Along with </h1>
    <h1 className='bT2'>top-scoring study material</h1>
</div>
        <div className="wrap-study-material-card">
        <Slider {...settings} arrows={true}>
          
          {sliders.map((item) => {
              const { id, heading, image ,text,color} = item;
              {
                console.log("study===2", item);
              }
              return (
                <div className="study-material-card"
				style={{backgroundColor:color}}
                
                >
                  <div 
                  className="study-material-card2"
				style={{backgroundColor:color}}
                  
                  >
                <h3 className="study-material-h1"
                // style={{color:color}}
                >{heading}</h3>
                <p className="study-material-p">{text}</p>
                <div class="study-material-img">
						
						<img src={image}/>
					</div>
          </div>
              </div>
                );
              })}
         
          {/* <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div> */}
        </Slider>
        </div>
      </div>
{/* <div className='homeSlider3'>
    <h1> Along with </h1>
    <h1 className='bT'>top-scoring study material</h1>
</div>

<section class="whats_new_wrape  ">
		<div class="container-whatsNew2">
			<div class="whats_new_slider product_slider_wrap  ">
				<Carousel as="owl-carousel">
				{sliders.map((item) => {
              const { id, heading, image ,text,color} = item;
              {
                console.log("study", item);
              }
              return (
				<div class="item"  key={id} style={{width:"27%", marginRight:"4%"}}>
				<div class="card " 
				style={{backgroundColor:color}}
				>
					<h5>{heading}</h5>
					<p>{text}</p>
					<div class="img_slider">
						
						<img src={image}/>
					</div>
				</div>
		  </div>
              );
            })}
					
            
				</Carousel>
            
			</div>
		</div>
        
	</section> */}
    </>
  )
}
