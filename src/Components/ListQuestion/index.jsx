import React, { useState } from "react";
import "./faq.css";

const ListFaq = (props) => {
  const [text, setText] = useState(false);
  const display = () => {
    setText(!text);
  };
  return (
    <div>
      <div id="faq">
        <div id="list">
          <div className="list-faq">
            <div className="list-item-faq">
              <h1>{props.title}</h1>
              <p className="icon-faq" onClick={display}>
                {props.icon}
              </p>
              {text && <p className="text-description">{props.description}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListFaq;
