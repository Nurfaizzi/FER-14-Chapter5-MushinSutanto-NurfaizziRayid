import React from "react";

const ListService = (props) => {
  return (
    <div>
      <div className="our-service">
        <p className="elips">{props.icon}</p>
        <p className="container-service">{props.title}</p>
      </div>
    </div>
  );
};

export default ListService;
