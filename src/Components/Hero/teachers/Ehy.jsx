import React from "react";

const StatCard = ({ icon, value, label }) => (
  <div className="flex items-center bg-white p-6 shadow-lg rounded-lg w-full">
    <img src={icon} alt={label} className="w-16 h-16" />
    <div className="ml-4">
      <h3 className="text-3xl font-bold text-orange-600">{value}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  </div>
);

const WhyExtramarks = () => {
  return (
    <section className="bg-orange-50 py-16 relative overflow-hidden">
      {/* Background Images */}
      <img
        src="https://www.extramarks.com/static/media/why_orange_left.71a7f040.svg"
        alt="left_background"
        className="absolute left-0 top-0"
      />
      <img
        src="https://www.extramarks.com/static/media/orange1.59f4e907.svg"
        alt="right_background"
        className="absolute right-0 top-0"
      />

      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Why Extramarks?</h2>
          <h4 className="text-lg text-gray-600 mt-2">
            Know what makes Teacher App by Extramarks your #1 Choice.
          </h4>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section */}
          <div className="md:w-5/12">
            <p className="text-gray-700 leading-relaxed">
              Discover a holistic approach to reshape education with our
              transformative solution. Experience effortless classroom
              management, captivating content delivery, and streamlined
              administrative processes. Empower educators with deep student
              insights, enabling tailored teaching strategies. Facilitate
              learning beyond the classroom with top-notch lecture recordings.
              Unleash engagement through an interactive whiteboard and foster
              academic integrity with unique assessments. Embrace a new paradigm
              of teaching excellence, where innovation meets tradition.
            </p>

            <ul className="mt-4 space-y-2 text-gray-700">
              <li>✅ Seamlessly manage classes and schedules</li>
              <li>✅ Personalized recommendations for teaching strategies</li>
              <li>✅ Foster engagement with an interactive whiteboard</li>
            </ul>

            <button className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-orange-600 transition-all">
              Get Started
            </button>
          </div>

          {/* Right Section - Stats */}
          <div className="md:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <StatCard
              icon="https://www.extramarks.com/static/media/left-top.b9bd59f0.svg"
              value="0+"
              label="Yrs Experience"
            />
            <StatCard
              icon="https://www.extramarks.com/static/media/right-top.dd507f03.svg"
              value="3,20,000+"
              label="Teachers"
            />
            <StatCard
              icon="https://www.extramarks.com/static/media/left-center.ff2f0034.svg"
              value="18+"
              label="School Boards"
            />
            <StatCard
              icon="https://www.extramarks.com/static/media/right-center.dd507f03.svg"
              value="2,000+"
              label="Experts and Researchers"
            />
            <StatCard
              icon="https://www.extramarks.com/static/media/left-bottom.b9bd59f0.svg"
              value="1,00,00,000+"
              label="Students"
            />
            <StatCard
              icon="https://www.extramarks.com/static/media/right-bottom.17d6910c.svg"
              value="15,000+"
              label="Schools"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyExtramarks;
