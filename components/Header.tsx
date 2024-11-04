"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useAuthStore } from "@/store/Auth"; // Importing the auth store
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

export default function Header() {
  const { session, logout } = useAuthStore(); // Access session from the auth store
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
      className={`backdrop-blur-md bg-white/80 fixed w-full top-0 z-10 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent hover:from-blue-700 hover:to-blue-900 transition duration-300"
          >
            PROCOG
          </Link>

          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors duration-200 focus:outline-none"
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
              className={`flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-2
                ${
                  isOpen
                    ? "absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl mt-2 p-6 border-t border-gray-100"
                    : ""
                } 
                md:static md:bg-transparent md:shadow-none md:border-none`}
            >
              {!session && (
                <>
                  <li>
                    <Link
                      href="/login"
                      className="flex items-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 px-4 py-2 rounded-lg text-sm font-medium"
                    >
                      <FaSignInAlt className="mr-2 text-lg" />
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/register"
                      className="flex items-center text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:shadow-md"
                    >
                      <FaUserPlus className="mr-2 text-lg" />
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
              {session && (
                <>
                  <li>
                    <Link
                      href={`/profile/${session.userId}`}
                      className="flex items-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 px-4 py-2 rounded-lg text-sm font-medium"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      onClick={() => logout()}
                      className="flex items-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 px-4 py-2 rounded-lg text-sm font-medium"
                    >
                      Logout
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
