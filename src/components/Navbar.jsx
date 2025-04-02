
import React, { useState,useEffect } from 'react'
import legumlogo from '../assets/legumlogo.png'

const Navbar = () => {

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
    <nav className={`  z-50 fixed top-0 w-full ${
        isScrolled ? "backdrop-blur-lg " : "bg-transparent"} `}>
      <div className="container bg mx-auto flex items-center justify-between px-4 py-2">
       
        <div className="flex items-center space-x-2">
          <img
            src={legumlogo}
            alt=""
            className="w-auto h-16"
          />
          
        </div>


       
        <div className="flex items-center space-x-4">
          <button className={`${isScrolled ? "px-4 py-2 text-sm font-medium text-black" :"px-4 py-2 text-sm font-medium text-white"}`}>
            Log In
          </button>
          <button className={`${isScrolled ? "px-4 py-2 text-sm font-medium text-black" :"px-4 py-2 text-sm font-medium text-white"}`}>
            Log In
          </button>
          <button className={`${isScrolled ? "px-4 py-2 text-sm font-medium text-black" :"px-4 py-2 text-sm font-medium text-white"}`}>
            Log In
          </button>
          <button className={`${isScrolled ? "px-4 py-2 text-sm font-medium text-black" :"px-4 py-2 text-sm font-medium text-white"}`}>
            Log In
            </button>
            <button className={`${isScrolled ? "px-4 py-2 text-sm font-medium text-black" :"px-4 py-2 text-sm font-medium text-white"}`}>
            Log In
          </button>
          <button className={`${isScrolled ? "px-4 py-2 text-sm font-medium text-black" :"px-4 py-2 text-sm font-medium text-white"}`}>
            Log In
          </button>
          <button className={`${isScrolled ? "px-4 py-2 text-sm font-medium text-black" :"px-4 py-2 text-sm font-medium text-white"}`}>
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar


