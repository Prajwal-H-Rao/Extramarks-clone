import { useState, useEffect, useCallback } from "react";
import {
  FaUsers,
  FaUserSecret,
  FaUniversity,
  FaBook,
  FaTrophy,
  FaGlobe,
} from "react-icons/fa";

// Reusable counter hook (keep the same)
const useAnimatedCounter = (target) => {
  const [count, setCount] = useState(0);

  const animate = useCallback(() => {
    let startTime = Date.now();
    const duration = 3000;

    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(target * progress));

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [target]);

  useEffect(() => {
    animate();
  }, [animate]);

  return count;
};

const CounterBox = ({ icon: Icon, count, title }) => {
  const animatedCount = useAnimatedCounter(count);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-4">
      <div className="text-4xl text-blue-600">
        <Icon className="w-12 h-12" />
      </div>
      <div>
        <div className="text-3xl font-bold text-gray-800">
          {animatedCount.toLocaleString()}+
        </div>
        <div className="text-lg text-gray-600 mt-1">{title}</div>
      </div>
    </div>
  );
};

const Stats = () => {
  const counterData = [
    { icon: FaUsers, count: 1000000, title: "Students Enrolled" },
    { icon: FaUserSecret, count: 50000, title: "Teachers" },
    { icon: FaUniversity, count: 10000, title: "Schools" },
    { icon: FaBook, count: 500000, title: "Courses" },
    { icon: FaTrophy, count: 150, title: "Awards Won" },
    { icon: FaGlobe, count: 25, title: "Countries" },
  ];

  return (
    <div className="h-[calc(100vh-400px)] mx-50 mt-20 flex ">
      <div className="flex-1 flex flex-col justify-center p-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Transforming education for generations
        </h1>
        <p className="text-justify mt-10 pr-10">
          Founded in 2007, Extramarks is a new-age education technology company
          committed to revolutionizing the way students learn and teachers teach
          using cutting-edge solutions. Our AI-based digital learning tools
          cover all subjects across boards and follow a curriculum-based
          approach. Join us today and experience the power of total learning in
          the digital age with Extramarks.
        </p>
      </div>

      <div className="flex-1 p-8">
        <div className="grid grid-cols-2 gap-6 h-full">
          {counterData.map((item, index) => (
            <CounterBox
              key={index}
              icon={item.icon}
              count={item.count}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
