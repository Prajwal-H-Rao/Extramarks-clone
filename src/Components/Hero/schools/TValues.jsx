import React from "react";

const FosteringEdJourney = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fostering a collaborative educational journey for all stakeholders
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Management Card */}
          <div className="bg-[#fff4f0] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <img
                src="https://www.extramarks.com/static/media/School.a0776dfd.svg"
                alt="School Management"
                loading="lazy"
                className="h-15 w-[70px]"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">School Management</h3>
              <p className="text-gray-600">
                <strong className="font-semibold">
                  Streamlining school management:
                </strong>{" "}
                State-of-the-art platform for efficient operations, centralized
                data, real-time insights, fostering a harmonious school
                environment.
              </p>
            </div>
          </div>

          {/* Teacher Assistance Card */}
          <div className="bg-[#e6f3ff] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <img
                src="https://www.extramarks.com/static/media/Teacher.e3d4a202.svg"
                alt="Teacher Assistance"
                loading="lazy"
                className="h-15 w-[70px]"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Teacher Assistance</h3>
              <p className="text-gray-600">
                <strong className="font-semibold">
                  Revolutionizing teacher experience:
                </strong>{" "}
                Empowering educators with user-friendly technologies,
                streamlined administrative processes, seamless support, and a
                student-centered approach to impactful education.
              </p>
            </div>
          </div>

          {/* Student Development Card */}
          <div className="bg-[#e3fff1] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <img
                src="https://www.extramarks.com/static/media/Student.a59656a3.svg"
                alt="Student Development"
                loading="lazy"
                className="h-15 w-[70px]"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Student Development
              </h3>
              <p className="text-gray-600">
                <strong className="font-semibold">
                  Focusing on student development:
                </strong>{" "}
                Fostering intellectual, emotional, and social growth through
                innovative programs and personalized support.
              </p>
            </div>
          </div>

          {/* Parent Collaboration Card */}
          <div className="bg-[#fffaeb] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <img
                src="https://www.extramarks.com/static/media/Parent.d82d3396.svg"
                alt="Parent Collaboration"
                loading="lazy"
                className="h-15 w-[70px]"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Parent Collaboration
              </h3>
              <p className="text-gray-600">
                <strong className="font-semibold">
                  Promoting parent involvement:
                </strong>{" "}
                Regular communication, engaging workshops, accessible resources,
                nurturing a strong partnership between home and school for
                student growth and success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FosteringEdJourney;
