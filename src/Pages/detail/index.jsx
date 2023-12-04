import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../Components/Header";
import "./style.css";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const Detail = () => {
  const param = useParams();
  const [carDetail, setCarDetail] = useState({});
  const [text, setText] = useState(false);
  const [startDate,setStartDate] = useState("")
  const [endDate,setEndDate] = useState("")
  const [enabled,setEnabled] = useState(true)
  const navigate = useNavigate()
  const display = () => {
    setText(!text);
  };



  useEffect(() => {
    handleGetCarDetail();
  }, []);

  const handleGetCarDetail = () => {
    axios
      .get(`https://api-car-rental.binaracademy.org/customer/car/${param.id}`)
      .then((res) => {
        console.log(res);
        setCarDetail(res.data);
        
      })
      .catch((err) => console.log(err));
  };

  const onChangeDate = (value) => {
    // setEnabled(true)
    if(setStartDate === null || setEndDate === null ){
      setEnabled(true)
    }else{
      setEnabled(false)
     
    }
    setStartDate(value[0]) 
    setEndDate(value[1])
    console.log(value)
    return
  }

  const handleClick = (value) => {
    if(setStartDate == value[0] || setEndDate == value[1] ){
      setEnabled(true)
        
    }else{
      setEnabled(false)
     
    }
    navigate('/home')
   return
  
  }



  return (
    <div>
      <Header />
      <div>
        <div className="box-result"></div>
        <div>
          <div className="forminput-result" id="form">
            <div className="container-form">
              <div>
                <label className="label-car">Nama Mobil</label>
                <input
                disabled="disabled"
                  className="input-car"
                  placeholder="Ketik nama/tipe mobil"
                />
              </div>
              <label className="label">
                <p>Kategori</p>
                <input placeholder="Masukan Kapasitas Mobil"  disabled="disabled" />
              </label>
              <label className="label">
                <p>Harga</p>
                <select className="Harga" id="Harga" disabled="disabled">
                  <option value="Masukan Harga Sewa per Hari">350.000</option>
                </select>
              </label>
              <label className="label">
                <p>Status</p>
                <select className="disewa" id="disewa"disabled="disabled">
                  <option value="Disewa">Disewa</option>
                </select>
              </label>
              <Link to={"/seacrhcar"}>
                <button className="button-detail">Back To List</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div id="result">
        <div className="form-result">
          <h1 className="heading-form">Tentang Paket</h1>
          <span className="include">Include</span>
          <p className="title-include">
            <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam </li>
            <li>Sudah termasuk bensin selama 12 jam</li>
            <li>Sudah termasuk Tiket Wisata </li>
            <li>Sudah termasuk pajak</li>
          </p>
          <span className="exclude">Exclude</span>
          <p className="title-exclude">
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </li>
            <li>Tidak termasuk akomodasi penginapan</li>
          </p>
          <span className="title-refund">
            Refund, Reschedule, Overtime
            <i
              onClick={display}
              id="icon-refund"
              className="fa-solid fa-chevron-up"
            ></i>
          </span>
          {text && (
            <p className="list-refund">
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </p>
          )}
        </div>
        <div className="wraper-result">
          <div className="card-result">
            <img className="image-result" src={carDetail.image} alt="" />
          </div>
          <h1 className="heading-result">{carDetail.name}</h1>
          <div className="paragaf-result">
            <i id="icon-result" className="fa-solid fa-user-group"></i>
            <p>{carDetail.category}</p>
          </div>
          <label className="label-date">Tentukan lama sewa mobil (max. 7 hari)</label>
          
         <DatePicker 
         selectsRange={true}
         onClick={handleClick  }
           icon="fa fa-calendar"
         startDate={startDate}
         endDate={endDate}
         isClearable = {enabled? false:true}
         placeholderText="Pilih tanggal mulai dan tanggal akhir sewa"
         onChange={onChangeDate}
         dateFormat="dd MMM yyyy"
         required
         form="external-form"
         >
        
         </DatePicker>
          <div className="result-total">
            <h4 className="paragaf-search">Total</h4>
            <h2>Rp.{carDetail.price}</h2>
          </div>
          {/* <form id="external-form"> */}
          <button  onClick={handleClick} type="submit" id="button-checkout"  disabled={enabled ? true: false} >Lanjutkan Pembayaran</button>
      {/* </form> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
