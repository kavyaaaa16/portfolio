import React from "react";
import KavyaPic from "../assets/kavya.jpg"; // adjust path as needed

export default function Hero() {
  return (
    <div
      id="hero"
      className="min-h-screen bg-white text-black px-6 md:px-20 py-12 font-mplus relative"
    >
      {/* Header */}
      <header className="flex items-center mb-16"></header>

      {/* Mobile view: stack image + name/email; Desktop: original flex horizontal */}
      <div className="mb-4 -mt-16">
        {/* Mobile only: image on top, centered */}
        <div className="block md:hidden w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
          <img
            src={KavyaPic}
            alt="Kavya Sharma"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Desktop only: original flex horizontal */}
        <div className="hidden md:flex justify-between items-center">
          <h2 className="text-[80px] md:text-[150px] font-extrabold leading-[1.05]">
            KAVYA
          </h2>
          <div className="w-32 h-32 rounded-full overflow-hidden">
            <img
              src={KavyaPic}
              alt="Kavya Sharma"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Mobile only: name below image */}
        <div className="block md:hidden text-center">
          <h2 className="text-[80px] font-extrabold leading-[1.05]">KAVYA</h2>
        </div>
      </div>

      {/* SHARMA and email (same for mobile and desktop) */}
      <div className="text-center md:text-left">
        <h2 className="text-[80px] md:text-[150px] font-extrabold leading-[1.05] mb-8">
          SHARMA
        </h2>
        <p className="text-base md:text-[30px] flex justify-center md:justify-start items-center gap-2 text-gray-800 font-semibold max-w-md mx-auto md:mx-0">
          <span>kavyasharma@gmail.com</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 8.25h-3A2.25 2.25 0 003 10.5v8.25A2.25 2.25 0 005.25 21h8.25A2.25 2.25 0 0015.75 18.75v-3m-6-6l9-9m0 0h-6m6 0v6"
            />
          </svg>
        </p>
      </div>

      {/* Bottom right intro paragraph */}
      <div className="absolute bottom-10 right-6 md:bottom-40 md:right-14 max-w-xl text-right md:text-left">
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
          I specialize in Machine Learning while leveraging software
          engineering expertise to develop scalable, data-driven AI solutions
          that address complex challenges.
        </p>
      </div>
    </div>
  );
}
