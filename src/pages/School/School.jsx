import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import PartnersClients from "../../Components/PartnersCarousal/Partners";
import Footer from "../../Components/Footer/Footer";
import Subnav from "./subnav/Subnav";
import ReimagineSchoolingBanner from "../../Components/Hero/schools/Thero";
import FosteringEdJourney from "../../Components/Hero/schools/TValues";
import CounterStats from "../../Components/Stats/schools/Tstat";
import InnovativeSolutions from "../../Components/Hero/schools/Banner";
import ConductOffline from "../../Components/Hero/schools/ConductOffline";

const School = () => {
  return (
    <div>
      <Navbar />
      <Subnav />
      <ReimagineSchoolingBanner />
      <FosteringEdJourney />
      <CounterStats />
      <InnovativeSolutions />
      <ConductOffline />
      <PartnersClients />
      <Footer />
    </div>
  );
};

export default School;
