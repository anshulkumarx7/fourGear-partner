import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import "../Styles/Login.css";
import loginValidation from "../schemas/loginValidation";
import { CgDanger } from "react-icons/cg";
import { ThreeDots } from "react-loader-spinner";
import { AuthContext } from "../Context/AuthContext";
function Login() {
  const { isLoggedIn,setLoading,loading,loginData,setLoginData, login,loginError} = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  //handleChange
  function handleChange(event) {
    const { name, value } = event.target;
    setLoginData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  }
  //handleBlur
  const handleBlur = (event) => {
    const { name } = event.target;
    try {
      loginValidation.validateSyncAt(name, loginData);
    } catch (validationError) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: validationError.message,
      }));
    }
  };
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:5000/api/partners/login",
    headers: {
      "Content-Type": "application/json",
    },
    data: loginData,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await loginValidation.validate(loginData, { abortEarly: false });
      setLoading(false);
      login(config);
    } catch (validationError) {
      setLoading(false);
      console.log(validationError);
      const newErrors = {};
      validationError.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };
  console.log(isLoggedIn);
  return (
    <div className="fourGearSignin">
      <div className="fourGearSigninForm">
        <h2>Login</h2>
        <div className="fourGearSigninFormContainer">
          <form onSubmit={handleSubmit}>
            <div className="fourgearLoginFormInput">
              <input
                name="phone"
                type="text"
                placeholder="Mobile Number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={loginData.mobileNumber}
                autoComplete="off"
              ></input>
              {errors.mobileNumber && (
                <div className="loginErrors">
                  <CgDanger className="cgDanger" />
                  {errors.mobileNumber}
                </div>
              )}
            </div>
            <div className="fourgearLoginFormInput">
              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={loginData.password}
                autoComplete="off"
              ></input>
              {errors.password && (
                <div className="loginErrors">
                  <CgDanger className="cgDanger" />
                  {errors.password}
                </div>
              )}
              {(loginError && !errors.password) && (
                <div className="loginErrors">
                  <CgDanger className="cgDanger" />
                  {loginError}
                </div>
              )}
            </div>
            <div className="fourGearSigninButton bt-signin">
              <button onSubmit={handleSubmit}>
              {loading ? (
                  <ThreeDots
                    height="30"
                    width="30"
                    radius="9"
                    color="#ffffff"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                  />
                ) : (
                  <>Login</>
                )}
              </button>
            </div>
            <div className="fourGearRegisterButton bt-signin">
              <Link to="/">
                <button>Register</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
