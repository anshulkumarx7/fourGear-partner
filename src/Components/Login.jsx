import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Login.css";
import loginValidation from "../schemas/loginValidation";
import { CgDanger } from "react-icons/cg";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await loginValidation.validate(loginData, { abortEarly: false });
      setLoading(false);
      // login(config);
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

  return (
    <div className="fourGearSignin">
      <div className="fourGearSigninForm">
        <h2>Login</h2>
        <div className="fourGearSigninFormContainer">
          <form onSubmit={handleSubmit}>
            <div className="fourgearLoginFormInput">
              <input
                name="email"
                type="email"
                placeholder="E-mail"
                onChange={handleChange}
                onBlur={handleBlur}
                value={loginData.email}
              ></input>
              {errors.email && (
                <div className="loginErrors">
                  <CgDanger className="cgDanger" />
                  {errors.email}
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
              ></input>
              {errors.password && (
                <div className="loginErrors">
                  <CgDanger className="cgDanger" />
                  {errors.password}
                </div>
              )}
            </div>
            <div className="fourGearSigninButton bt-signin">
              <button onSubmit={handleSubmit}>Login</button>
            </div>
            <div className="fourGearRegisterButton bt-signin">
              <Link to="/signup">
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
