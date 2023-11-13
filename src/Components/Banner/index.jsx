import Button from "../button";
import "./style.css";

const Banner = (props) => {
  return (
    <div>
      <div className="container-top">
        <div className="car-rental">
          <h1 className="container-rental-car">
            Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
          </h1>
          <p className="container-car-binar">
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
        </div>
        <div className="container-img-one">
          <img className="container-car" src="image/img_car.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
