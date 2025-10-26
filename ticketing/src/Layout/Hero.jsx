import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-600 to-green-300 min-h-[500px] flex items-center">
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">
          Streamline Your Support Process
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Efficient ticket management system for teams of all sizes
        </p>
        <div className="space-x-4">
          <Link
            to="/login"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold"
          >
            Get Started
          </Link>
        </div>
      </div>

      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/10 rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            className="fill-white"
            opacity="0.25"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            className="fill-white"
            opacity="0.5"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
