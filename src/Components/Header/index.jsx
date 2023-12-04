import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import React, { Component } from "react";

const Header = () => {
const navigate = useNavigate ()
const accesToken = localStorage.getItem("accesToken")

const handleLogOut = () => {
  localStorage.removeItem("accesToken")
  navigate('/home')
}

 

    return (
      <div>
        <header>
          <section className="navigation">
            <div className="container">
              <div className="box-navigation">
                <div className="box">
                  <nav className="navbar">
                    <Link to="/home">
                      <button className="box-landingpage"></button>
                    </Link>
                    <div className="box-blue"> </div>
                    <div id="mobile" >
                      <i
                        id="bar"
                      ></i>
                    </div>
                    <ul
                      id="ul-header"
                    >
                      <h1 className="bcr">
                        BCR{""}
                        <i
                          id="barss"
                        ></i>
                      </h1>
                      <li>
                        <a href="#best">Our Service</a>
                      </li>
                      <li>
                        <a href="#card">Why Us</a>
                      </li>
                      <li>
                        <a href="#testi">Testimonial</a>
                      </li>
                      <li>
                        <a href="#faq">Faq</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            {accesToken ? (
                <button onClick={handleLogOut}  className="button-register">Logout</button>
            ):(
              <Link to="/register">
              <button className="button-register">Register</button>
              </Link>
            )}
         
            
          </section>.
         
        </header>
      </div>
    );
  }

export default Header;
