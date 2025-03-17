import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const TransformativePower = () => {
  const swiperRef = useRef(null);

  const cards = [
    {
      title: "Diagnose",
      content:
        "AI-driven diagnosis preliminary test to check concept clarity and preparedness in any topic.",
      bgColor: "bg-blue-100",
      image:
        "https://cdn-gcp.extramarks.com/emcontent/uploads/staticwebsite/dignose.svg",
    },
    {
      title: "Learn",
      content:
        "Explore the vast content repository with 2D and 3D content for a fun and effective learning experience.",
      bgColor: "bg-green-100",
      image: "https://www.extramarks.com/static/media/learn.30f34f79.svg",
    },
    {
      title: "Practice",
      content:
        "Practice smarter with AI-based questions in MCQ and subjective formats for 360° understanding.",
      bgColor: "bg-yellow-100",
      image:
        "https://cdn-gcp.extramarks.com/emcontent/uploads/staticwebsite/practice.svg",
    },
    {
      title: "Test",
      content:
        "Check your learning with various topic tests and get complete performance reports.",
      bgColor: "bg-blue-50",
      image:
        "https://cdn-gcp.extramarks.com/emcontent/uploads/staticwebsite/test.svg",
    },
    {
      title: "Evaluate",
      content:
        "Boost development with AI-powered insights for personalized student assessment.",
      bgColor: "bg-pink-100",
      image:
        "https://cdn-gcp.extramarks.com/emcontent/uploads/staticwebsite/evaluate.svg",
    },
  ];

  return (
    <section className="relative mt-16 py-12">
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          AI-based transformative pedagogy
        </h2>
      </div>

      <div className="relative bg-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="transformative-swiper"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`${card.bgColor} rounded-xl p-8 h-96 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow`}
                >
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {card.title}
                    </h3>
                    <div className="w-16 h-1 bg-gray-900 rounded-full mb-4" />
                    <p className="text-gray-700 text-base">{card.content}</p>
                  </div>
                  <div className="flex justify-end">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-48 h-32 object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="text-center mt-8">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default TransformativePower;
