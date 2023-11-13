import React from "react";
import { Link } from "react-router-dom";
const ListFooters = (props) => {
  return (
    <div id="footer">
      <div className="container-footer">
        <div className="footer">
          <p>{props.address}</p>
          <p>{props.description}</p>
          <p>{props.number}</p>
        </div>

        <div className="navigation-footer">
          <p>{props.service}</p>
          <p>{props.why}</p>
          <p>{props.testimoni}</p>
          <p>{props.faq}</p>
        </div>
        <div className="navigation-footer-conect">
          <p>{props.title}</p>

          <div className="icon-footer">
            {props.icon}
            {props.icon1}
            {props.icon2}
            {props.icon3}
            {props.icon4}
            {props.icon5}
          </div>
        </div>
        <div className="container-copyright">
          <p className="copyright">{props.title2}</p>
          <Link to="/home">
            <span>{props.box}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListFooters;
