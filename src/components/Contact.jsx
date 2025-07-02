import React, { useState } from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'
import { SocialIcon } from 'react-social-icons'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import 'primeicons/primeicons.css';
        




const Contact = () => {

  const [inputs, setInputs] = useState({});
   
   

   const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5002/api/cases/submit', inputs);
      console.log('Server response:', response.data);
      alert('Form submitted successfully!');
    } catch (error) {
      if (error.response) {
        // Server responded with a status code outside 2xx
        console.log('Response error:', error.response.data);
      } else if (error.request) {
        // Request was made, no response received
        console.log('No response:', error.request);
      } else {
        // Something else went wrong
        console.log('Error', error.message);
      }
    }
  }
   const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }

  return (
    <div className='bg-slate-500 md:flex md:flex-row lg:  w-screen h-[400px] flex flex-col justify-center' id='contact'>
        <div className='w-auto mt-25 md:w-1/3 pl-12  flex flex-col justify-center px-20 '>
        <span className='text-white text-2xl'>LEGUM CONSULTANTS</span>
        <br />
        <div className='flex flex-row justify-cennter gap-8'>
<div className='flex flex-row justify-center gap-8 text-white text-xl'>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </a>
  <a href="https://www.linkedin.com/in" target="_blank" rel="noopener noreferrer">
    <FaLinkedin />
  </a>
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <FaFacebookF />
  </a>
</div>

        </div>

        </div>
        <div className='w-auto md:w-2/3  bg-slate-500 flex flex-col justify-center'>
        <div className='ml-25 flex flex-col '>
        <span className='text-white '>Call Us   8802888820</span>
        <br />
        <span className='text-white'> Email: asitroyadvocate@gmail.com</span>
        <br />

        </div>
        <div className="w-full mx-auto p-6  ">
  <form  className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {/* Name */}
    <div className='flex'>
      
      <input 
      type="text"
          name="name"
          value={inputs.name || ""}
          onChange={handleChange}
        placeholder="Enter your name"
        className="w-full px-4 py-2 border-b border-white  focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    {/* Email */}
    <div>
      
      <input
      type="email"
      name="email"
      value={inputs.email || ""}
      onChange={handleChange}
        placeholder="Enter your email"
        className="w-full px-4 py-2 border-b border-white  focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    {/* Phone */}
    <div>
      <input
      type="tel"
          name="phone"
          value={inputs.phone || ""}
          onChange={handleChange}
        placeholder="Enter your phone number"
        className="w-full px-4 py-2 border-b border-white  focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
    <button
    onClick={handleSubmit}
    className='bg-black text-white p-1 m-1'> Submit</button>
  
  </form>
</div>

        </div>
    </div>
  )
}

export default Contact