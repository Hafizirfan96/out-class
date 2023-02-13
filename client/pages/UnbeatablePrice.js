import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import renderHTML from "react-render-html";

import img3 from "../components/css/img3.png"
// import { getStudentStats } from "../store/api/studentStats";
import{getUnbeatablePrices} from "../store/api/unbeatablePrices"
export default function UnbeatablePrice() {
  const dispatch = useDispatch();
  const [homeJoin, setHomeJoin] = useState({
    heading: "",
    text: "",
    text1: "",
    image:"",
  });
  useEffect(() => {
    dispatch(
      getUnbeatablePrices({
        onSuccess: (res) => {
          setHomeJoin(res.data.data);
        },
      })
    );
  }, []);
  return (
    <div className='wrap-unbeat'>
        <div className='unbeat'>
        <h1 className='unbeat-h1'>{homeJoin.heading}</h1>
        <p className='unbeat-p'> {homeJoin.text1}</p>
        <div className='plans'>
        {renderHTML(homeJoin.text)}
          {/* {homeJoin.text} */}
        </div>
        </div>
        <div className='unbeat-img'>
            <img
            src={homeJoin.image}
            />
        </div>

    </div>
  )
}
