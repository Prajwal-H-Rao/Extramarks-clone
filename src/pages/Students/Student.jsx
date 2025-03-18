import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import PartnersClients from "../../Components/PartnersCarousal/Partners";
import Footer from "../../Components/Footer/Footer";
import NavigationBar from "./subnav/Subnav";
import MultilayeredSection from "./cards/Cards";
import TeachingPhases from "../../Components/Hero/teachers/Offerings";
import TeachingAdvantages from "../../Components/Hero/teachers/Advantages";
import ComparisonTable from "../../Components/Hero/teachers/Table";
import FeatureSections from "../../Components/Hero/teachers/Infobanner";
import CounterStats from "../../Components/Stats/schools/Tstat";
import TransformativePower from "../../Components/Hero/schools/SliderBanner";
import AwardsRecognition from "./Awards/Awards";

const Student = () => {
  return (
    <div>
      <Navbar />
      <NavigationBar />
      <MultilayeredSection />
      <TeachingPhases />
      <TeachingAdvantages />
      <FeatureSections />
      <ComparisonTable />
      <CounterStats />
      <TransformativePower />
      <AwardsRecognition />
      <PartnersClients />
      <Footer />
    </div>
  );
};

export default Student;
