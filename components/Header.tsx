"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaChartLine,
  FaExclamationTriangle,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <header
      className={`bg-white shadow-md fixed w-full z-10 transition duration-300 ${
        isScrolled ? "bg-gray-100" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-3xl font-bold text-blue-600 hover:text-blue-700 transition duration-200"
        >
          PROCOG
        </Link>

        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        <nav
          className={`md:block ${
            isOpen ? "block" : "hidden"
          } transition-all duration-300 ease-in-out`}
        >
          <ul
            className={`flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 
                          ${
                            isOpen
                              ? "absolute top-full left-0 right-0 bg-white shadow-md mt-2 p-4"
                              : ""
                          } 
                          md:static md:bg-transparent md:shadow-none`}
          >
            <li>
              <Link
                href="/dashboard"
                className="flex items-center text-gray-800 hover:text-blue-600 transition duration-200 p-2 rounded-md"
              >
                <FaChartLine className="mr-2 text-xl" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/risks"
                className="flex items-center text-gray-800 hover:text-blue-600 transition duration-200 p-2 rounded-md"
              >
                <FaExclamationTriangle className="mr-2 text-xl" />
                Risks
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="flex items-center text-gray-800 hover:text-blue-600 transition duration-200 p-2 rounded-md"
              >
                <FaSignInAlt className="mr-2 text-xl" />
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/register"
                className="flex items-center text-gray-800 hover:text-blue-600 transition duration-200 p-2 rounded-md"
              >
                <FaUserPlus className="mr-2 text-xl" />
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
