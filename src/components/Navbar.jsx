import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import legumlogo from "../assets/legumlogo.png";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/register");
    setMenuOpen(false); // Close menu on navigation
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);

      // Auto-close dropdown only if it's open when scrolling
      if (scrolled && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-lg text-black shadow-md" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-8xl mx-auto px-3 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="w-[150px]">
          <img src={legumlogo} alt="logo" />
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-4xl mx-5"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex space-x-6 font-medium">
          {["home", "Content", "expertise", "litigation", "team", "blog", "contact"].map((section) => (
            <li key={section} className="hover:text-blue-600 cursor-pointer">
              <Link to={section} smooth={true} duration={500}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={handleClick}
              className="bg-blue-600  text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown — Show only if menuOpen is true */}
      {menuOpen && (
        <div
          className={`lg:hidden px-4 pb-4 transition-all duration-300 ease-in-out transform origin-top ${
            menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
          }`}
        >
          <ul
            className={`flex flex-col space-y-3 font-medium p-4 rounded shadow-md ${
              isScrolled ? "bg-white text-black" : "bg-black/80 text-white"
            }`}
          >
            {["home", "Content", "expertise", "litigation", "team", "blog", "contact"].map((section) => (
              <li key={section} className="hover:text-blue-600 cursor-pointer">
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  onClick={() => setMenuOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={handleClick}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition w-full"
              >
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
