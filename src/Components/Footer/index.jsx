import React, { useState } from "react";
import Footers from "../List Footer";
import ListFooters from "../List Footer";
import "./style.css";

const Footer = () => {
  const [DataFooter, setDataFooter] = useState([
    {
      address: "Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000",
      description: "binarcarrental@gmail.com",
      number: "081-233-334-808",
      service: <a href="#best">Our Service</a>,
      why: <a href="#card">Why Us</a>,
      testimoni: <a href="#testi">Testimoni</a>,
      Faq: <a href="#faq">FAQ</a>,
      title: "Connect with us",
      icon1: <i id="icon" className="fa-brands fa-facebook-f"></i>,
      icon2: <i id="icon" className="fa-brands fa-instagram"></i>,
      icon3: <i id="icon" className="fa-brands fa-twitter"></i>,
      icon4: <i id="icon" className="fa-regular fa-envelope"></i>,
      icon5: <i id="icon" className="fa-brands fa-twitch"></i>,
      title2: "Copyright Binar 2022",

      box: <button id="btn-footer" className="box-landingpage"></button>,
    },
  ]);
  return (
    <div>
      {DataFooter.map((obj, key) => (
        <ListFooters
          key={key}
          address={obj.address}
          description={obj.description}
          number={obj.number}
          service={obj.service}
          why={obj.why}
          testimoni={obj.testimoni}
          title={obj.title}
          faq={obj.Faq}
          icon1={obj.icon1}
          icon2={obj.icon2}
          icon3={obj.icon3}
          icon4={obj.icon4}
          icon5={obj.icon5}
          title2={obj.title2}
          box={obj.box}
        />
      ))}
    </div>
  );
};
export default Footer;
