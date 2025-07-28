import React from "react";
import { Link } from "react-router-dom";

import { ArrowRight } from "lucide-react";
import hd1 from "/src/assets/hd/hd1.jpeg";
import hd2 from "/src/assets/hd/hd2.jpeg";
import hd7 from "/src/assets/hd/hd7.jpeg";
import hd8 from "/src/assets/hd/hd8.jpeg";

import br6 from "/src/assets/br/br6.jpeg";
import wg1 from "/src/assets/wg/wg1.jpeg";




 // adjust path as needed

export default function HeartDisease() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 p-6 md:p-8">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-bold">KS</div>
          <div className="text-sm text-gray-500">
            <span className="hidden sm:inline">SCROLL DOWN</span>
            <ArrowRight className="w-4 h-4 ml-2 inline" />
          </div>
        </div>
      </header>

     {/* Hero Section */}
<section className="px-6 md:px-8 py-12 md:py-20 min-h-screen flex flex-col">
  <div className="flex-1 flex items-center">
    <div className="max-w-7xl mx-auto w-full">
      <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
        
        {/* Left side - Main Image: 
            On mobile order 2 (second), desktop order 1 (first) */}
        <div className="flex justify-center order-2 md:order-1">
         <img
            src={hd8}
            alt="Description"
            className="w-full max-w-lg h-auto"
            />

        </div>

        {/* Right side - Project Info and Title:
            On mobile, use flex-col with items-end 
            Show title first, then info text below on mobile.
            But info absolutely positioned top-right on desktop */}
        <div className="relative min-h-[200px] h-full order-1 md:order-1 flex flex-col justify-start md:justify-center items-end">
          {/* Title - show first on mobile, below info on desktop because info is absolute */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none whitespace-wrap text-center mt-0 md:mt-40 pr-4 order-1 md:order-none">
            Heart Disease Predictor
          </h1>

          </div>

      </div>
    </div>
  </div>
</section>

      {/* About Section */}
      <section className="px-6 md:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-end mb-8">
            <div className="flex items-center space-x-4">
              <h2 className="text-3xl font-bold">about.</h2>
              <span className="text-sm text-gray-500">See It Live</span>
            </div>
          </div>

          <div className="mb-16">
            <p
  className="text-gray-800 leading-relaxed max-w-4xl text-left text-lg
             lg:ml-[40%] ml-0"
>

                      The Heart Disease Predictor is a machine learning application designed to assess the risk of heart disease based on user health data inputs. It leverages a variety of models, including classical ML algorithms and deep learning approaches, to provide dynamic and accurate predictions. The tool aims to empower users and healthcare professionals with quick, data-driven insights to support early diagnosis and preventive care.

            </p>
          </div>

          <div className="mb-12">
            <img
              src={hd7}
              alt="Floating stones arrangement in various sizes and colors"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <img
              src={hd1}
              alt="Frontal view of sculptural head with floating stones"
              className="w-full aspect-square object-cover rounded-lg"
            />
            <img
              src={hd2}
              alt="Profile view of sculptural head with cascading stones"
              className="w-full aspect-square object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="px-6 md:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">challenge.</h2>
            <p
  className="text-gray-600 leading-relaxed max-w-3xl text-lg
             lg:ml-[40%] ml-0"
            >
                      One major challenge was handling the imbalanced dataset common in medical diagnosis, which required careful preprocessing and techniques like SMOTE to avoid biased predictions. Additionally, feature selection and hyperparameter tuning were critical to optimize model accuracy. Ensuring the model’s interpretability while maintaining performance was also essential to build user trust.

            </p>
          </div>

          
        </div>
      </section>

      {/* Results Section */}
      <section className="px-6 md:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">results.</h2>
            <p
  className="text-gray-600 leading-relaxed max-w-3xl text-lg lg:ml-[40%] ml-0"
>

                      The Heart Disease Predictor achieved an accuracy of around 85-90% using classical machine learning models such as logistic regression, random forest, and support vector machines. These models provided reliable and interpretable predictions suitable for clinical insights. The application was successfully deployed with a Flask backend and a user-friendly interface, enabling dynamic risk assessment based on user input.

            </p>
          </div>

          
        </div>
      </section>

      {/* More to Explore Section */}
      <section className="px-6 md:px-8 py-16">
  <div className="max-w-6xl mx-auto">
    <div className="flex justify-center items-center gap-6 mb-12">
      <h2 className="text-2xl font-bold text-center">More to explore.</h2>
      <button className="text-sm text-gray-500 hover:text-black transition-colors">
        Show More
      </button>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      {/* Website Generation Project */}
      <Link to="/websitegen" className="relative group block rounded-lg overflow-hidden">
        <img
          src={wg1}
          alt="Website Generation Project"
          className="w-full aspect-square object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
          <p className="text-white text-xl font-semibold">Website Generation using Text Prompt</p>
        </div>
      </Link>

      {/* Book Review Project */}
      <Link to="/bookreview" className="relative group block rounded-lg overflow-hidden">
        <img
          src={br6}
          alt="Book Review Sentiment Analysis"
          className="w-full aspect-square object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
          <p className="text-white text-xl font-semibold">Book Review: Sentiment Analysis</p>
        </div>
      </Link>
    </div>
  </div>
</section>

    </div>
  );
}
