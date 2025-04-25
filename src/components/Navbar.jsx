
import React, { useState,useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import legumlogo from "../assets/legumlogo.png";
import { Link, Element } from 'react-scroll';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled]= useState(false);
   
  useEffect(()=>{
    const handleScroll=()=>{
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[]);

  return (
    <nav className={`${isScrolled ? "backdrop-blur-lg " : "bg-transparent"} 
      ${isScrolled ? "text-black " : "text-white"}
      shadow-md  fixed w-full top-0 z-50`}>
      <div className="max-w-8xl mx-auto px-3 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="w-[150px]">
        <img src={legumlogo} alt="" />
        </div>

        {/* Hamburger icon - only on small screens */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-4xl mx-5 text-white">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Navbar items - hidden on mobile, shown on desktop */}
        <ul className={`${isScrolled ? " text-white" : "text-white"}"hidden lg:flex space-x-6 font-medium"`}>
          <li className="hover:text-blue-600 cursor-pointer">
          <Link to="home" smooth={true} duration={500}>Home</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
          <Link to="Content" smooth={true} duration={500}>About</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
          <Link to="expertise" smooth={true} duration={500}>Expertise</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
          <Link to="litigation" smooth={true} duration={500}>Services</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
          <Link to="team" smooth={true} duration={500}>Team</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
          <Link to="blog" smooth={true} duration={500}>Blog</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
          </li>
        </ul>
      </div>

      {/* Mobile dropdown menu - shown only when menuOpen is true */}
      {menuOpen && (
        <div className="lg:hidden px-4 pb-4">
          <ul className={`"flex flex-col space-y-3 bg-white text-black font-medium"`}>
            <li className="hover:text-blue-600 cursor-pointer">
            <Link to="home" smooth={true} duration={500}>Home</Link>
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
            <Link to="Content" smooth={true} duration={500}>About</Link>
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
          <Link to="expertise" smooth={true} duration={500}>Expertise</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
          <Link to="litigation" smooth={true} duration={500}>Services</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
          <Link to="team" smooth={true} duration={500}>Team</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
          <Link to="blog" smooth={true} duration={500}>Blog</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
          </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


