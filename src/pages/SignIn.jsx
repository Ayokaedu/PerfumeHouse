import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import google from "../assets/images.png";
import image from "../assets/Or.png";
const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState ('')
  const goBack = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!email.trim() || !password.trim()){
      setError('All fields required')
    } else{
      goBack("/")
    }
    setEmail("")
      setPassword("")
  }
   
  return (
    <div className=" login d-flex justify-content-center align-item-center">
      <div className="perfume g-3 d-block">
        <span className="main-color-bg text-white rounded-circle p-2">PZ</span>
        <span className="text dark fs-5 fw-bolder ms-2 text-white">
          Perfumerye
        </span>
      </div>
      <form onSubmit={handleSubmit} className="form-btn">
        <h1 className="">Welcome Back</h1>
        <p>Fill in your information to access your account</p>
        {/* <p className="text-danger">{error}</p> */}
        <label
          htmlFor="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        >
          Email
        </label>
        <input type="email" placeholder="Email" className="form-control mb-2" />
        <label
          htmlFor="email"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        >
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          className="form-control mb-2"
        />
        <div className="password mb-3 d-flex justify-content-between align-items-center">
          <div>
            <input type="checkbox" /> <span>Remember me</span>
          </div>
          <span className="text-danger ">Forget Password</span>
        </div>
        <p className="text-danger my-2 ">{error}</p>
        <button className="btn-sign mt-3 mb-2">Sign In</button>
        <img src={image} alt="or" className="d-block mx-auto" />
        <button className="btn-sign2 mt-2">
          <img src={google} alt="image" className="image" />
          Continue with Google
        </button>
        <p>
          Don't have an account?{" "}
          <Link to="/register" className="text-decoration-none">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};
export default SignIn;
