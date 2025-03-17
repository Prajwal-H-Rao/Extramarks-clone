import React from "react";

const ConductOffline = () => {
  return (
    <section className="relative py-16 bg-orange-400 p-10">
      {/* Hashtag Label */}
      <div className="absolute right-8 top-8 transform rotate-90 origin-top-right text-2xl font-bold text-gray-400">
        #AdvancingEducation
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Content */}
          <div className="lg:w-1/2 flex flex-col items-start space-y-6">
            <img
              src="https://www.extramarks.com/static/media/ConductOfflineBook.6ef8e8d1.svg"
              alt="Book Icon"
              className=" h-auto w-40 "
            />
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Create Online Conduct Offline
            </h3>
            <div className="w-16 h-1 bg-blue-600 rounded-full" />
            <h4 className="text-xl text-gray-700">
              Introducing <b className="font-semibold">Offline Assessments</b>
            </h4>
            <div className="flex flex-wrap items-center gap-4 text-gray-600">
              <span>Choose from Millions of Questions</span>
              <span className="text-gray-400">|</span>
              <span>Print & Share Among Students</span>
              <span className="text-gray-400">|</span>
              <span>Scan & Upload Answer Sheets</span>
              <span className="text-gray-400">|</span>
              <span>AI-Powered Auto Evaluation</span>
            </div>
            <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
              Know More
            </button>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2">
            <img
              src="https://www.extramarks.com/static/media/ConductOfflineRightImg.8e01b2cf.svg"
              alt="Assessment Interface"
              className="w-full h-auto max-w-2xl mx-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConductOffline;
