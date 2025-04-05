import React from 'react'

const Contact = () => {
  return (
    <div className='bg-slate-500 h-[400px] flex justify-center'>
        <div className='w-1/3 pl-8  flex flex-col justify-center px-20 '>
        <span className='text-white text-2xl'>LEGUM CONSULTANTS</span>
        <span className='text-white '>413, Saket District Court,
        New Delhi</span>
        </div>
        <div className='w-2/3  bg-slate-500 flex flex-col justify-center'>
        <div className='ml-25 flex flex-col '>
        <span className='text-white '>Call Us   8802888820</span>
        <br />
        <span className='text-white'> Email: asitroyadvocate@gmail.com</span>
        </div>
        <div className="w-full mx-auto p-6  ">
  <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {/* Name */}
    <div className='flex'>
      
      <input
        type="text"
        placeholder="Enter your name"
        className="w-full px-4 py-2 border-b border-white  focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    {/* Email */}
    <div>
      
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full px-4 py-2 border-b border-white  focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    {/* Phone */}
    <div>
      
      <input
        type="tel"
        placeholder="Enter your phone number"
        className="w-full px-4 py-2 border-b border-white  focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    {/* Description */}
    <div>
      
      <input
        type="text"
        placeholder="Describe your query"
        className="w-full px-4 py-2 border-b border-white  focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  </form>
</div>

        </div>
    </div>
  )
}

export default Contact