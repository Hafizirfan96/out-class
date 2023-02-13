import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ayes from "./css/ayes.png";
import { Carousel } from "react-bootstrap";

import mdcat from "./css/mdcat.png";
import sept from "./css/sept.png";
import { useDispatch } from "react-redux";
import { loadHomeSliders } from "../store/api/whatsNew";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import next from "./css/slidernext.png";
import pre from "./css/sliderpre.png";
function WhatsNew(props) {
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
    dots: true,
      infinite: true,
      // speed: 500,
      slidesToShow: 3,
      
      slidesToScroll: 3,
      nextArrow: 
      <div className="teacher-slider">

        <img className="whatsnew-next"  src={next}/>
      </div>,
      prevArrow: 
      <div className="teacher-slider">
      
      <img className="whatsnew-pre" src={pre}/></div>,
      autoplay: true,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
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
  // style={{marginBottom:"4%"}}
  className="body-whatsnew"
  >
  <h4 className="whats_new_h111">
            {" "}
            What’s New <img src={ayes} className="whats_new_img" alt="ayes" />{" "}
          </h4>
        <div className="wrap-whatsnew-card">
        <Slider {...settings} arrows={true}>
        {sliders.map((item) => {
              const { id, heading, image ,link,buttonName} = item;
              {
                console.log("whatsnew", item);
              }
              return (
                <div className="wrap-whatsnew">
                  <div className="whatsnew-cardstyle">
                    
                  <h2 className="whatsnew-cardstyle-h1">{heading}</h2>

                  <div className="whatsnew-cardstyle-img">
                  <img src={image} alt="sept" />{" "}

                  </div>
                  </div>
                  <a href={link} className="btn_linke1">
                      {buttonName}
                      </a>{" "}
                </div>
               );
            })}
{/*           
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
              })} */}
         
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
 
    </>
  );
}

export default WhatsNew;
