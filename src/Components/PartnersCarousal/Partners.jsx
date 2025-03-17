import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const PartnersClients = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  const settings_second_row = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1600,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const logos = [
    "https://i.postimg.cc/sx9bXn46/logo.png",
    "https://i.postimg.cc/4x3jfQ7P/logo1.png",
    "https://i.postimg.cc/SQWBDsb6/logo2.png",
    "https://i.postimg.cc/nLj57V1Q/logo3.png",
    "https://i.postimg.cc/zBTctd6z/logo4.png",
    "https://i.postimg.cc/25stxpH9/logo5.png",
    "https://i.postimg.cc/yYjwCbdW/logo6.png",
    "https://i.postimg.cc/NfBWVcQW/logo7.png",
    "https://i.postimg.cc/zGP6VHTr/logo8.png",
  ];

  return (
    <div className="px-[50px] bg-purple-200">
      <h2 className="text-center p-5 mt-[50px] text-2xl font-semibold">
        Our Partners/Our Clients
      </h2>

      <div className="container w-full mx-auto px-4">
        <Slider {...settings} className="py-8">
          {logos.map((logo, index) => (
            <div key={index} className="px-2 focus:outline-none">
              <img
                src={logo}
                alt={`Partner logo ${index + 1}`}
                className=" block w-full h-28 object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="container w-full mx-auto px-4">
        <Slider {...settings_second_row} className="py-8">
          {logos.map((logo, index) => (
            <div key={index} className="px-2 focus:outline-none">
              <img
                src={logo}
                alt={`Partner logo ${index + 1}`}
                className=" block w-full h-28 object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PartnersClients;
