import React, { useState } from "react";

import ListFaq from "../ListQuestion";

const Faq = () => {
  const [listFaq, setListFaq] = useState([
    {
      title: "Apa saja syarat yang dibutuhkan?",
      description: "Data Diri Penyewa KTP SIM ",
      open: true,
      icon: <i id="icon-question" className="fa-solid fa-chevron-down"></i>,
    },
    {
      title: "Berapa hari minimal sewa mobil lepas kunci?",
      description: "24 jam",
      open: false,
      icon: <i id="icon-question" className="fa-solid fa-chevron-down"></i>,
    },
    {
      title: "Berapa hari sebelumnya sabaiknya booking sewa mobil??",
      description: "1 Minggu Sebelum Sewa ",
      open: false,
      icon: <i id="icon-question" className="fa-solid fa-chevron-down"></i>,
    },
    {
      title: "Apakah Ada biaya antar-jemput?",
      description: "Tentu Bisa",
      open: false,
      icon: <i id="icon-question" className="fa-solid fa-chevron-down"></i>,
    },
    {
      title: "Bagaimana jika terjadi kecelakaan",
      description: "Kami Menggunakan Asuransi",
      open: false,
      icon: <i id="icon-question" className="fa-solid fa-chevron-down"></i>,
    },
  ]);

  return (
    <div>
      <div className="container-faq" id="faq">
        <div className="text-faq">
          <h1>Frequently Asked Question</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>
      {listFaq.map((obj, key) => (
        <ListFaq
          key={key}
          title={obj.title}
          description={obj.description}
          icon={obj.icon}
        />
      ))}
    </div>
  );
};

export default Faq;
