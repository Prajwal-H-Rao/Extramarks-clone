import React from "react";

const AwardsRecognition = () => {
  const awards = [
    {
      image: "https://www.extramarks.com/static/media/iamai.43227b1b.webp",
      title: "IAMAI India Digital Awards 2025",
      text: "Recognized for impactful educational content, Extramarks secured the prestigious Gold Award at the IAMAI India Digital Awards 2025.",
    },
    {
      image: "https://www.extramarks.com/static/media/inkspell.f4964725.webp",
      title: "INKSPELL Media Awards 2024",
      text: "Commitment to high-quality educational content earned Extramarks the Best Content in an Educational Blog/Website award at the Inkspell Media Awards 2024.",
    },
    {
      image: "https://www.extramarks.com/static/media/financial.6a1242ec.webp",
      title: "Financial Express Brand Wagon Ace Awards 2024",
      text: "Extramarks was honoured at the Financial Express BrandWagon Ace Awards 2024 for its excellence in the education and edtech sector.",
    },
    {
      image: "https://www.extramarks.com/static/media/financial.6a1242ec.webp",
      title: "ET BrandEquity India DigiPlus Awards 2024",
      text: "ET BrandEquity India DigiPlus Awards 2024 recognized Extramarks for leveraging data analytics and insights to drive impactful results in digital education.",
    },
    {
      image:
        "https://www.extramarks.com/static/media/indianeducation.187937b1.webp",
      title: "Entrepreneur - Indian Education Awards",
      text: "Groundbreaking integration of education and Technology award at the Indian Education Awards 2024.",
    },
  ];

  return (
    <section className="my-24">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Awards & Recognition
          </h2>
          <p className="text-lg text-gray-600">
            Our awards and recognition prove our excellence in the field of
            online learning <br />
            and our brand loyalty
          </p>
        </div>

        {/* Awards Cards */}
        <div className="overflow-x-auto pb-6">
          <div className="flex gap-6 min-w-max px-4">
            {awards.map((award, index) => (
              <div key={index} className="flex-none w-72">
                {/* Image Container with curved bottom */}
                <div className="relative mb-4">
                  {/* Blue background with curved bottom */}
                  <div className=" rounded-t-lg h-40 relative overflow-hidden">
                    {/* Trophy image centered */}
                    <img
                      src={award.image}
                      alt="Award trophy"
                      className="w-full h-full object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 bg-white">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {award.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{award.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsRecognition;
