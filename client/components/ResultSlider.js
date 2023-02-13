import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";

import { useDispatch } from "react-redux";
import img1 from "./css/img1.png";
import img2 from "./css/img2.png";

import { loadHomeSliders } from "../store/api/resultSlider";
// import "./css/newstyle.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import next from "./css/slidernext.png";
import pre from "./css/sliderpre.png";
function ResultSlider(props) {
  const dispatch = useDispatch();
  
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

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
      slidesToShow: 1,

      slidesToScroll: 1,
      nextArrow: 
      <div className="resultslider-np-btn">

        <img className="resultslider-btn-next"  src={next}/>
      </div>,
      prevArrow: 
      <div className="teacher-slider">
      
      <img className="resultslider-btn-pre" src={pre}/></div>,
      autoplay: true,
      // speed: 4000,
      // autoplaySpeed: 4000,
      // cssEase: "linear"
     
  };

  return (
    <div className="wrap-Result-banner">
        <h1>Consistent Results, Year after Year</h1>
        <p>Concep clarity is our goal, grades are our responsibility</p>

    <div className="Result-banner">

    <div className="slider-width">
    {/* <section className="banner_home pt0">
      <Carousel
        indicators={false}
        prevIcon={
          <span className="carousel-control-next-icon mr-slider" aria-hidden="true">
            <i className="far fa-long-arrow-alt-left"></i>{" "}
          </span>
        }
        nextIcon={
          <span className="carousel-control-next-icon ml-slider" aria-hidden="true">
            <i className="far fa-long-arrow-alt-right"></i>{" "}
          </span>
        }
        activeIndex={index}
        onSelect={handleSelect}
      >
         {sliders.map((coursalItem, index) => (
       <Carousel.Item
       key={`coursalItem-${coursalItem._id}-${index}`}
       >
        <img
          className="d-block w-100"
          src={coursalItem.image}
          alt="First slide"
        />
        </Carousel.Item>
         ))}
      </Carousel>
      
    </section> */}
     <Slider {...settings} arrows={true}>
          
          {sliders.map((t) => {
            return (
              <div> 
             <div className="slider-map" key={t._id}>
              <img src={t.image}/>
             </div>
             </div>
  
            );
          })}
           
          </Slider>
    </div>
    <div className="result-banner-img">
        <img
        src={img2}
        />
    </div>
    </div>
    </div>
  );
}

export default ResultSlider;
