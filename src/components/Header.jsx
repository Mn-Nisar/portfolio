"use client";

import { Link } from "react-router-dom";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="container mx-auto py-6 px-4">
      <nav className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex w-full md:w-auto justify-between items-center">
          <div className="text-xl font-bold tracking-tight">Mahammad Nisar</div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row w-full md:w-auto items-center gap-6`}
        >
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#expertise" className="hover:underline">
            Expertise
          </a>
          <a href="#research" className="hover:underline">
            Projects
          </a>
          <a href="#publications" className="hover:underline">
            Publications
          </a>
          <a href="#experience" className="hover:underline">
            Experience
          </a>
          <Link to="/blog" className="hover:underline">
            Blog
          </Link>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
