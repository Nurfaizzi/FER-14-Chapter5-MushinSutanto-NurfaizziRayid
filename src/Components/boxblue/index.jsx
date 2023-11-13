import React from "react";
import "./style.css";
import Button from "../button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const BoxBlue = () => {
  return (
    <div>
      <div className="box-container">
        <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
        <p className="paragraf-box">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <Link to="/seacrhcar">
          <button className="btn" id="btn-box">
            Mulai Cari Mobil
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BoxBlue;
