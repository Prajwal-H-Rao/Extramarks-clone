import React from "react";

const ComparisonTable = () => {
  return (
    <section className="bg-gradient-to-b from-blue-100 to-pink-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
          Extramarks Vs Other Platforms
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-orange-500 text-white">
                <th className="text-left px-6 py-4 border border-gray-300 text-lg font-semibold">
                  Features
                </th>
                <th className="text-left px-6 py-4 border border-gray-300 text-lg font-semibold">
                  Extramarks
                </th>
                <th className="text-left px-6 py-4 border border-gray-300 text-lg font-semibold">
                  Other Platforms
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  feature: "Game Based Content",
                  extramarks:
                    "Animated, game based, interactive, adaptive content to enhance concept retention",
                  others: "Video Content only",
                },
                {
                  feature: "NEP Ready Content",
                  extramarks:
                    "Real-time updated curriculum tailored to the New Education Policy",
                  others: "Outdated Content",
                },
                {
                  feature: "Create Online, Conduct Offline",
                  extramarks:
                    "Effortlessly create high-quality offline tests with our extensive question bank. Scan and upload offline assessment for automated grading",
                  others: "Limited Features",
                },
                {
                  feature: "Cheating Eliminated",
                  extramarks:
                    "Unique testing experiences for each student by generating unlimited variations of the same questions with Power Questions feature",
                  others: "Limited automation",
                },
                {
                  feature: "Inter Platform Connectivity",
                  extramarks:
                    "Complete and connected ecosystem for students, parents, teachers and school managements",
                  others: "Limited connectivity between platforms",
                },
                {
                  feature: "Bloom's Taxonomy based reports",
                  extramarks:
                    "In-depth reports and performance analytics based on Bloom’s taxonomy parameters",
                  others: "Basic reports provided",
                },
              ].map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-orange-50"}
                >
                  <td className="font-semibold px-6 py-4 border border-gray-300 text-gray-800">
                    {row.feature}
                  </td>
                  <td className="px-6 py-4 border border-gray-300 text-gray-700">
                    {row.extramarks}
                  </td>
                  <td className="px-6 py-4 border border-gray-300 text-gray-700">
                    {row.others}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-8">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
            Talk to Expert
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
