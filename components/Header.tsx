"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaChartLine,
  FaExclamationTriangle,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-3xl font-bold text-blue-600 hover:text-blue-700 transition duration-200"
        >
          PROCOG
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <nav
          className={`md:block ${
            isOpen ? "block" : "hidden"
          } transition-all duration-300`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <li>
              <Link
                href="/dashboard"
                className="flex items-center text-gray-800 hover:text-blue-600 transition duration-200"
              >
                <FaChartLine className="mr-2 text-xl" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/risks"
                className="flex items-center text-gray-800 hover:text-blue-600 transition duration-200"
              >
                <FaExclamationTriangle className="mr-2 text-xl" />
                Risks
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="flex items-center text-gray-800 hover:text-blue-600 transition duration-200"
              >
                <FaSignInAlt className="mr-2 text-xl" />
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/register"
                className="flex items-center bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-200"
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
