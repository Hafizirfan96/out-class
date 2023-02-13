import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loadInfoCards } from "../store/api/infoCards";
import { Link } from "react-router-dom";

function WhyData(props) {
  const dispatch = useDispatch();

  const [infoCards, setInfoCards] = useState([]);

  useEffect(() => {
    dispatch(
      loadInfoCards({
        onSuccess: (res) => {
          setInfoCards(res.data.data);
        },
      })
    );
  }, []);
  return (
    <>
    
      <div className="new-homeslider1-wrap">
        <div className="new-homeslider1-wrap-card">
        <div className="btn--1">
           
      <Link className="whyData-btn">
      Sign up for free trail
      </Link>
        </div>
        {infoCards.map((cardItem) => (
          <div className="new-homeslider1-card">
            <div className="new-homeslider1-card-img">
            <img src={cardItem.image}/>
            </div>
           
            <p className="whydata-p"> {cardItem.text} </p>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

export default WhyData;
