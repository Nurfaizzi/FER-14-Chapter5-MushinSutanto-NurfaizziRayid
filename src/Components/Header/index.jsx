import { Link } from "react-router-dom";
import "./style.css";
import React, { Component } from "react";

class Header extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
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
                    <div id="mobile" onClick={this.handleClick}>
                      <i
                        id="bar"
                        className={
                          this.state.clicked ? "fas fa-times" : "fas fa-bars"
                        }
                      ></i>
                    </div>
                    <ul
                      id="ul-header"
                      className={this.state.clicked ? "ul-active" : "ul"}
                      onClick={this.handleClick}
                    >
                      <h1 className="bcr">
                        BCR{""}
                        <i
                          id="barss"
                          className={
                            this.state.clicked ? "fas fa-times" : "fass fa-bars"
                          }
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
          </section>
        </header>
      </div>
    );
  }
}
export default Header;
