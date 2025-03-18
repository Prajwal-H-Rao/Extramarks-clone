import React, { useState } from "react";

const EducationPortal = () => {
  const [activeTab, setActiveTab] = useState("NEET");

  const tabs = ["K-12", "JEE", "NEET"];

  // Banner content for each tab
  const bannerContent = {
    "K-12": {
      appName: "EXTRA MARKS LEARNING APP",
      title: "Discover the joy of",
      highlightText: "learning, every single day!",
      description:
        "Immerse yourself in 3D video lessons, games, and personalized feedback for a dynamic learning experience",
      buttonText: "Start Learning",
      accentColor: "text-[#FF6B00]",
      bg: "#fffbf0",
      buttonBg: "bg-[#FF6B00]",
      buttonHoverBg: "hover:bg-[#E05F00]",
      mainImage: "http://extramarks.com/static/media/schoolbag.31be7e96.svg",
    },
    JEE: {
      appName: "JEE Learning App",
      title: "Engineering your",
      highlightText: "JEE success",
      description:
        "Accelerate your JEE dreams with expert guidance and personalized mentoring",
      buttonText: "Start Learning",
      accentColor: "text-[#FF6B00]",
      buttonBg: "bg-[#FF6B00]",
      bg: "#fff9f7",
      buttonHoverBg: "hover:bg-[#E05F00]",
      mainImage: "https://www.extramarks.com/static/media/jee_boy.4edbc57d.svg",
    },
    NEET: {
      appName: "NEET Learning App",
      title: "Your perfect",
      highlightText: "NEET preparation partner",
      description:
        "Realise your medical aspirations with a comprehensive, customised, and rigorous approach to exam preparation",
      buttonText: "Start Learning",
      accentColor: "text-[#FF6B00]",
      buttonBg: "bg-[#FF6B00]",
      bg: "#fafcf7",
      buttonHoverBg: "hover:bg-[#1EAE16]",
      mainImage:
        "https://www.extramarks.com/static/media/banner-right-image.fe693363.svg",
    },
  };

  const currentContent = bannerContent[activeTab];

  return (
    <div className="w-full">
      {/* Navigation Bar */}
      <div className="w-full bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <nav className="flex">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-6 py-3 font-medium text-sm transition-colors duration-200 ${
                  activeTab === tab
                    ? `text-${
                        tab === "NEET" ? "[#24C11B]" : "[#FF6B00]"
                      } border-b-2 border-${
                        tab === "NEET" ? "[#24C11B]" : "[#FF6B00]"
                      }`
                    : "text-gray-700 hover:text-orange-500"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Banner Section */}
      <section
        className="relative"
        style={{ backgroundColor: currentContent.bg }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-12 md:py-24">
            {/* Left Content */}
            <div className="md:w-1/2 z-20">
              <h4 className="text-lg font-normal mb-4 text-gray-800">
                {currentContent.appName}
              </h4>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
                {currentContent.title}
                <br />
                <span className={currentContent.accentColor}>
                  {currentContent.highlightText}
                </span>
              </h1>
              <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-700">
                {currentContent.description}
              </p>
              <button
                className={`${currentContent.buttonBg} text-white px-8 py-4 rounded-full 
                         ${currentContent.buttonHoverBg} transition-colors duration-300
                         text-lg font-medium`}
              >
                {currentContent.buttonText}
              </button>
            </div>

            {/* Right Content - Contained Images */}
            <div className="md:w-1/2 relative z-20">
              <div className="relative max-w-[600px] mx-auto aspect-square">
                {/* Main Image Container */}
                <div className="relative w-full h-full">
                  <img
                    src={currentContent.mainImage}
                    className="w-full h-full object-contain"
                    alt="Main illustration"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
      </section>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default EducationPortal;
