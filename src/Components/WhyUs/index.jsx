import React, { useState } from "react";
import ListWhyUs from "../listWhyUs";
import "./style.css";

function WhyUs() {
  const [whyUs, setWhyUs] = useState([
    {
      icon: (
        <p className="elips-one">
          <i className="fa-solid fa-thumbs-up " id="icon-one"></i>
        </p>
      ),
      title: "Mobil Lengkap",
      description:
        "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
    },
    {
      icon: (
        <i className="elips-two">
          <i className="fa-solid fa-tag" id="icon-two"></i>
        </i>
      ),
      title: "Harga Murah",
      description:
        "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
    },
    {
      icon: (
        <i className="elips-three">
          <i className="fa-regular fa-clock" id="icon-three"></i>
        </i>
      ),
      title: "Layanan 24 Jam",
      description:
        "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
    },
    {
      icon: (
        <i className="elips-four">
          <i className="fa-solid fa-award" id="icon-four"></i>
        </i>
      ),
      title: "Sopir Profesional",
      description:
        "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
    },
  ]);
  return (
    <div id="card">
      <div className="container-card">
        <h1 className="container-content-why">Why Us</h1>
        <p className="container-car-rental">
          Mengapa harus pilih Binar Car Rental?
        </p>
      </div>

      {whyUs.map((obj, key) => (
        <ListWhyUs
          key={key}
          icon={obj.icon}
          title={obj.title}
          description={obj.description}
        />
      ))}
    </div>
  );
}

export default WhyUs;
