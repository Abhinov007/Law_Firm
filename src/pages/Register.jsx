import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Register = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        role:""
      });
      const [message, setMessage] = useState("");
      
    
    const navigate = useNavigate()

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post("http://localhost:5002/api/auth/register", form);
          localStorage.setItem("token", res.data.token); 
          setMessage("Signup successful!");
          if(res.status===201){
            navigate('/dashboard');
          }

        } catch (err) {
          console.error(err);
          setMessage("Signup failed: " + (err.response?.data?.message || "Unknown error"));
        }
      };
     
    
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='shadow-lg px-8 py-5 border w-72'>
            <h2 className='text-lg font-bold mb-4'>Register</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full px-4 py-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full px-4 py-2 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full px-4 py-2 border rounded"
          required
        />
        <input
          type="text"
          name="role"
          value={form.role}
          onChange={handleChange}
          placeholder="role"
          className="w-full px-4 py-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Sign Up
        </button>
      </form>
            <div className="text-center">
                <span>Already have account?</span>
                <Link to='/login' className='text-blue-500'>Login</Link>
            </div>
        </div>
    </div>
  )
}

export default Register