import React from "react";

const TeachingPhases = () => {
  return (
    <section className="my-24">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive teacher support across all teaching phases
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="mb-6">
              <img
                src="https://www.extramarks.com/static/media/classrom.d2000af6.svg"
                alt="classroom"
                className="w-[70px] h-[60px]"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Classroom Planning
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Elevating education through
                <br />
                meticulous class scheduling,
                <br />
                lecture prep, and engaging
                <br />
                pre-reads.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="mb-6">
              <img
                src="https://www.extramarks.com/static/media/delivery.8852dff5.svg"
                alt="delivery"
                className="w-[70px] h-[60px]"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Lecture Delivery and Management
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Enhance your lectures through curated content, attendance
                tracking, shared recordings and more.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="mb-6">
              <img
                src="https://www.extramarks.com/static/media/support.00fdb9a5.svg"
                alt="support"
                className="w-[70px] h-[60px]"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Assessment Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Upgrade your assessments with customized tests, a wide question
                repository, and automated evaluation.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="mb-6">
              <img
                src="https://www.extramarks.com/static/media/perfomance.e03f1398.svg"
                alt="performance"
                className="w-[70px] h-[60px]"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Performance Evaluation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Access comprehensive classroom
                <br />
                reports, monitor progress, and
                <br />
                stay in the loop with attendance
                <br />
                updates – empowering teachers
                <br />
                as integral partners.
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button
            className="bg-blue-600 text-white px-8 py-3 rounded-full
                      hover:bg-blue-700 transition-colors text-lg font-semibold
                      shadow-md hover:shadow-lg"
            id="static_knowmore"
          >
            Start Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeachingPhases;
