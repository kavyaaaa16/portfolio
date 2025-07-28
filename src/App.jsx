import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import ScrollToSection from "./components/ScrollToSection"; // updated
import SplashScreen from "./components/SplashScreen";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ChatbotButton from "./components/ChatbotButton";

import BookReview from "./components/pages/bookreview";
import WebsiteGeneration from "./components/pages/websitegen"; 
import AITutor from "./components/pages/aitutor";
import HeartDisease from "./components/pages/heartdisease";

function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-8 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p>+1 213-301-2891</p>
          <p>kavyasharma@gmail.com</p>
        </div>
        <div>
          <a
  href="/KavyaSharma_DS.pdf"
  download="KavyaSharma_DS.pdf"
  type="application/pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition cursor-pointer"
>
  Download Resume
</a>

        </div>
        <div className="text-sm">
          <p>All rights reserved,</p>
          <p>Kavya Sharma ©2025</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <>
      <ScrollToSection /> {/* <-- use this for smooth scrolling on hash change */}
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Projects />
                </>
              }
            />
            <Route path="/bookreview" element={<BookReview />} />
            <Route path="/websitegen" element={<WebsiteGeneration />} />
            <Route path="/heartdisease" element={<HeartDisease />} />
            <Route path="/aitutor" element={<AITutor />} />
          </Routes>
        </main>
        <Contact />
        <ChatbotButton />
        <Footer />
      </div>
    </>
  );
}
