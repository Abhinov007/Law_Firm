import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5002/api/auth/login', values);

      if (response.status === 200) {
        const { token, role } = response.data;

        localStorage.setItem('token', token);
        localStorage.setItem('role', role); // Optional: Store role for later use

        // Route based on role
        if (role === 'admin') {
          navigate('/admin-dashboard');
        } else if (role === 'lawyer') {
          navigate('/lawyer-dashboard');
        } else {
          navigate('/dashboard'); // Default route if needed
        }
      } else {
        console.log("Unexpected status:", response.status);
      }
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='shadow-lg px-8 py-5 border w-72'>
        <h2 className='text-lg font-bold mb-4'>Login</h2>
        <form onSubmit={handleSumbit}>
          <div className="mb-4">
            <label htmlFor="email" className='block text-gray-700'>Email</label>
            <input
              type="email"
              placeholder='Enter Email'
              className='w-full px-3 py-2 border'
              name="email"
              onChange={handleChanges}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className='block text-gray-700'>Password</label>
            <input
              type="password"
              placeholder='Enter Password'
              className='w-full px-3 py-2 border'
              name="password"
              onChange={handleChanges}
              required
            />
          </div>
          <button className="w-full bg-green-600 text-white py-2">Submit</button>
        </form>
        <div className="text-center mt-2">
          <span>Don't have an account? </span>
          <Link to='/register' className='text-blue-500'>Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
