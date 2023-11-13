import { useEffect, useRef, useState } from "react";
import "./style.css";
import ListSideBar from "../Testimoni";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
const ListCarousel = (props) => {
  return (
    <div id="carousel">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div>
            <h3>
              {" "}
              <div>
                <div className="container-slider">
                  <div className="slider-card" id="containerss">
                    <div className="item">
                      <div className="container-img">
                        <img
                          className="img-carousel"
                          src="./image/img_photo cewe.png"
                          alt=""
                        />
                      </div>
                      <div className="icon-testimoni">
                        <i className="icon">{props.icon}</i>
                        <i className="icon">{props.icon}</i>
                        <i className="icon">{props.icon}</i>
                        <i className="icon">{props.icon}</i>
                        <p className="text">{props.title}</p>
                      </div>
                      <span className="user">{props.user}</span>
                    </div>
                  </div>
                </div>
              </div>
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div>
            <h3>
              {" "}
              <div>
                <div className="container-slider">
                  <div className="slider-card" id="containerss">
                    <div className="item">
                      <div className="container-img">
                        <img
                          className="img-carousel"
                          src="./image/img_photo laki.png"
                          alt=""
                        />
                      </div>
                      <div className="icon-testimoni">
                        <i className="icon">{props.icon}</i>
                        <i className="icon">{props.icon}</i>
                        <i className="icon">{props.icon}</i>
                        <i className="icon">{props.icon}</i>
                        <p className="text">{props.title}</p>
                      </div>
                      <span className="user">{props.user}</span>
                    </div>
                  </div>
                </div>
              </div>
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <h3>
              {" "}
              <div>
                <div className="container-slider">
                  <div className="slider-card" id="containerss">
                    <div className="item">
                      <div className="container-img">
                        <img
                          className="img-carousel"
                          src="./image/ganjar.jpg"
                          alt=""
                        />
                      </div>
                      <div className="icon-testimoni">
                        <i className="icon">{props.icon}</i>
                        <i className="icon">{props.icon}</i>
                        <i className="icon">{props.icon}</i>
                        <i className="icon">{props.icon}</i>
                        <p className="text">{props.title}</p>
                      </div>
                      <span className="user">{props.user}</span>
                    </div>
                  </div>
                </div>
              </div>
            </h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ListCarousel;
