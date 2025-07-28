import { Link } from "react-router-dom";

import Book from "../assets/br/br6.jpeg";
import Tutor from "../assets/ai/ai1.jpeg";
import Heart from "../assets/hd/hd1.jpeg";
import Web from "../assets/wg/wg1.jpeg";

const projects = [
  { id: 1, image: Book, route: "/bookreview", title: "Book Review Sentiment Analysis" },
  { id: 2, image: Tutor, route: "/aitutor", title: "Agentic AI Tutor" },
  { id: 3, image: Heart, route: "/heartdisease", title: "Heart Disease Prediction" },
  { id: 4, image: Web, route: "/websitegen", title: "Website Generation" },
];

export default function WorkSection() {
  return (
    <section id="projects" className="min-h-screen bg-white px-6 py-8 md:px-12 lg:px-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-16">
        <h1 className="text-xl lg:text-3xl font-normal text-black">work.</h1>
        <button className="bg-gray-100 px-4 py-2 text-sm rounded-md hover:bg-gray-200 transition">
          Show More
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={project.route}
              className="relative aspect-square overflow-hidden rounded-lg shadow-sm hover:shadow-md transition block group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center">
                <p className="text-white text-lg font-semibold px-4 text-center">{project.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
