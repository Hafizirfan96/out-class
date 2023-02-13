import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import formimg from "./css/outclassled.png";
import { useSelector, useDispatch } from "react-redux";

export default function FreeTrail() {
  const authToken = useSelector((state) => state.auth.token);
  const initialValues = {
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    phone: "",
    topic: "",

  };
  // const validationSchema = Yup.object({
  //   email: Yup.string().email("Invalid email format").required("Required"),
  //   password: Yup.string()
  //     .required("required")
  //     .min(5, "Password is too short - should be 5 chars minimum."),
  // });
  //    const onSubmit = async (values) => {
  //      setLoading(true);
  //      dispatch(setCredational(values));

  //      dispatch(
  //        login({
  //          body: {
  //            email: values.email,
  //            password: values.password,
  //          },
  //          onSuccess: (res) => {
  //            navigate("/");
  //            console.log("res===>", res)
  //            setLoading(false);
  //          },

  //          onError: (error) => {
  //            setLoading(false);

  //            if (error.response) {
  //              if (error.response.data.errors) {
  //                for (let key in error.response.data.errors) {
  //                  setError(error.response.data.errors[key]);
  //                }
  //              } else if (error.response.data.message) {
  //                setError(error.response.data.message);
  //              }
  //            }
  //          },
  //        })
  //      );
  //    };
  return (
    <div className="FreeTrail">
      <div className="wrap-freetrail">
        <Formik
          initialValues={initialValues}
          // validationSchema={validationSchema}
          // onSubmit={onSubmit}
          onSubmit={(values) => {
            // same shape as initial values
            console.log("login values", values);
          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            errors,
            touched,
          }) => (
            <>
              <div className="form-freetrail2">
                <h1>Get a free 3-Day trial:</h1>
                <div className=" form-input-trail ">
                  <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    onChange={handleChange("firstname")}
                    onBlur={handleBlur("firstname")}
                    value={values.firstname}
                  />
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    onChange={handleChange("lastname")}
                    onBlur={handleBlur("lastname")}
                    value={values.lastname}
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="form-input-trail3"
                  onChange={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
                {authToken ? (
       
                  <div></div>
        ) : (
          <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange("password")}
          onBlur={handleBlur("password")}
          value={values.phone}
          className="form-input-trail3"
        />
        )}
                <input
                  type="text"
                  name="phone"
                  placeholder="phone Number"
                  onChange={handleChange("phone")}
                  onBlur={handleBlur("phone")}
                  value={values.phone}
                  className="form-input-trail3"
                />
                <select
                  name="colorss"
                  onChange={handleChange("topic")}
                  onBlur={handleBlur("topic")}
                  value={values.topic}
                  className="form-input-trail3"
                >
                  <option value="" label="Course( Fsc / Matric / O levels )*">
                    Course( Fsc / Matric / O levels )*
                  </option>
                  <option value="Fsc" label="Fsc">
                    {" "}
                    Fsc
                  </option>
                  <option value="Matric" label="Matric">
                    {" "}
                    Matric
                  </option>  <option value="O Levels" label="OLevels">
                    {" "}
                    O Levels
                  </option>
                </select>
              </div>
              <button
                type="button"
                className="them_btn-outline "
                onClick={handleSubmit}
                //   disabled={loading ? true : false}
              >
                Submit
              </button>
            </>
          )}
        </Formik>
      </div>
      <div className="wrap-freetrail-img">
        <img src={formimg} />
      </div>
    </div>
  );
}
