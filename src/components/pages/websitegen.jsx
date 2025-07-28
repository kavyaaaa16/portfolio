import React from "react";
import { Link } from "react-router-dom";

import { ArrowRight } from "lucide-react";
import wg from "/src/assets/wg/wg.jpeg";
import wg7 from "/src/assets/wg/wg7.jpeg";
import wg6 from "/src/assets/wg/wg6.jpeg";
import wg5 from "/src/assets/wg/wg5.jpeg";
import br6 from "/src/assets/br/br6.jpeg";
import ai1 from "/src/assets/ai/ai1.jpeg";



export default function WebsiteGeneration() {
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
            src={wg}
            alt="Description"
            className="w-full max-w-lg h-auto"
            />

        </div>
        <div className="relative min-h-[200px] h-full order-1 md:order-1 flex flex-col justify-start md:justify-center items-end">
          {/* Title - show first on mobile, below info on desktop because info is absolute */}
          <h1 className="text-6xl md:text-7xl lg:text-7xl font-bold tracking-tight leading-none whitespace-wrap text-center mt-0 md:mt-40 pr-4 order-1 md:order-none">
            Website Generation using Text Prompt
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

        This project enables users to generate fully functional websites by simply describing their idea in natural language. I designed and built a platform that integrates OpenAI’s GPT-3 (text-davinci-003) for semantic-to-code translation and DALL·E for image generation. We created a library of 15 custom frontend templates using pure HTML, CSS, and JavaScript that adapt dynamically to user inputs. Users can input a prompt like “a portfolio site for a photographer,” and the system generates complete site content, structure, and visuals in real-time.

            </p>
          </div>

          <div className="mb-12">
            <img
              src={wg7}
              alt="Floating stones arrangement in various sizes and colors"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <img
              src={wg6}
              alt="Frontal view of sculptural head with floating stones"
              className="w-full aspect-square object-cover rounded-lg"
            />
            <img
              src={wg5}
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
        A major challenge was dynamically aligning GPT-generated content with handcrafted HTML/CSS/JS templates. I implemented a token-to-block mapping strategy to classify intent (e.g., “contact form”, “gallery”) and match them to template modules. Handling vague prompts, optimizing for mobile responsiveness, and generating relevant, aesthetic images via DALL·E also required fine-tuning the input engineering. Real-time rendering and maintaining code modularity across 15 templates added complexity from both a UX and system architecture standpoint.

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

        The platform successfully generated over 100+ unique websites from natural language prompts. GPT-3 was used to generate copy for landing pages, headings, CTAs, and descriptions, while DALL·E produced context-relevant hero and section images. The 15 responsive templates ensured performance across devices, and users could preview, edit, or export their sites directly. This project demonstrates my ability to combine generative AI with frontend engineering to build practical AI products at scale.

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
      {/* Ai Tutor */}
      <Link to="/aitutor" className="relative group block rounded-lg overflow-hidden">
        <img
          src={ai1}
          alt="Website Generation Project"
          className="w-full aspect-square object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
          <p className="text-white text-xl font-semibold">Cambot: AI Tutor</p>
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
