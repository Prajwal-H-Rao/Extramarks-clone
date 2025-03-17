import React from "react";

const TeachingFeatures = () => {
  const features = [
    {
      title: "Interactive Digital Content",
      image:
        "https://www.extramarks.com/static/media/featureimg1.cf2fcaa3.webp",
      steps: [
        {
          title: "All subjects, all classes, multiple boards",
          description:
            "Our extensive range of content covers all subjects, all classes and multiple boards, making learning fun and interactive.",
        },
        {
          title: "Game based learning & more",
          description:
            "Engage students with game based practice, including pop-questions, in-video quizzes and other stimulating activities.",
        },
        {
          title: "NEP-ready",
          description:
            "Assess your students’ knowledge with a diverse range of question types, including objective, subjective, integer, match-the-following, and more.",
        },
      ],
      curve: "darkorangecurve.b930ccda.svg",
      arrow: "arrow-1.b09941fa.svg",
      reverse: false,
    },
    {
      title: "Hassle-free Assessments",
      image:
        "https://www.extramarks.com/static/media/featureimg2.a702a480.webp",
      steps: [
        {
          title: "Test creation simplified",
          description:
            "Utilize ready-made templates or design your own in-class tests for virtual and in-person environments.",
        },
        {
          title: "Recommended assessments",
          description:
            "Assign automatically drafted tests to students based on class topics with just one click.",
        },
        {
          title: "Instant grading",
          description:
            "Get instant & accurate online and offline test grading as soon as students submit their work.",
        },
      ],
      curve: "light-orange.37a16688.svg",
      arrow: "arrow-2.60483576.svg",
      reverse: true,
    },
    {
      title: "Seamless Classroom Management",
      image:
        "https://www.extramarks.com/static/media/featureimg3.2990a937.webp",
      steps: [
        {
          title: "Effective lecture recordings",
          description:
            "Facilitating learning with high-quality lecture recordings, enabling students to reinforce in-class education at their own pace beyond school hours.",
        },
        {
          title: "Interactive information centre",
          description:
            "Stay connected with students and their parents in real time, with instant updates and notifications.",
        },
        {
          title: "Assignment alerts",
          description:
            "Ensure no student misses important deadlines with notification and timely reminder for all assignments.",
        },
      ],
      curve: "pink.525bdf03.svg",
      arrow: "arrow-3.b09941fa.svg",
      reverse: false,
    },
    {
      title: "Actionable Insights and Dashboards",
      image:
        "https://www.extramarks.com/static/media/featureimg4.96ae9038.webp",
      mobileImage: "/static/media/featureimg4mweb.cee36745.webp",
      steps: [
        {
          title: "Measure learning efficiency",
          description:
            "Easily assess the exam readiness of students by tracking the time they spend on each question.",
        },
        {
          title: "Detailed student and class reports",
          description:
            "Detailed insights of students’ performance & progress by tracking every test, quiz and assignment taken by them.",
        },
        {
          title: "Bloom’s taxonomy based analytics",
          description:
            "Pinpoint the areas in which students are struggling with the most precise recommendations on areas of improvement.",
        },
      ],
      curve: "bluecurve.7b37c5a3.svg",
      arrow: "arrow-4.60483576.svg",
      reverse: true,
    },
  ];

  return (
    <section className="py-16">
      {/* Main Header */}
      <div className="container mx-auto px-4 relative mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          A unified solution for
          <br className="hidden md:block" /> enriched teaching & enhanced
          learning
        </h2>
      </div>

      {/* Feature Sections */}
      {features.map((feature, index) => (
        <div
          key={index}
          className={`relative py-16 ${index % 2 === 1 ? "bg-gray-50" : ""}`}
        >
          {/* Curve and Arrow */}
          <div
            className={`hidden md:block absolute ${
              feature.reverse ? "left-0" : "right-0"
            } top-1/2 -translate-y-1/2`}
          ></div>

          <div className="container mx-auto px-4">
            <div
              className={`flex flex-col md:flex-row ${
                feature.reverse ? "md:flex-row-reverse" : ""
              } items-center gap-8`}
            >
              {/* Content */}
              <div className="md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  {feature.title}
                </h3>
                <div className="space-y-8">
                  {feature.steps.map((step, stepIndex) => (
                    <div key={stepIndex}>
                      <h5 className="text-lg font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h5>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  ))}
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className="md:w-1/2">
                {feature.mobileImage ? (
                  <picture>
                    <source
                      media="(max-width: 767px)"
                      srcSet={feature.mobileImage}
                    />
                    <img
                      src={feature.image}
                      className="w-full h-auto rounded-lg"
                      alt={feature.title}
                      loading="lazy"
                    />
                  </picture>
                ) : (
                  <img
                    src={feature.image}
                    className="w-full h-auto rounded-lg "
                    alt={feature.title}
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TeachingFeatures;
