import React, { useState, useEffect, useMemo } from "react";
import loadable from "@loadable/component";
import { Link,useNavigate  } from "react-router-dom";
import renderHTML from "react-render-html";
import { useSelector, useDispatch } from "react-redux";
import PreFooter from "../components/PreFooter";
import { loadHomePageCMS } from "../store/api/homePage";
import { getHomeFreeVidSec } from "../store/api/homeFreeVidSec";
import { Helmet } from "react-helmet";
import { setSubscriptionModal } from "../store/ui/subscriptionModal";
import { setLoginModalVisibility } from "../store/ui/loginModal";
import storage from "../services/storage";
// import { Link, useNavigate } from "react-router-dom";

const HomeSlider = loadable(() => import("../components/HomeSlider"), {
  ssr: false,
});
const PopularCourse = loadable(() => import("../components/PopularCourses"), {
  ssr: false,
});
const ResultSlider = loadable(() => import("../components/ResultSlider"), {
  ssr: false,
});
const OcCommunity = loadable(() => import("../components/OcCommunity"), {
  ssr: false,
});
const UnbeatablePrice = loadable(() => import("./UnbeatablePrice"), {
  ssr: false,
});
const WhatsNew = loadable(() => import("../components/WhatsNew"), {
  ssr: false,
});
const HomeDetails = loadable(() => import("../components/HomeDetails"), {
  ssr: false,
});
const HomeSlider3 = loadable(() => import("../components/HomeSlider3"), {
  ssr: false,
});
const HappyBtn = loadable(() => import("../components/HappyBtn"), {
  ssr: false,
});
const StudentRating = loadable(() => import("../components/StudentRating"), {
  ssr: false,
});

const UniSwiper = loadable(() => import("../components/UniSwiper"), {
  ssr: false,
});
const Teachers = loadable(() => import("../components/Teachers"), {
  ssr: false,
});
const FreeTrail = loadable(() => import("../components/FreeTrail"), {
  ssr: false,
});
const NewTeachers = loadable(() => import("../components/NewTeacher"), {
  ssr: false,
});
const QuickCarousal = loadable(() => import("../components/QuickCarousal"), {
  ssr: false,
});

const Students = loadable(() => import("../components/Students"), {
  ssr: false,
});
const HomeCourses = loadable(() => import("../components/HomeCourses"), {
  ssr: false,
});
const DragableButton = loadable(() => import("../components/DragableButton"), {
  ssr: false,
});

const Home = (props) => {
  const dispatch = useDispatch();
  // const userCount = useSelector((state) => state.ui.homePage.data.userCount);

  const homePageCMS = useSelector((state) => state.ui.homePage.data);
  const categories = useSelector((state) => state.entities.categories);
  const courses = useSelector((state) => state.entities.courses);

  const [selectedCategory, setStelectedCategory] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [freeVidSec, setFreeVidSec] = useState({
    heading: "",
    heading2: "",
    image: "",
    buttonText: "",
    buttonLink: "",
  });
  const subscriptionPlans = useSelector(
    (state) => state.entities.subscriptionPlans
  );
  const courseMenus = useSelector((state) => state.entities.courseMenus);
  const authToken = useSelector((state) => state.auth.token);

  const filteredCategoriesList = useMemo(() => {
    return categories.list.filter((cat) => {
      const coursesInCategory = courses.list.filter((c) => {
        return cat._id === c.category._id;
      });
      return coursesInCategory.length > 0;
    });
  }, [categories.list, courses.list]);

  useEffect(() => {
    if (!selectedCategory && filteredCategoriesList[0]) {
      setCategoryName(filteredCategoriesList[0].name);
      setStelectedCategory(filteredCategoriesList[0]._id);
    }
  }, [filteredCategoriesList]);

  useEffect(() => {
    dispatch(loadHomePageCMS({}));
    dispatch(
      getHomeFreeVidSec({
        onSuccess: (res) => {
          setFreeVidSec(res.data.data);
        },
      })
    );
  }, []);

  const renderCategories = () => {
    return (
      <>
        {(filteredCategoriesList || []).map((cat) => {
          return (
            <li
              className="nav-item"
              role="presentation"
              key={cat._id + "home course"}
            >
              <a
                className={
                  selectedCategory === cat._id ? "nav-link active" : "nav-link"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setStelectedCategory(cat._id);
                  setCategoryName(cat.name);
                }}
                id="marketing-tab"
                data-toggle="tab"
                role="tab"
                aria-controls="marketing"
                aria-selected="false"
              >
                {cat.name}
              </a>
            </li>
          );
        })}
      </>
    );
  };

  const goToSubscription = (plan) => {
    if (!authToken) {
      dispatch(setLoginModalVisibility(true));
      storage.store("GO_TO_SUBSCRIPTION", {
        visible: true,
        category: selectedCategory,
        plan,
      });
      return;
    }
    props.history.push(`/subscription/${selectedCategory}`);
    dispatch(
      setSubscriptionModal({
        visible: true,
        category: selectedCategory,
        plan,
      })
    );
  };

  const renderSubscriptionCards = () => {
    if (!selectedCategory) return null;
    const plansForThisCategory = subscriptionPlans.list.filter(
      (sp) => sp.category._id === selectedCategory
    );

    return (
      <div className="row justify-content-center">
        {plansForThisCategory.map((subscriptinPlan) => {
          return (
            <div className="col-sm-4 mt-3" key={subscriptinPlan._id}>
              <div className="mx-5 mx-md-0">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    goToSubscription(subscriptinPlan);
                  }}
                >
                  <img className="w-100" src={subscriptinPlan.cardImage} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderMenuCards = () => {
    const {
      oLevelLinks,
      oLevelImage,
      //plus
      satPrepLinks,
      satPrepImage,
      //premium
      aLevelLinks,
      aLevelImage,
    } = courseMenus;
    const menus = [
      {
        image: oLevelImage,
        link: oLevelLinks,
      },

      {
        image: satPrepImage,
        link: satPrepLinks,
      },

      {
        image: aLevelImage,
        link: aLevelLinks,
      },
    ];
    return (
      <div className="container mb-5" style={{ marginTop: "20px" }}>
        <div className="row">
          {menus.map((men) => {
            return (
              <div className="col-sm-4 mt-3">
                <div className="mx-5 mx-md-0">
                  <Link to={men.link}>
                    <img src={men.image} className="w-100" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <meta property="og:title" content={homePageCMS.metaTitle} />
        <meta name="description" content={homePageCMS.metaDescription} />
        <meta name="keywords" content={homePageCMS.metaKeyWords} />
      </Helmet>
      <HomeSlider
        buttonText={homePageCMS.buttonText1}
        buttonLink={homePageCMS.buttonLink1}
      />
      <DragableButton/>
<PopularCourse/>
<WhatsNew/>
<OcCommunity/>

{/* <NewTeachers
 heading={homePageCMS.heading2}

/> */}
{/* <div style="wrap-community">
        <div className="flip-count">
        <div>
        <div className="flip-counter-wrapper">
        {`${userCount}`.split("").map((number) => (
          <span
          className="number"
          key={number + "flip-coint-number"}
          data-number={"" + number}
                >
                  <span className="primary"></span>
                  <span className="secondary"></span>
                </span>
              ))}
            </div>
            <p className="text-white text-center">REGISTERED USERS</p>
          </div>
        </div>
      </div> */}
      {/* <div className="container">
        <div className="py-5">
          <div className="row">
            <div className="col-md-9">
              <h1 className="text-center">{freeVidSec.heading}</h1>
              <h1 className="text-center font-weight-bold">
                {freeVidSec.heading2}
              </h1>
              <Link to={freeVidSec.buttonLink} className="btn more">
                {freeVidSec.buttonText}
              </Link>
            </div>
            <div className="col-md-3">
              <Link to={freeVidSec.buttonLink}>
                <img className="w-100" src={freeVidSec.image} />
              </Link>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div>
        <section className="popular">
          <div className="bg_cover">
            <div className="container">
              <h2>
                {categoryName ? categoryName + " " : "All "}Subscription Plans
              </h2>
              <ul className="nav nav-tabs" id="courseTab" role="tablist">
                {renderCategories()}
              </ul>
            </div>
          </div>
        </section>
      </div> */}

     

      {/* <div style={{ backgroundColor: "#e5e5e5", paddingBottom: "20px" }}>
        <section className="popular">
          <div className="bg_cover py-4 position-relative">
            <div className="container">
              <h2 className="">{courseMenus.topHeading}</h2>
            </div> */}

            {/* {courseMenus.promoImage && (
              <img
                className="d-none d-md-block"
                src={courseMenus.promoImage}
                style={{
                  height: "120px",
                  position: "absolute",
                  bottom: "-120px",
                  left: "30%",
                }}
              />
            )} */}
          {/* </div>
        </section>

        {renderMenuCards()}
      </div> */}


      {/* <div className="container mb-5" style={{ marginTop: "50px" }}>
        <div className="container mt-2">
          <div
            className="home_sub_top_text"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div>{renderHTML(homePageCMS.subscriptionText)}</div>
          </div>
        </div>
        {renderSubscriptionCards()}

        <Link to={"/subscription/" + selectedCategory} className={`btn more`}>
          {homePageCMS.subscriptionBtnText}
        </Link>
      </div> */}
      
      <Teachers
        heading={homePageCMS.heading2}
        teacherText={homePageCMS.teacherText}
        buttonText={homePageCMS.buttonText2}
        buttonLink={homePageCMS.buttonLink2}
      />
      <ResultSlider/>
<UnbeatablePrice/>
      <HomeDetails/>
      <HomeSlider3/>
      <StudentRating/>

      <FreeTrail/>
      <HappyBtn/>
      {/* <StudentRating/> */}
      {/* <AlongWith/> */}
      {/* <div className="mt-5">
        <div className="container">
          <div className="row no-gutters">
            <div
              className="col-md-6"
              style={{
                background: `url("${homePageCMS.img2}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <QuickCarousal heading={homePageCMS.heading3} />
            </div>
            <div className="col-md-6" style={{ backgroundColor: "#e5e5e5" }}>
              <div className="d-flex align-items-center w-100 h-100 p-4">
                {homePageCMS.text3 && renderHTML(homePageCMS.text3)}
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <Students heading={homePageCMS.heading4} /> */}

      {/* <PreFooter /> */}
    </>
  );
};

Home.loadData = ({ store, matchedRoute }) => {
  const { token } = store.getState().auth;
  const { dispatch } = store;
  const promiseArray = [];

  // if (token) {
  promiseArray.push(dispatch(loadHomePageCMS({})));
  // }
  return Promise.all(promiseArray);
};

export default Home;
