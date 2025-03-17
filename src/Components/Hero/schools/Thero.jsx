import React from "react";

const ReimagineSchoolingBanner = () => {
  return (
    <div className="relative w-full bg-gray-100 py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Reimagine Schooling
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Introducing a paradigm shift in education through our smart
              solutions
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Schedule a Call
            </button>
          </div>

          {/* Image Container */}
          <div className="lg:w-1/2 relative w-full h-[400px]">
            <div className="relative h-full w-full">
              {/* Main Board Icon */}
              <img
                src="https://www.extramarks.com/static/media/BoardIcon.015ab701.svg"
                alt="Board Icon"
                className="w-2/5 mx-auto lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-10"
              />

              {/* Student Icon */}
              <img
                src="https://www.extramarks.com/static/media/StudIcon.1b3a5a54.svg"
                alt="Student Icon"
                className="hidden lg:block absolute top-9/12 right-4/5 w-1/3  animate-float"
              />

              {/* Teacher Icon */}
              <img
                src="https://www.extramarks.com/static/media/ttTeacherIcon.249417fe.svg"
                alt="Teacher Icon"
                className="hidden lg:block absolute bottom-3/12 left-1/5 w-1/6 max-w-[80px] animate-float-delayed"
              />

              {/* Decorative Elements */}
              <img
                src="https://www.extramarks.com/static/media/LeftTopShape.c6afbd9b.svg"
                alt="Decoration"
                className="hidden lg:block absolute top-8 left-8 w-12 opacity-75"
              />
              <img
                src="https://www.extramarks.com/static/media/RightTopShape.9e91d6e4.svg"
                alt="Decoration"
                className="hidden lg:block absolute top-12 right-12 w-10 opacity-75"
              />
              <img
                src="https://www.extramarks.com/static/media/RightMiddleShape.2c4c1dbe.svg"
                alt="Decoration"
                className="hidden lg:block absolute right-16 top-1/2 w-12 opacity-75 -translate-y-1/2"
              />
              <img
                src="https://www.extramarks.com/static/media/BottomShape.b363901c.svg"
                alt="Decoration"
                className="hidden lg:block absolute bottom-8 right-8 w-16 opacity-75"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReimagineSchoolingBanner;
