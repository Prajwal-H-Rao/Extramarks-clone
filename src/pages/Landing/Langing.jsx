import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import ImageCarousel from "../../Components/Carousal/Carousal";
import HeroSection from "../../Components/Hero/Hero";
import EducationalLandingPage from "../../Components/Slideroptions/Selection";
import Image1 from "../../assets/image1.jpg";
import Image2 from "../../assets/image2.jpg";
import Image3 from "../../assets/image3.jpg";
import jee from "../../assets/jee.jpeg";
import neet from "../../assets/neet.jpg";
import Footer from "../../Components/Footer/Footer";
import PartnersClients from "../../Components/PartnersCarousal/Partners";
import Stats from "../../Components/Stats/Stats";

const Landing = () => {
  const courseTabs = ["JEE", "NEET"];
  const courseTabContent = {
    JEE: {
      title: "Learn what you want, how you want",
      description:
        "Experience the ease of learning at your own pace with a best-in-class, customisable solution",
      image: jee,
      subtitle: "JEE",
      features: [],
    },
    NEET: {
      title: "Your perfect NEET preparation partner",
      description:
        "Realise your medical aspirations with a comprehensive, customised, and rigorous approach to exam preparation",
      image: neet,
      subtitle: "NEET",
      features: [],
    },
  };
  const tabs = [
    "Smart Class Plus",
    "School Integrated Program",
    "Learning App",
  ];

  const tabContent = {
    "Smart Class Plus": {
      title: "AI-powered solutions for new-age classrooms",
      description:
        "Transform traditional teaching into dynamic, interactive, and NEP-ready digital classroom",
      image: Image1,
      subtitle: "SMART CLASS+",
      features: [
        "Interactive Learning",
        "Real-time Analytics",
        "Curriculum Aligned",
      ],
    },
    "School Integrated Program": {
      title: "Comprehensive School Management Solution",
      description:
        "Streamline administration and enhance learning outcomes with integrated systems",
      image: Image2,
      subtitle: "SCHOOL INTEGRATION",
      features: [
        "Attendance Tracking",
        "Performance Monitoring",
        "Resource Management",
      ],
    },
    "Learning App": {
      title: "Personalized Learning Experience",
      description:
        "Adaptive learning platform for students with AI-driven recommendations",
      image: Image3,
      subtitle: "MOBILE LEARNING",
      features: ["Anytime Access", "Skill Development", "Progress Tracking"],
    },
  };
  return (
    <div>
      <Navbar />
      <ImageCarousel />
      <HeroSection />
      <EducationalLandingPage
        tabs={tabs}
        tabContent={tabContent}
        HeaderContent={"Transform Schooling with AI"}
        description={"Explore our school solutions"}
        bg={""}
      />
      <EducationalLandingPage
        tabs={courseTabs}
        tabContent={courseTabContent}
        HeaderContent={"Transform Learning"}
        description={"Discover our latest solutions for students"}
        bg={"blue-200"}
      />
      <Stats />
      <PartnersClients />
      <Footer />
    </div>
  );
};

export default Landing;
