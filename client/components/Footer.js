import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { allSetting } from "../shared/footerData";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import renderHTML from "react-render-html";
import { loadHomeSliders } from "../store/api/footerOne";
import { loadFooterTwo } from "../store/api/footerTwo";
import { loadFooterThree } from "../store/api/footerThree";
import { loadFooterFour } from "../store/api/footerFour";
import { loadQuizBank } from "../store/api/quizBank";


function Footer(props) {
  const dispatch = useDispatch();
  const [footerOne , SetFooterOne] = useState([]);
  const [footerTwo , SetFooterTwo] = useState([]);
  const [footerThree , SetFooterThree] = useState([]);
  const [footerFour , SetFooterFour] = useState([]);
    //   const [quizBank , SetQuizBank] = useState([]);
    // useEffect(() => {
    //   dispatch(
    //     loadQuizBank({
    //       onSuccess: (res) => {
    //           // SetQuizBank(res.data.data);
    //           console.log("res====", res)
    //       },
    //     })
    //   );
      
    // }, []);
  useEffect(() => {
    dispatch(
      loadHomeSliders({
        onSuccess: (res) => {
          SetFooterOne(res.data.data);
        },
      })
    );
  }, []);
  useEffect(() => {
    dispatch(
      loadFooterTwo({
        onSuccess: (res) => {
          SetFooterTwo(res.data.data);
        },
      })
    );
  }, []);
  useEffect(() => {
    dispatch(
      loadFooterThree({
        onSuccess: (res) => {
          SetFooterThree(res.data.data);
        },
      })
    );
  }, []);
  useEffect(() => {
    dispatch(
      loadFooterFour({
        onSuccess: (res) => {
          SetFooterFour(res.data.data);
        },
      })
    );
  }, []);
  // const commonData = useSelector((state) => state.ui.commonData);
  // const footerLinks = useSelector((state) => state.ui.footerLinks);
  const footer = useSelector((state) => state.ui.footer);
  return (
    <footer id="footer">
      {/* <div className="widgets">
        <div className="container">
          <h1 className="study">Study material</h1>
          <div
            className="nav "
            style={{
              display: "flex",
              // justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {footerLinks.list.map((fl) => {
              return (
                <div className="nav-item footerlink-item" key={fl._id}>
                  <NavLink to={fl.link} className="nav-link">
                    {fl.name}
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
      </div> */}
      {/* <div className="widgets_end">
        <div className="container">
          <div className="row">
           
            <div className="col-lg-4 col-md-4 col-12">
              <a href={"tel:" + commonData.contactNumber}>
                <i className="fal fa-phone"></i>
                {commonData.contactNumber}
              </a>
            </div>
           
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <p className="text-center">© {footer.copyrightText}</p>
        </div>
      </div> */}
      <div className="newFooter">
      <h1 className="wrap-newfooterh1">Study Material</h1>
        <div className="wrap-newfooter">
        <div className="footerOne">
          <h1 className="footerOneH1">NCERT</h1>
        {footerOne.map((fl) => {
              // {console.log("footerOne", fl)}
              return (
                <div className="mt2">

                
                <Link to={fl.link} className="footer-text">
          {fl.name}
          </Link>
          </div>
              );
            })}
          
        </div>
        <div className="footerOne">
          {/* <h1 className="footerOneH1">NCERT</h1> */}
        {footerTwo.map((fl) => {
              // {console.log("footerOne", fl)}
              return (
                <div className="mt2">

                
                <Link to={fl.link} className="footer-text">
          {fl.name}
          </Link>
          </div>
              );
            })}
          
        </div>
        <div className="footerOne">
          {/* <h1 className="footerOneH1">NCERT</h1> */}
        {footerThree.map((fl) => {
              // {console.log("footerOne", fl)}
              return (
                <div className="mt2">

                
                <Link to={fl.link} className="footer-text">
          {fl.name}
          </Link>
          </div>
              );
            })}
          
        </div>
        <div className="footerOne">
        
        {footerFour.map((fl) => {
              // {console.log("footerOne", fl)}
              return (
                <div className="mt2">

                
                <Link to={fl.link} className="footer-text">
          {fl.name}
          </Link>
          </div>
              );
            })}
          
        </div>
        </div>
      </div>
      <div className="footer-end">
      <div>{renderHTML(footer.paragraph)}</div>

      </div>
    </footer>
  );
}

export default Footer;
