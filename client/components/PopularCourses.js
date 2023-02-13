import React, { useEffect, useState } from 'react'
// import "./css/newstyle.css";
import { loadHomeSliders } from "../store/api/popularCourses";
import { useDispatch } from "react-redux";

export default function PopularCourse() {
	const dispatch = useDispatch();

    const [pop, setpop] = useState([]);
    
    useEffect(() => {
     
        dispatch(
        loadHomeSliders({
          onSuccess: (res) => {
              console.log("popular courses", res.data)
            setpop(res.data.data);
 
        },
        })
      );
    }, []);
    return (
    <>
    
    <div className='box-course'>
    <h1 className='box-course-title'>
        Popular Courses
    </h1>
    <div className=' color-course'>
    {pop.map((item) => {
              const { link, name, image ,desc,color} = item;
              {
                console.log("popular courses=========>", item);
              }
              return (
               
        <div className='course-detail' >
            <div className='color-picker'
            style={{
                backgroundColor:color,
                margin:"auto"
            }}
            >

            </div>
            <h1>{name} </h1>
            <p> {desc}</p>
        </div>
                );
              })}

    </div>
    </div>
    
    </>
  )
}
