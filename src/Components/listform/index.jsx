import "./style.css";
import React, { useState } from "react";
const Cars = () => {
  const [form, setForm] = useState([
    {
      label: "Nama Mobil",
      title: "Nama Mobil",
    },
  ]);
  return (
    <div>
      {form.map((obj, key) => (
        <FormInput key={key} title={obj.title} label={obj.label} />
      ))}
    </div>
  );
};

export default Cars;
