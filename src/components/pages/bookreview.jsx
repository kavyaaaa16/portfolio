import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import br1 from "/src/assets/br/br1.jpeg";
import br8 from "/src/assets/br/br8.png";
import br6 from "/src/assets/br/br6.jpeg";
import br9 from "/src/assets/br/br9.png";
import br10 from "/src/assets/br/br10.png";
import ai1 from "/src/assets/ai/ai1.jpeg";
import hd1 from "/src/assets/hd/hd1.jpeg";


 // adjust path as needed

export default function BookReview() {
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
            src={br6}
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
            Book Review: Sentiment Analysis
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

        This project involved building a full-stack sentiment analysis system for classifying book reviews from Goodreads into positive, negative, or neutral categories. I developed a pipeline that scrapes review data from Goodreads using Python (BeautifulSoup, Requests), performs preprocessing with NLTK and spaCy, and trains multiple machine learning models including logistic regression, SVM, and random forest. I also fine-tuned transformer-based models like BERT and ELECTRA using Hugging Face Transformers. The final application was deployed with a Flask backend and includes a basic frontend UI for real-time inference.

            </p>
          </div>

          <div className="mb-12">
            <img
              src={br8}
              alt="Floating stones arrangement in various sizes and colors"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <img
              src={br9}
              alt="Frontal view of sculptural head with floating stones"
              className="w-full aspect-square object-cover rounded-lg"
            />
            <img
              src={br10}
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
        A key challenge was the lack of high-quality labeled data. To address this, I implemented a hybrid weak supervision strategy using rule-based sentiment tools (TextBlob, VADER) and pre-trained Hugging Face sentiment classifiers to pseudo-label reviews. I further manually annotated 200+ samples to evaluate model performance. Another challenge was handling highly imbalanced class distribution, which I mitigated using stratified sampling and class-weighted loss functions. Model evaluation was done using F1-score and confusion matrices, ensuring robustness across all sentiment categories.

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

        The final model — ELECTRA fine-tuned on the Kindle Book Review dataset — achieved an accuracy of ~82% and significantly outperformed traditional ML baselines. The project demonstrated effective use of weak supervision, transformer fine-tuning, and real-world deployment. The system supports live sentiment prediction via a Flask API and provides interpretable outputs. This project reflects my ability to build end-to-end NLP systems and deploy them for real-world use, combining practical engineering with applied machine learning.

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
      
            {/* Heart Disease Project */}
            <Link to="/heartdisease" className="relative group block rounded-lg overflow-hidden">
              <img
                src={hd1}
                alt="Book Review Sentiment Analysis"
                className="w-full aspect-square object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white text-xl font-semibold">Heart Disease Predictor</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
