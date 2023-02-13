import React from 'react'
import { useDispatch, useSelector } from "react-redux";
// import "./css/newstyle.css";
import bottom from "./css/colorline2.png";
import top from "./css/colorline1.png";
export default function OcCommunity() {
  const userCount = useSelector((state) => state.ui.homePage.data.userCount);

  return (
    <div className="wrap-community">
    <div className="flip-count">
    <img className="shadowimg" src={top}/>
      
      <div>
        <p className='community-text'>Join our community of</p>
        <div className="flip-counter-wrapper">
          {`${userCount}`.split("").map((number) => (
            <span
              className="number"
              key={number + "flip-coint-number"}
              data-number={"" + number}
            >
              <span className="primary"></span>
              {/* <span className="secondary"></span> */}
            </span>
          ))}
        </div>
        <p className="community-text">students at Out-Class</p>
      </div>
    <img className="shadowimg" src={bottom}/>

    </div>
  </div>
  )
}
