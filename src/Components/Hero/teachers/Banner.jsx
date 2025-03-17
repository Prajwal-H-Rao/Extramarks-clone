import React from "react";

const TeacherBanner = () => {
  return (
    <section className="relativeoverflow-hidden py-5 bg-[#e3fff8]">
      {/* Decorative SVG elements */}
      <img
        src="https://www.extramarks.com/static/media/banner-topcurve.38d30b16.svg"
        className="md:hidden absolute right-0 top-0"
        alt="banner-right-img"
        loading="lazy"
      />

      <div className="container mx-auto px-4 py-8 md:py-16 relative flex flex-col md:flex-row items-center">
        {/* Right side image */}
        <div className="md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 w-full md:w-auto">
          <picture className="block md:w-[500px] lg:w-[600px]">
            <source
              media="(max-width: 767px)"
              srcSet="https://www.extramarks.com/static/media/teacher-rightimg.e200b39f.svg"
              type="image/png"
            />
            <img
              src="https://www.extramarks.com/static/media/teacher-rightimg.e200b39f.svg"
              className="w-full h-auto"
              alt="Teaching illustration"
              loading="lazy"
            />
          </picture>
        </div>

        {/* Main content */}
        <div className="relative z-10 text-center md:text-left mb-8 md:mb-0 md:max-w-2xl">
          <div className="mb-6">
            <img
              src="https://www.extramarks.com/static/media/teaching-logo.43e73d73.svg"
              alt="Teaching Logo"
              className="mx-auto md:mx-0 h-8 w-48"
              loading="lazy"
            />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="block">Digital tutoring</span>
            <span className="text-blue-600">redefined</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            An innovative platform designed to
            <br className="hidden md:block" />
            effortlessly enhance and simplify
            <br className="hidden md:block" />
            the teaching experience
          </p>

          <button
            className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-3 rounded-full
                      text-lg font-semibold hover:from-blue-700 hover:to-blue-500 transition-all
                      shadow-lg hover:shadow-xl"
            id="static_knowmore"
          >
            Get 7-days Free Access
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeacherBanner;
