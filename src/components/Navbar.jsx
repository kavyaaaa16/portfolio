import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 bg-white shadow-md z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">KS</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-semibold">
          <li>
            <Link to="/#hero" onClick={closeMenu} className="hover:text-purple-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/#about" onClick={closeMenu} className="hover:text-purple-600">
              About
            </Link>
          </li>
          <li>
            <Link to="/#projects" onClick={closeMenu} className="hover:text-purple-600">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/#contact" onClick={closeMenu} className="hover:text-purple-600">
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white px-6 pb-4 space-y-4 text-gray-700 font-semibold">
          <li>
            <Link to="/#hero" onClick={closeMenu} className="block hover:text-purple-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/#about" onClick={closeMenu} className="block hover:text-purple-600">
              About
            </Link>
          </li>
          <li>
            <Link to="/#projects" onClick={closeMenu} className="block hover:text-purple-600">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/#contact" onClick={closeMenu} className="block hover:text-purple-600">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
