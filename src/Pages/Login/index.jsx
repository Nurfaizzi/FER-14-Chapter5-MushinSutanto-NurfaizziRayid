import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [pas, setPass] = useState("");
  const [succes, setSucces] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGetEmail = (e) => {
    setEmail(e.target.value);
    setSucces("");
    setError("");
  };

  const handleGetPassword = (e) => {

        setPass(e.target.value);
    setSucces("");
    setError("");
  };

  const handleSubmit = (value) => {
    const bodyPayLoad = {
      email: email,
      password: pas,
    };
    setLoading(true);
    axios
      .post(
        `https://api-car-rental.binaracademy.org/customer/auth/login`,
        bodyPayLoad
      )
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("accesToken", res.data.access_token);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Succes",
          showConfirmButton: false,
          timer: 1500,
        });
        
        setTimeout(() => {
          navigate("/home");
          setLoading(false);
        }, 2000);
      })
      .catch((err) => {
        console.log(err.response);
        if (email === "" || pas === "") {
          Swal.fire({
            title: "Email And Password ",
            text: "Cannot Be Empety!",
            icon: "warning",
          });
        } else {
          Swal.fire({
            title: "Email And Password ",
            text: "Not Found!",
            icon: "error",
          });
          setLoading(false);
          return
        }
        
      });
  };
  return (
    <div>
      <div className="head-form">
        <div className="form-register">
          <Link to="/home">
            <div className="logo-register">p</div>
          </Link>
          <div className="header-register">Welcome Back!</div>
          <form className="register">
            <label className="label-register">
              Email
              <input
                value={email}
                onChange={handleGetEmail}
                className="input-register"
                type="text"
                placeholder="Contoh: johndee@gmail.com"
              />
              {succes ? <p className="alert-succes">Login succes</p> : null}
              {error ? (
                <p className="alert"> Username And Password Not Found!</p>
              ) : null}
            </label>
          </form>
          <form className="register">
            <label className="label-password">
              Password
              <input
                onChange={handleGetPassword}
                className="input-password"
                type="password"
                placeholder="6+ karakter"
                validation={{
                  required: {
                    value: true,
                    message: "required",
                  },
                  minLength: {
                    value: 6,
                    message: "min 6 characters",
                  },
                }}
              />
              {succes ? <p className="alert-succes">Login succes</p> : null}
              {error ? (
                <p className="alert">Username And Password Not Found!</p>
              ) : null}
            </label>
          </form>
          <button
            disabled={loading ? true : false}
            onClick={handleSubmit}
            className="btn-signup"
          >
            {loading ? "loading...." : "submit"}
          </button>
          .
          <div className="have-account">
            Don’t have an account?
            <Link to="/register">
              <h4>Sign Up Hare </h4>
            </Link>
          </div>
        </div>
        <div className="heading-formlogin">
          <h1 className="header-formlogin">Binar Car Rental</h1>
          <img
            className="image-formlogin"
            src="./image/Landing page - Desktop.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
