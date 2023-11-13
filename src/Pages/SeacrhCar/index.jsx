import { useEffect, useState } from "react";
import Banner from "../../Components/Banner";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Cars from "../../Components/listform";
import axios from "axios";
import "./style.css";
import { Link } from "react-router-dom";
const SeacrhCar = (props) => {
  const [car, SetCar] = useState([]);
  const [isToggled, SetIsToggled] = useState(false);
  const [carName, setCarName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");
  const [isFilter, setFilter] = useState(false);
  useEffect(() => {
    handleGetCar(carName, category, price, status);
  }, []);

  const handleGetCar = (nameCar, categoryCar, priceCar, statusCar) => {
    axios
      .get(
        `https://api-car-rental.binaracademy.org/customer/v2/car?page=1&pageSize=10&&name=${nameCar}&&category=${categoryCar}&&price=${priceCar}&&status=${statusCar}`
      )
      .then((res) => {
        console.log(res);
        SetCar(res.data.cars);
      })
      .catch((err) => console.log(err));
  };
  const handleChange = (e) => {
    setCarName(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = () => {
    handleGetCar(carName, category, price, status);
    setFilter(true);
  };

  const handleReset = (e) => {
    setCarName("");
    setCategory("");
    setPrice("");
    setStatus("");
    handleGetCar("", "", "", "");
    setFilter(false);
  };

  return (
    <>
      <Header />
      <Banner />
      {isToggled && <div className="container-forminput"></div>}
      <div
        onClick={() => SetIsToggled(!isToggled)}
        className="formInput"
        id="form"
      >
        <div className="container-form">
          <div>
            <label className="label-car">Nama Mobil</label>
            <input
              value={carName}
              onChange={handleChange}
              className="input-car"
              placeholder="Ketik nama/tipe mobil"
            />
          </div>
          <label className="label">
            <p>Kategori</p>
            <select value={category} onChange={handleCategory}>
              <option value={""}>type</option>
              <option value={"medium"}>2-4 orang</option>
              <option value={"large"}>4-6 orang</option>
            </select>
          </label>
          <label className="label">
            <p>Harga</p>
            <select value={price} onChange={handlePrice}>
              <option value={""}>price</option>
              <option value={"minPrice=200000&maxPrice=350000"}>
                {" < 400000"}
              </option>
              <option value={"minPrice=400000&maxPrice=600000"}>
                {"Rp. 400.000 - 600.000"}
              </option>
              <option value={"minPrice=200000&maxPrice=300000"}>
                {" "}
                200.000 - 300.000
              </option>
            </select>
          </label>

          <label className="label">
            <p>Status</p>
            <select value={status} onChange={handleStatus}>
              <option value={"false"}>Disewa</option>
              <option value={"data kosong"}>Ready</option>
            </select>
          </label>
          <button
            className="button-form"
            onClick={isFilter ? handleReset : handleSubmit}>
            {isFilter ? "reset" : "Cari Mobil"}
          </button>
        </div>
      </div>
      <div id="container-search" >
        {!car.length ? (
          <h1 className="empty-data">The car you are looking for is not available!</h1>
        ) : (
          car.map((cars, key) => (
            <div key={key}>
              <div className="wraper-search" >
                <div className="card-search">
                  <img className="image-search" src={cars.image} alt="" />
                  <h1 className="heading-search">{cars.name}</h1>
                  <h3 className="price-search">Rp.{cars.price}</h3>
                  <p className="paragaf-search">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <Link to={`/detail/${cars.id}`}>
                  <button className="button-search">Pilih Mobil</button>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
      {}

      <Footer />
    </>
  );
};

export default SeacrhCar;
