import React from "react";

const MultilayeredSection = () => {
  return (
    <section className="relative py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            A multilayered learning landscape
            <br />
            for exam success
          </h2>
        </div>

        {/* Main Content Section */}
        <div className="relative bg-green-50 rounded-3xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Cards */}
            <div className="flex flex-col gap-8 md:w-1/3 order-2 md:order-1">
              {/* Live Classes Card */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col gap-4">
                  <span className="flex items-center gap-3">
                    <img
                      src="https://www.extramarks.com/static/media/icon3.4563b916.svg"
                      alt="liveclass"
                      className="w-8 h-8"
                      loading="lazy"
                    />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Live Classes
                    </h3>
                  </span>
                  <p className="text-gray-600">
                    Expert-led live classes, bringing quality education to your
                    doorstep, eliminating the need for external coaching.
                  </p>
                  <button className="mt-2 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors w-fit">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Self Study Card */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col gap-4">
                  <span className="flex items-center gap-3">
                    <img
                      src="https://www.extramarks.com/static/media/icon4.d36130b5.svg"
                      alt="selfstudy"
                      className="w-8 h-8"
                      loading="lazy"
                    />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Self Study
                    </h3>
                  </span>
                  <p className="text-gray-600">
                    Personalize your studies by selecting and exploring specific
                    topics, chapters and subjects whenever you want.
                  </p>
                  <button className="mt-2 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors w-fit">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Center Image with Arrow */}
            <div className="md:mx-8 order-1 md:order-2 md:w-1/3 relative">
              <img
                src="https://www.extramarks.com/static/media/center-image.77bbf2a4.webp"
                className="w-full max-w-[300px] mx-auto"
                alt="Student with laptop"
                loading="lazy"
              />
              {/* Curved Arrow */}
              <div className="absolute w-full h-full top-0 left-0 pointer-events-none">
                <img
                  src="https://www.extramarks.com/static/media/center-arrow.3f76dd93.svg"
                  className="w-full h-full object-contain"
                  alt="connecting arrow"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Cards */}
            <div className="flex flex-col gap-8 md:w-1/3 order-3">
              {/* Flexi Institute Card */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col gap-4">
                  <span className="flex items-center gap-3">
                    <img
                      src="https://www.extramarks.com/static/media/icon1.11fc2590.svg"
                      alt="flexiint"
                      className="w-8 h-8"
                      loading="lazy"
                    />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Flexi Institute
                    </h3>
                  </span>
                  <p className="text-gray-600">
                    Set your goal and study on your available days with our
                    personalized course designed exclusively for you.
                  </p>
                  <button className="mt-2 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors w-fit">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Practice & Test Card */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col gap-4">
                  <span className="flex items-center gap-3">
                    <img
                      src="https://www.extramarks.com/static/media/icon2.ff882a71.svg"
                      alt="practice"
                      className="w-8 h-8"
                      loading="lazy"
                    />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Practice & Test
                    </h3>
                  </span>
                  <p className="text-gray-600">
                    Enhance your exam preparation with unlimited questions of
                    various types and their detailed solutions.
                  </p>
                  <button className="mt-2 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors w-fit">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Image */}
        <div className="container mx-auto px-4 mt-12">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet="https://www.extramarks.com/static/media/jeeneet-banner.1a72c781.png"
              type="image/webp"
            />
            <img
              src="https://www.extramarks.com/static/media/jeeneet-banner.1a72c781.png"
              className="w-full h-auto rounded-lg shadow-xl"
              alt="jeeneet-banner"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default MultilayeredSection;
