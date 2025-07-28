import React from "react";
import KavyaPicture from "../assets/kavya.jpg"; // adjust path if needed
export default function AboutSection() {
  return (
    <div id="about" className="min-h-screen bg-white px-6 py-8 md:px-12 lg:px-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-16">
        <h1 className="text-xl md:text-xl lg:text-3xl font-semibold text-black">
          about.
        </h1>
        <a
          href="#"
          className="text-black hover:text-gray-600 transition-colors"
        >
          <button className="bg-gray-100 px-4 py-2 text-sm rounded-md hover:bg-gray-200 transition">
            Show More
          </button>
        </a>
      </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        {/* Hero Text */}
        <div className="mb-16">
          <h2 className="text-lg text-center md:text-left md:text-xl lg:text-4xl font-bold leading-tight text-black md:max-w-[70%] lg:max-w-[60%] mx-auto md:mx-0">
            Machine learning engineer with a strong software background,
            specializing in end-to-end model development and deployment. I build
            scalable, data-driven solutions for real-world applications like
            sentiment analysis, predictions, and recommendations.
          </h2>
        </div>
        {/* Image and Description Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="w-full max-w-xl aspect-[3/2] overflow-hidden rounded-lg mx-auto lg:ml-[30%]">
            <img
              src={KavyaPicture}
              alt="Kavya Sharma"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          {/* Description Text */}
          <div className="flex items-center">
            <p
            style={{ maxWidth: '330px' }}
className="text-base md:text-lg lg:text-xl font-normal leading-relaxed text-black mx-auto md:ml-[30%] max-w-full md:max-w-[400px] lg:max-w-[500px] text-center md:text-left"
          >
            I’m dedicated to developing robust and scalable machine learning solutions that solve complex problems and deliver lasting impact.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}
