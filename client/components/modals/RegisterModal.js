import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Row, Col } from "react-bootstrap";
import LoginImage from "../../assets/temp/signup.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "../../shared/TextError";
import moment from "moment";
import PhoneInput from "../PhoneInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Loader from "../Loader";
import { Link, useHistory } from "react-router-dom";
//redux actions
import {
  setRegisterModalVisibility,
  setRegisterModalClosable,
} from "../../store/ui/registerModal";
import {
  signupUser,
  signinWithGoogle,
  signinWithFacebook,
} from "../../store/api/auth";
import storage from "../../services/storage";

import FacebookLogin from "../FacebookLogin";
import GoogleLogin from "../GoogleLogin";

//validation schema
const validationSchema = Yup.object({
  firstName: Yup.string().required("Required*"),
  lastName: Yup.string().required("Required*"),
  dateOfBirth: Yup.string().required("Required*"),
  school: Yup.string().required("Required*"),
  phoneNumber: Yup.string().required("Phone Number in invalid*"),
  email: Yup.string()
    .required("Required*")
    .email("Enter a valid Email*")
    .typeError("A number is required"),
  password: Yup.string()
    .required("Enter a password*")
    .min(6, "minimum 8 chars*"),
  confirmPassword: Yup.string()
    .required("Required*")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
//initial form values
const initialValues = {
  firstName: "",
  lastName: "",
  dateOfBirth: "", //moment().format("DD/MM/YYYY"),
  phoneNumber: "",
  school: "",
  email: "",
  password: "",
  confirmPassword: "",
};

let verifyLink, resetLink, profileSettings;
function RegisterModal(props) {
  //accessing state from redux
  const registerModal = useSelector((state) => state.ui.registerModal);
  const commonData = useSelector((state) => state.ui.commonData);

  const dispatch = useDispatch();

  const history = useHistory();
  //loader
  const [showLoader, setShowLoader] = useState(false);
  //form state
  const [formValues, setFormValues] = useState(null);

  const closeModal = (force = false) => {
    if (!registerModal.closable && !force) return;
    dispatch(setRegisterModalVisibility(false));
    dispatch(setRegisterModalClosable(true));
    storage.remove("GO_TO_SUBSCRIPTION");
  };

  const navigateToSubscription = () => {
    const goToSubscription = storage.get("GO_TO_SUBSCRIPTION");
    if (goToSubscription) {
      storage.remove("GO_TO_SUBSCRIPTION");
      history.push("/subscription/" + goToSubscription.category);
    }
  };

  const onSubmit = (values) => {
    setShowLoader(true);

    dispatch(
      signupUser({
        body: values,
        onSuccess: (res) => {
          // if (verifyLink) {
          //   verifyLink.click();
          // }

          closeModal(true);
          return navigateToSubscription();
        },
        onEnd: () => {
          setShowLoader(false);
        },
      })
    );
  };

  //signin with facebook handler
  const signinWithFacebookHandler = (facebookRes) => {
    setShowLoader(true);
    const { accessToken, userID } = facebookRes;

    dispatch(
      signinWithFacebook({
        body: { accessToken, userID },
        onSuccess: (res) => {
          closeModal(true);
          setErrorMessage({ type: "danger", message: "" });
          const user = res.data.data;
          if (!user.phoneNumber) {
            if (profileSettings) return profileSettings.click();
          }
          navigateToSubscription();
        },
        onError: (err) => {
          console.error(err.response.data.message);
          if (err.response && err.response.data && err.response.data.message) {
            setErrorMessage(err.response.data.message);
          }
        },
        onEnd: () => {
          setShowLoader(false);
        },
      })
    );
  };

  //signinWithGoogle
  const signinWithGoogleHandler = (googleRes) => {
    setShowLoader(true);
    const { accessToken, googleId } = googleRes;
    dispatch(
      signinWithGoogle({
        body: { accessToken, googleId },
        onSuccess: (res) => {
          closeModal(true);
          setErrorMessage({ type: "danger", message: "" });
          const user = res.data.data;

          if (!user.phoneNumber) {
            if (profileSettings) return profileSettings.click();
          }
          navigateToSubscription();
        },
        onError: (err) => {
          console.error(err.response.data.message);
          if (err.response && err.response.data && err.response.data.message) {
            setErrorMessage(err.response.data.message);
          }
        },
        onEnd: () => {
          setShowLoader(false);
        },
      })
    );
  };

  //overlapping Loader
  const renderLoader = () => {
    return (
      <div className="overlapping-loader">
        <Loader />
      </div>
    );
  };

  const renderSignupForm = () => {
    return (
      <Formik
        initialValues={formValues || initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ values, setFieldValue }) => {
          return (
            <Form>
              <div className="d-flex">
                <div
                  className="form-group"
                  style={{ flexGrow: 1, height: "58px" }}
                >
                  <div className="covering">
                    <Field
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      name="firstName"
                    />
                    <ErrorMessage name="firstName" component={TextError} />
                  </div>
                </div>
                <div
                  className="form-group ml-1"
                  style={{ flexGrow: 1, height: "58px" }}
                >
                  <div className="covering">
                    <Field
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      name="lastName"
                    />

                    <ErrorMessage name="lastName" component={TextError} />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="covering">
                  <Field
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                  />
                  <ErrorMessage name="email" component={TextError} />
                </div>
              </div>
              <div className="d-flex">
                <div
                  className="form-group"
                  style={{ flexGrow: 1, height: "58px" }}
                >
                  <div className="covering">
                    <PhoneInput
                      value={values.phoneNumber}
                      placeholder="Phone"
                      onChange={(phoneNumber) => {
                        setFieldValue("phoneNumber", phoneNumber);
                      }}
                    />
                    <ErrorMessage name="phoneNumber" component={TextError} />
                  </div>
                </div>
                <div
                  className="form-group ml-1"
                  style={{ flexGrow: 1, height: "58px" }}
                >
                  <div className="covering">
                    <DatePicker
                      dateFormat="dd/MM/yyyy"
                      placeholderText="Date Of Birth"
                      selected={
                        values.dateOfBirth
                          ? moment(values.dateOfBirth, "DD/MM/YYYY").toDate()
                          : null
                      }
                      onChange={(date) => {
                        setFieldValue(
                          "dateOfBirth",
                          moment(date).format("DD/MM/YYYY")
                        );
                      }}
                      wrapperClassName="w-100"
                      customInput={<Field className="form-control w-100" />}
                    />

                    <ErrorMessage name="dateOfBirth" component={TextError} />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="covering">
                  <Field
                    type="text"
                    className="form-control"
                    placeholder="School"
                    name="school"
                  />
                  <ErrorMessage name="school" component={TextError} />
                </div>
              </div>

              <div className="d-flex">
                <div
                  className="form-group"
                  style={{ flexGrow: 1, height: "58px" }}
                >
                  <div className="covering">
                    <Field
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                    />
                    <ErrorMessage name="password" component={TextError} />
                  </div>
                </div>
                <div
                  className="form-group ml-1"
                  style={{ flexGrow: 1, height: "58px" }}
                >
                  <div className="covering">
                    <Field
                      type="password"
                      className="form-control"
                      placeholder="Confirm password"
                      name="confirmPassword"
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component={TextError}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group margin">
                {/* <label className="round">
              {" "}
              Keep me signed in
              <input type="checkbox" checked="checked" />
              <span className="checkmark"></span>
            </label> */}
                <button type="submit" className="btn btn-default">
                  Signup
                </button>
              </div>
              <div className="register-link">
                {/* <a >Forgot Password or Username?</a> */}
                <span className="or">or</span>
                <div className="row  mb-4 social-login-wrapper">
                  <div className="col-6 col-md-6 col-lg-6">
                    <FacebookLogin onFBResponse={signinWithFacebookHandler} />
                  </div>
                  <div className="col-6 col-md-6 col-lg-6">
                    <GoogleLogin onGoogleResponse={signinWithGoogleHandler} />
                  </div>
                </div>
                {/* <span>Not Registered ?</span>
            <a href="signup.html" className="bold">
              Join for Free
            </a> */}
              </div>
            </Form>
          );
        }}
      </Formik>
    );
  };

  return (
    <Modal show={registerModal.visible} onHide={closeModal}>
      <Link
        // to="/verify-email"
        to="/"
        className="d-none"
        ref={(ref) => (verifyLink = ref)}
      ></Link>
      <Link
        to="/reset-password"
        className="d-none"
        ref={(ref) => (resetLink = ref)}
      ></Link>
      <Link
        to="/dashboard"
        className="d-none"
        ref={(ref) => (profileSettings = ref)}
      ></Link>
      <section className=" login-container">
        <Row className="bg no-gutters">
          <Col md="6" className="img">
            <div
              className="w-100 h-100 img-fill"
              style={{
                backgroundImage: `url("${commonData.registerModalImage}")`,
              }}
            ></div>
          </Col>
          <Col md="6" className="align-self-center position-relative">
            {registerModal.closable && (
              <a
                onClick={closeModal}
                className="position-absolute"
                style={{ top: 10, right: 15 }}
              >
                <i className="fas fa-times"></i>
              </a>
            )}
            {showLoader && renderLoader()}

            <div className="popup-form-wrapper">{renderSignupForm()}</div>
          </Col>
        </Row>
      </section>
    </Modal>
  );
}

export default RegisterModal;
