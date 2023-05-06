import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";

export default function SimpleSlider() {
  // reference to the slide can image element

  var settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [angle, setAngle] = useState(0);

  const handleMouseMove = (event) => {
    // Get the position of the image
    const image = document.querySelector(".image");
    const rect = image.getBoundingClientRect();
    const imageX = rect.left + rect.width / 2;
    const imageY = rect.top + rect.height / 2;

    // Get the position of the mouse
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Calculate the angle between the mouse and the image
    const angle = Math.atan2(mouseY - imageY, mouseX - imageX);
    setAngle(angle);
  };

  return (
    <div onMouseMove={handleMouseMove}>
      <Slider {...settings}>
        <div className="slide1">
          <div className="slide-content">
            <h1 className="slide-text">Juice Labs</h1>
            <div className="slide-can fizzy-soda">
              <img
                className="image"
                alt="can"
                src="./assets/images/orangecan.png"
                style={{ transform: `rotate(${angle / 5}rad)` }}
              />
              <div
                className="bubbles"
                style={{ transform: `rotate(${angle / 2}rad)` }}
              >
                <div className="bubble orange bubble1"></div>
                <div className="bubble orange bubble2"></div>
                <div className="bubble orange bubble3"></div>
                <div className="bubble orange bubble4"></div>
                <div className="bubble orange bubble5"></div>
              </div>
            </div>

            <div className="slide101">
              <img alt="logo" src="./assets/images/orangesbg.png" />
            </div>
            <div className="slide102">
              <img alt="logo" src="./assets/images/orangebg.png" />
            </div>
          </div>
        </div>
        <div className="slide2">
          <div className="slide-content">
            <h1 className="slide-text">Juice Labs</h1>
            <div className="slide-can fizzy-soda">
              <img
                className="image"
                alt="can"
                src="./assets/images/vanillacan.png"
                style={{ transform: `rotate(${angle / 3}rad)` }}
              />
              <div
                className="bubbles"
                style={{ transform: `rotate(${angle / 2}rad)` }}
              >
                <div className="bubble cv bubble1"></div>
                <div className="bubble cv bubble2"></div>
                <div className="bubble cv bubble3"></div>
                <div className="bubble cv bubble4"></div>
                <div className="bubble cv bubble5"></div>
              </div>
            </div>

            <div className="slide101">
              <img alt="logo" src="./assets/images/cvbg1.png" />
            </div>
            <div className="slide102">
              <img alt="logo" src="./assets/images/cvbg2.png" />
            </div>
          </div>
        </div>
        <div className="slide3">
          <div className="slide-content">
            <h1 className="slide-text">Juice Labs</h1>
            <div className="slide-can fizzy-soda">
              <img
                className="image"
                alt="can"
                src="./assets/images/creamcan.png"
                style={{ transform: `rotate(${angle / 3}rad)` }}
              />
              <div
                className="bubbles"
                style={{ transform: `rotate(${angle / 2}rad)` }}
              >
                <div className="bubble cm bubble1"></div>
                <div className="bubble cm bubble2"></div>
                <div className="bubble cm bubble3"></div>
                <div className="bubble cm bubble4"></div>
                <div className="bubble cm bubble5"></div>
              </div>
            </div>

            <div className="slide101">
              <img alt="logo" src="./assets/images/cmbg1.png" />
            </div>
            <div className="slide102">
              <img alt="logo" src="./assets/images/cmbg2.png" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
