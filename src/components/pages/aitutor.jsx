import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import ai1 from "/src/assets/ai/ai1.jpeg";
import ai3 from "/src/assets/ai/ai3.jpeg";
import ai4 from "/src/assets/ai/ai4.jpeg";
import ai5 from "/src/assets/ai/ai5.jpeg";
import ai6 from "/src/assets/ai/ai6.jpeg";
import ai7 from "/src/assets/ai/ai7.jpeg";

import wg1 from "/src/assets/wg/wg1.jpeg";
import br6 from "/src/assets/br/br6.jpeg";
import hd1 from "/src/assets/hd/hd1.jpeg";



export default function AITutor() {
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
            src={ai1}
            alt="Description"
            className="w-full max-w-lg h-auto"
            />

        </div>
        <div className="relative min-h-[200px] h-full order-1 md:order-1 flex flex-col justify-start md:justify-center items-end">
          {/* Title - show first on mobile, below info on desktop because info is absolute */}
          <h1 className="text-6xl md:text-7xl lg:text-7xl font-bold tracking-tight leading-none whitespace-wrap text-center mt-0 md:mt-40 pr-4 order-1 md:order-none">
            Cambot: AI Tutor
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

        This project developed an intelligent, interactive AI Tutor agent designed to assist learners in visual subjects such as biology and anatomy. Leveraging retrieval-augmented generation (RAG), the system combines state-of-the-art object detection models with natural language processing to interpret images, extract relevant content, and answer user queries contextually. The tutor integrates pretrained computer vision models with a GPT-based language model to provide accurate, step-by-step explanations, enabling personalized and multimodal learning experiences. The frontend is built with React, while backend services manage inference pipelines and data retrieval, ensuring real-time responsiveness.

            </p>
          </div>

          <div className="mb-12">
            <img
              src={ai5}
              alt="Floating stones arrangement in various sizes and colors"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <img
              src={ai7}
              alt="Frontal view of sculptural head with floating stones"
              className="w-full aspect-square object-cover rounded-lg"
            />
            <img
              src={ai6}
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
        One major challenge was effectively combining computer vision outputs with contextual NLP to deliver coherent, educational answers. This required tight integration between the object detection pipeline and the language generation model, along with designing prompt engineering that contextualizes detected visual elements dynamically. Handling ambiguous or complex user queries while maintaining answer accuracy and pedagogical clarity was non-trivial. Additionally, optimizing latency for real-time interactions and designing a modular system architecture to support incremental knowledge updates posed engineering complexities.

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

        The Agentic AI Tutor successfully demonstrated accurate visual understanding combined with contextual tutoring across multiple subjects. It achieved over 85% accuracy in object recognition within study images and provided relevant, human-like explanations that users rated highly for clarity and usefulness. The system supports dynamic question answering, image-based reasoning, and adaptive follow-ups, showcasing my ability to build and deploy complex multimodal AI applications that enhance learning outcomes in practical scenarios.

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
