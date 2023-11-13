import React from "react";
import { useState } from "react";

import ListCarousel from "../ListTestimonial";

const Testimoni = () => {
  const [listData, setListData] = useState([
    {
      img: (
        <img className="img-carousel" src="./image/img_photo cewe.png" alt="" />
      ),
      icon: <i className="fa-solid fa-star"></i>,
      title:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      user: "John Dee 32, Bromo",
    },
  ]);

  return (
    <div id="testi">
      <div id="card-testimoni">
        <div className="container-testimony">
          <h1>Testimonial</h1>
          <p>Berbagai review positif dari para pelanggan kami</p>
        </div>
      </div>
      {listData.map((obj, key) => (
        <ListCarousel
          key={key}
          img={obj.img}
          icon={obj.icon}
          title={obj.title}
          user={obj.user}
        />
      ))}
    </div>
  );
};

export default Testimoni;
