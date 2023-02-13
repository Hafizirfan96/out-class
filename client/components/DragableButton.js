import React, { useState, useEffect } from "react";
import Draggable from 'react-draggable';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function DragableButton(props) {
  const authToken = useSelector((state) => state.auth.token);
 
  return (
    <>
   
{authToken ? (
         <Draggable>
      
         <div className="moveable">
           <Link to="/dashboard">
           <h1>STUDENT DASHBOARD</h1>
           </Link>
           {/* <h1>STUDENT DASHBOARD</h1> */}
           
           </div>
       </Draggable>
        ) : (
          <div></div>
        )}
    </>
  );
}

export default DragableButton;
