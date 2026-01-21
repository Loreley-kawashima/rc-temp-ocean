import React, { useState, useEffect, useCallback } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Img from "../../images/index/test.jpg"
import Img2 from "../../images/index/test.jpg"
import Img3 from "../../images/index/test.jpg"

const Component = () => {
  const [show, setShow] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollY = window.pageYOffset;
    if (scrollY > 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const settings = {
    autoplay: true,
    focusOnSelect: false,
    pauseOnHover: false,
    infinite: true,
    speed: 3000,
    autoplaySpeed: 5000,
    arrows: false,
    dots: false,
    cssEase: 'ease-in-out',
    className: 'mainImg',
  };

  const images = [
    Img,
    Img2,
    Img3
  ];

  return (
    <div className={`mainVisual ${show ? "on" : ""}`}>
      <div className="inner">
        <Slider {...settings}>
          {images.map((img, index) => (
            <img src={img} alt="メインビジュアル画像" />
          ))}
        </Slider>
        <div className="mainTxt">
          <h2>Catchphrase text</h2>
          <p>テキストテキストテキストテキスト</p>
        </div>
      </div>
    </div>
  )
}

export default Component