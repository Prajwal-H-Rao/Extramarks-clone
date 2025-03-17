import React, { useState } from "react";

const EducationalLandingPage = ({
  tabs,
  tabContent,
  HeaderContent,
  description,
  bg,
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className={`w-full mx-auto`}>
      <header className="text-center py-10 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          {HeaderContent}
        </h1>
        <p className="text-xl text-gray-600 mb-8">{description}</p>

        <div className="flex justify-center flex-wrap border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-6 py-3 mx-1 transition-all duration-300 border-b-2 ${
                activeTab === tab
                  ? "text-orange-500 border-orange-500 font-bold"
                  : "text-gray-500 border-transparent hover:text-orange-400"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      <section className={`flex flex-col md:flex-row h-[60vh] bg-${bg}`}>
        {/* Content Left Side */}
        <div className="md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="max-w-2xl mx-auto">
            <div className="mb-4 text-orange-500 font-bold">
              {tabContent[activeTab]?.subtitle}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {tabContent[activeTab]?.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {tabContent[activeTab]?.description}
            </p>
            <ul className="mb-8 space-y-3">
              {tabContent[activeTab]?.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <svg
                    className="w-5 h-5 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300 w-fit">
              Learn More
            </button>
          </div>
        </div>

        {/* Image Right Side */}
        <div className="md:w-1/2 h-[400px] md:h-auto relative">
          <img
            src={tabContent[activeTab]?.image}
            alt={activeTab}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50/50 to-transparent md:hidden" />
        </div>
      </section>
    </div>
  );
};

export default EducationalLandingPage;
