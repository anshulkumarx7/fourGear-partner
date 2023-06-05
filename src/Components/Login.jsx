import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import "../Styles/Login.css";
function Login() {
  const [loginData,setLoginData]=useState({
    email:"",
    password:""
  })
  function handleChange(event){
    const {name,value}=event.target;
    setLoginData((prevValue)=>({
        ...prevValue,
        [name]:value
    }))
  }
  function handleSubmit(e){
    e.preventDefault();
    console.log("Clicked");
    console.log(loginData);
  }
  return (
    <div className="fourGearSignin">
    <div className="fourGearSigninForm">
          <h2>Login</h2>
          <div className="fourGearSigninFormContainer">
            <form onSubmit={handleSubmit}>
              <input
                name="email"
                type='email'
                placeholder="E-mail"
                onChange={handleChange}
                value={loginData.email}
              ></input>
              <input
                name="password"
                type='password'
                placeholder="Password"
                onChange={handleChange}
                value={loginData.password}
              ></input>
              <div className="fourGearSigninButton bt-signin">
                <button onSubmit={handleSubmit}>Login</button>
              </div>
              <div className="fourGearRegisterButton bt-signin">
              <Link to="/signup"><button>Register</button></Link>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Login