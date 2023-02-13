import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import LogoImage from "../assets/temp/logo.png";
import storage from "../services/storage";
//redux actions
import { setUser, setToken } from "../store/auth/authReducer";
import { setLoginModalVisibility } from "../store/ui/loginModal";
import { setRegisterModalVisibility } from "../store/ui/registerModal";
import { Link } from "react-router-dom";
import { signoutUser } from "../store/api/auth";
import bellIcon from "../assets/img/icons8-doorbell-48.png"
import { Modal} from "react-bootstrap";
import { loadNotification } from "../store/api/notification";
import { useRef } from "react";
// import Loader from "../components/Loader";
import Loader from "../components/Loader";
// const dispatch = useDispatch();
import BounceLoader from "react-spinners/BounceLoader";

function AppHeader(props) {
  const [notify , SetNotify] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const commonData = useSelector((state) => state.ui.commonData);
  const user = useSelector((state) => state.auth.user);
  const authToken = useSelector((state) => state.auth.token);
  const showLoginModal = () => {
    dispatch(setLoginModalVisibility(true));
  };
  const showRegisterModal = () => {
    dispatch(setRegisterModalVisibility(true));
  };
  const isMounted = useRef(false);
  useEffect(() => {
    const user = storage.get("user");
    const token = storage.get("xAuthToken");
    dispatch(setToken(token));
    dispatch(setUser(user));
    if(token){
      
      noti();

      // window.location.reload()

    }else return
    
      


  }, []);

  //read user from localstorage
  // useEffect(() => {
  //   if (isMounted.current) {
  //     console.log('fetching');
  //     dispatch(
  //           loadNotification({
  //             onSuccess: (res) => {
  //               SetNotify(res.data.data);
  //             },
  //           })
  //         );
     
  //   } else {
  //     isMounted.current = true;
  //   }
  
  // }, [dispatch]);

  
 

  const noti = ()=>{
    // window.location.reload()
    
    setLoading(true)
  dispatch(
    loadNotification({
      onSuccess: (res) => {
        // console.log("resdata",res.data)
        SetNotify(res.data.data);

      },
    })
  );

}


  return (
    <>
    <nav className="navbar navbar-light top_nav">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={commonData.logo} alt="Logo" className="img-fluid" />
        </Link>

        {authToken ? (
          <div className="d-flex styling-width">
          <Dropdown>
            <Dropdown.Toggle
              as={React.forwardRef(({ children, onClick }, ref) => (
                <a
                  ref={ref}
                  onClick={(e) => {
                    e.preventDefault();
                    onClick(e);
                  }}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <span className="mr-2">My Account</span>
                  <div
                    className="user-nav-img"
                    style={{ backgroundImage: `url("${user.image}")` }}
                  ></div>
                </a>
              ))}
              id="dropdown-custom-components dropdown-button-drop-left"
            />

            <Dropdown.Menu>
              <Dropdown.Item>{`${user.firstName} ${user.lastName}`}</Dropdown.Item>

              <Dropdown.Item as={Link} to="/dashboard">
                Dashboard
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/my-orders">
                My Orders
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  dispatch(signoutUser());
                }}
              >
                Signout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <img  className="bell-icon" src={bellIcon} onClick={handleShow}/>
          </div>
        ) : (
          <ul className="nav ml-auto login_user">
            <li className="nav-item">
              <a className="nav-link" onClick={showLoginModal}>
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn" onClick={showRegisterModal}>
                Join For Free
              </a>
            </li>
          </ul>
        )}

    <Modal show={show} onHide={handleClose} className="nofication-model">
       {}
        <div>
          <h1 className="noti-text">Notification</h1>
          {loading ? (
          <>
          {notify.map((n) => {
              // {console.log("notification=========>>>>", n)}
              return ( 

          <div className="noti-details">
            <p className="noti-title">{n.title}</p>
            <p className="noti-dec">{n.desc}</p>
          </div>
                );
            })}
            {/* <h1>asdsa</h1> */}
          </>
            ) : (
              // <SpinnerDotted  />
              <BounceLoader style={{ height: "40", color: "red" }} />
            )}




          </div>
      </Modal>
      </div>
    </nav>
    </>
  );
}

export default AppHeader;
