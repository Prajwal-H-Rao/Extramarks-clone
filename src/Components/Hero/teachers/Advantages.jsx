import React from "react";

const TeachingAdvantages = () => {
  return (
    <section className="relative bg-gray-100 py-24">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explore our distinctive teaching advantages
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Card 1 */}
          <div className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-lg hover:bg-orange-600 transition-all">
            <div className="relative mb-6">
              <img
                src="https://www.extramarks.com/static/media/icon1blue.89fc5eb1.svg"
                className="w-11 h-11 opacity-100 group-hover:opacity-0 transition-opacity"
                alt="Offline Assessments"
              />
              <img
                src="https://www.extramarks.com/static/media/icon1white.7544660d.svg"
                className="w-11 h-11 absolute top-0 left-0 opacity-0 group-hover:opacity-100  transition-opacity"
                alt="Offline Assessments"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Offline Assessments
            </h3>
            <p className="text-gray-600">
              Effortlessly create and customize question papers online to
              distribute them offline.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-lg hover:bg-orange-600 transition-all">
            <div className="relative mb-6">
              <img
                src="https://www.extramarks.com/static/media/icon2blue.219b89dc.svg"
                className="w-[47px] h-11 opacity-100 group-hover:opacity-0 transition-opacity"
                alt="Classroom Recordings"
              />
              <img
                src="https://www.extramarks.com/static/media/icon2white.d00de944.svg"
                className="w-[47px] h-11 absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity"
                alt="Classroom Recordings"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Classroom Recordings
            </h3>
            <p className="text-gray-600">
              Record and share classroom lectures to help students catch up on
              missed lessons or review them.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-lg hover:bg-orange-600 transition-all">
            <div className="relative mb-6">
              <img
                src="https://www.extramarks.com/static/media/icon3blue.be33a2a6.svg"
                className="w-11 h-11 opacity-100 group-hover:opacity-0 transition-opacity"
                alt="Interactive WhiteBoard"
              />
              <img
                src="https://www.extramarks.com/static/media/icon3white.32e7eb6d.svg"
                className="w-11 h-11 absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity"
                alt="Interactive WhiteBoard"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Interactive WhiteBoard
            </h3>
            <p className="text-gray-600">
              Cutting-edge virtual display with geometrical instruments and
              drawing tools.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-lg hover:bg-orange-600 transition-all">
            <div className="relative mb-6">
              <img
                src="https://www.extramarks.com/static/media/icon4blue.b8986d48.svg"
                className="w-10 h-[45px] opacity-100 group-hover:opacity-0 transition-opacity"
                alt="Power Test"
              />
              <img
                src="https://www.extramarks.com/static/media/icon4white.730b6e34.svg"
                className="w-10 h-[45px] absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity"
                alt="Power Test"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Power Test and Power Questions
            </h3>
            <p className="text-gray-600">
              Create unique yet similar questions for each student to prevent
              cheating.
            </p>
          </div>

          {/* Card 5 */}
          <div className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-lg hover:bg-orange-600 transition-all">
            <div className="relative mb-6">
              <img
                src="https://www.extramarks.com/static/media/icon5blue.ba7a6690.svg"
                className="w-11 h-11 opacity-100 group-hover:opacity-0 transition-opacity"
                alt="Automated Assessments"
              />
              <img
                src="https://www.extramarks.com/static/media/icon5white.a64a82d9.svg"
                className="w-11 h-11 absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity"
                alt="Automated Assessments"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Automated Assessments
            </h3>
            <p className="text-gray-600">
              Simplify assessment creation by specifying the syllabus for
              automatic test generation.
            </p>
          </div>

          {/* Card 6 */}
          <div className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-lg hover:bg-orange-600 transition-all">
            <div className="relative mb-6">
              <img
                src="https://www.extramarks.com/static/media/icon6blue.8865c22b.svg"
                className="w-11 h-11 opacity-100 group-hover:opacity-0 transition-opacity"
                alt="Recommendations"
              />
              <img
                src="https://www.extramarks.com/static/media/icon6white.dc9cf26a.svg"
                className="w-11 h-11 absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity"
                alt="Recommendations"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Recommendations
            </h3>
            <p className="text-gray-600">
              Tailored guidance for enhanced teaching strategies.
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="text-center">
          <button
            className="bg-blue-600 text-white px-8 py-3 rounded-full
                      hover:bg-blue-700 transition-colors text-lg font-semibold
                      shadow-md hover:shadow-lg"
            id="talk_to_expert_plan"
          >
            Start now
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeachingAdvantages;
