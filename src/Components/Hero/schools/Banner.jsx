import React from "react";

const InnovativeSolutions = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Innovative solutions for total learning
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="flex flex-col gap-8">
            {/* Card 1 */}
            <div className="bg-[#e3fff1] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex-1 flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://www.extramarks.com/static/media/SmartClassIcon.b42f9728.svg"
                  alt="Smart Class"
                  className="w-12 h-10 object-contain"
                />
                <h3 className="text-xl font-semibold">Smart Class Plus</h3>
              </div>
              <p className="text-gray-600 mb-6 flex-1">
                A digital solution that transforms traditional teaching-learning
                processes in classroom and beyond.
              </p>
              <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                Know More
              </button>
              <div className="mt-8 flex-1">
                <img
                  src="https://www.extramarks.com/static/media/SmartClassGirl.cc0f690d.svg"
                  alt="Smart Class Illustration"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-8">
            {/* Card 2 */}
            <div className="bg-[#fcf4d9] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex-1">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://www.extramarks.com/static/media/TeachingIcon.1fcaf58d.svg"
                  alt="Learning App"
                  className="w-12 h-12 object-contain"
                />
                <h3 className="text-xl font-semibold">Learning App</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Accelerate student progress with an innovative learning platform
                that keeps them connected with school.
              </p>
              <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                Know More
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-[#fff0fc] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex-1">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://www.extramarks.com/static/media/AssessmentIcon.bdd78398.svg"
                  alt="Assessment Center"
                  className="w-12 h-14 object-contain"
                />
                <h3 className="text-xl font-semibold">Assessment Centre</h3>
              </div>
              <p className="text-gray-600 mb-6">
                A scientifically designed platform for facilitating and
                automating assessment activities.
              </p>
              <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                Know More
              </button>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-8">
            {/* Card 4 */}
            <div className="bg-[#e6f3ff] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex-1">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://www.extramarks.com/static/media/IntegratedIcon.1d03ccab.svg"
                  alt="School Program"
                  className="w-12 h-12 object-contain"
                />
                <h3 className="text-xl font-semibold">
                  School Integrated Program
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Designed to make your school the ultimate destination for test
                preparation.
              </p>
              <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                Know More
              </button>
            </div>

            {/* Card 5 */}
            <div className="bg-[#fff4f0] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex-1">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://www.extramarks.com/static/media/ParentIcon.b9b206fc.svg"
                  alt="Parent App"
                  className="w-12 h-12 object-contain"
                />
                <h3 className="text-xl font-semibold">Parent App</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Actively engage parents in their child’s learning journey
                through real time updates, progress monitoring, and
                collaborative platforms.
              </p>
              <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovativeSolutions;
