import React, { useEffect, useRef, useState } from "react";
import {
  FaChalkboardTeacher,
  FaSchool,
  FaGraduationCap,
  FaUsers,
} from "react-icons/fa";

const useCountAnimation = (targetNumber, duration = 3000) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const startTime = Date.now();
          const startNumber = 0;

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = Math.floor(progress * targetNumber);

            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [targetNumber, duration]);

  return [count, elementRef];
};

const CounterStats = () => {
  const stats = [
    {
      icon: <FaChalkboardTeacher className="size-16 text-gray-700" />,
      target: 90000000,
      label: "NUMBER OF TEACHERS",
    },
    {
      icon: <FaSchool className="size-16 text-gray-700" />,
      target: 7000000,
      label: "NUMBER OF SCHOOLS",
    },
    {
      icon: <FaGraduationCap className="size-16 text-gray-700" />,
      target: 240000000,
      label: "NUMBER OF STUDENTS",
    },
    {
      icon: <FaUsers className="size-16 text-gray-700" />,
      target: 1800000000,
      label: "NUMBER OF PARENTS",
    },
  ];

  return (
    <div className="font-montserrat">
      {/* Header Section */}
      <div className="h-36 bg-gray-800 flex items-center justify-center">
        <p className="text-2xl md:text-3xl font-bold text-white text-center">
          Empowering schools: Together towards excellence
        </p>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const [count, ref] = useCountAnimation(stat.target);
              return (
                <div
                  key={index}
                  ref={ref}
                  className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {new Intl.NumberFormat().format(count)}
                  </div>
                  <h5 className="text-lg font-semibold text-gray-600">
                    {stat.label}
                  </h5>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CounterStats;
