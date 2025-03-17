import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import PartnersClients from "../../Components/PartnersCarousal/Partners";
import Footer from "../../Components/Footer/Footer";
import TeacherBanner from "../../Components/Hero/teachers/Banner";
import TeachingPhases from "../../Components/Hero/teachers/Offerings";
import TeachingAdvantages from "../../Components/Hero/teachers/Advantages";
import FeatureSections from "../../Components/Hero/teachers/Infobanner";
import ComparisonTable from "../../Components/Hero/teachers/Table";
import BeyondLearning from "../../Components/Hero/teachers/Opportinities";
import WhyExtramarks from "../../Components/Hero/teachers/Ehy";

const Teacher = () => {
  return (
    <div>
      <Navbar />
      <TeacherBanner />
      <TeachingPhases />
      <TeachingAdvantages />
      <FeatureSections />
      <ComparisonTable />
      <BeyondLearning />
      <WhyExtramarks />
      <PartnersClients />
      <Footer />
    </div>
  );
};

export default Teacher;
