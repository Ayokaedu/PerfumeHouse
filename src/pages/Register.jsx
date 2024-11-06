import React, { useState } from "react";
import google from "../assets/images.png";
import image from '../assets/Or.png'

const Register = () => {
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState ('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password1, setPassword1] = useState('')
  const [agree, setAgree] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="register d-flex justify-content-center align-item-center p-2">
      <div className="perfume-container">
        <span className="main-color-bg text-white rounded-circle p-2">PZ</span>
        <span className=" perf text dark fs-5 fw-bolder ms-2 text-white">
          Perfumerye
        </span>
      </div>
      <form
        className=" form-btn1 mx-auto shadow-lg p-3 bg-white rounded-2"
        id="login"
      >
        <h1>Get Started</h1>
        <p>Let's get started by filling the information below</p>
        <div className="mb-3 justify-content-between">
          <label
            htmlFor="First Name"
            value={firstname}
            onChange={(e) => SetFirstName(e.target.value)}
          >
            First Name
          </label>
          <input
            type="text"
            placeholder="First Name"
            className="form-control mb-2"
          />
        </div>
        <div>
          <label
            htmlFor="Last Name"
            value={lastname}
            onChange={(e) => SetLastName(e.target.value)}
          >
            Last Name
          </label>
          <input
            type="text"
            placeholder="Last Name"
            className="form-control mb-2"
          />
        </div>
        <label
          htmlFor="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        >
          Email
        </label>
        <input
          type="email"
          placeholder="Enter Password"
          className="form-control mb-2"
        />
        <label
          htmlFor="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        >
          Password
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          className="form-control mb-2"
        />
        <label
          htmlFor="password"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
        >
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="Confirm your password"
          className="form-control mb-2"
        />
        <div>
          <input type="checkbox" checked={agree}/> I agree to{" "}
          <a href="##">Terms of Service</a> and{" "}
          <a href="###">Privacy Policies</a>
        </div>
        <button className="btn-sign mt-3 mb-2">Sign Up</button>
        <img src={image} alt="or" className="d-block mx-auto" />
        <button className="btn-sign2 mt-2">
          <img src={google} alt="image" className="image" />
          Continue with Google
        </button>
        <p>
          Already have an account?
          {/* <Link to="/register" className="text-decoration-none">
            Sign up
          </Link> */}
        </p>
      </form>
    </div>
  );
};

export default Register;
