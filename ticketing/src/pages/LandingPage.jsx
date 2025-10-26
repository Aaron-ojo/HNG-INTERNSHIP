import React from "react";
import Header from "../Layout/Header";
import HeroSection from "../Layout/Hero";
import FeaturesSection from "../Layout/Features";
import Footer from "../Layout/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
