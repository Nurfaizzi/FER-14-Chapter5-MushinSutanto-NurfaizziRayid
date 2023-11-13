import React from "react";
import { useState } from "react";
import ListService from "../ListService";
import "./style.css";
function OurService() {
  const [list, setList] = useState([
    {
      icon: <i className="fa-solid fa-check" id="container-i"></i>,
      title: "Sewa Mobil Dengan Supir di Bali 12 Jam",
    },
    {
      icon: <i className="fa-solid fa-check" id="container-i"></i>,
      title: "Sewa Mobil Lepas Kunci di Bali 24 Jam",
    },
    {
      icon: <i className="fa-solid fa-check" id="container-i"></i>,
      title: "Sewa Mobil Jangka Panjang Bulanan",
    },
    {
      icon: <i className="fa-solid fa-check" id="container-i"></i>,
      title: "Gratis Antar - Jemput Mobil di Bandara",
    },
    {
      icon: <i className="fa-solid fa-check" id="container-i"></i>,
      title: "Layanan Airport Transfer / Drop In Out",
    },
  ]);
  return (
    <>
      <div className="container-content" id="best">
        <div className="container-banner">
          <img
            className="container-img-banner"
            src="image/img_service.png"
            alt=""
          />
        </div>
        <div className="sidebar-content">
          <h1 className="container-head-top">
            Best Car Rental for any kind of trip in (Lokasimu)!
          </h1>
          <p className="container-paragaf-top">
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
            lebih murah dibandingkan yang lain, kondisi mobil baru, serta
            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
            meeting, dll.
          </p>
          {list.map((obj, key) => (
            <ListService key={key} title={obj.title} icon={obj.icon} />
          ))}
          <div></div>
        </div>
      </div>
    </>
  );
}

export default OurService;
