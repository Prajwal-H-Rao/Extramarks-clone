import React, { useState } from "react";
import Image1 from "../../assets/image1.jpg";
import Image2 from "../../assets/image2.jpg";
import Image3 from "../../assets/image3.jpg";
import Image4 from "../../assets/image4.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const images = [Image1, Image2, Image3, Image4];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const getSlidePosition = (index) => {
    const position = index - currentSlide;
    if (position === 0) return "center";
    if (position === -1 || position === images.length - 1) return "left";
    if (position === 1 || position === -images.length + 1) return "right";
    return "hidden";
  };

  return (
    <section className="relative py-16 bg-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-6">
          Pioneering Next-gen Education with AI-based Solutions
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover the latest upgrades for students, schools, & teachers
        </p>
      </div>

      {/* Carousel Container */}
      <div className="flex flex-col items-center gap-8">
        <div className="relative h-[500px] w-full max-w-6xl mx-auto overflow-hidden">
          {images.map((image, index) => {
            const position = getSlidePosition(index);
            return (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ease-in-out transform 
                  ${
                    position === "center"
                      ? "translate-x-0 z-20 opacity-100"
                      : position === "left"
                      ? "-translate-x-full z-10 opacity-75"
                      : position === "right"
                      ? "translate-x-full z-10 opacity-75"
                      : "opacity-0 translate-x-full"
                  }`}
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="object-cover w-full h-full rounded-lg shadow-xl"
                />
              </div>
            );
          })}
        </div>

        {/* Navigation Controls - Now below the image container */}
        <div className="flex items-center gap-4">
          <button
            onClick={prevSlide}
            className="p-3 bg-white rounded-full shadow-lg hover:bg-orange-50 transition-colors"
          >
            <svg
              className="w-6 h-6 text-orange-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="p-3 bg-white rounded-full shadow-lg hover:bg-orange-50 transition-colors"
          >
            <svg
              className="w-6 h-6 text-orange-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
