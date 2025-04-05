import React from 'react'
import ContactUs from './ContactUs'
import BlogCard from './BlogCard'

const Blogs = () => {
  return (
<div className=' container w-[1000px] my-10 m-auto py-5 px-30 h-[500px] bg-white  shadow-lg  grid grid-cols-3 gap-4'>
      <div className=' col-span-3 flex justify-between px-4 py-0.5 border-b shadow-lg '> 
       <div className=''>MEDIA</div>
       <div className=' '>
       <ContactUs></ContactUs>
       </div>
      </div>
      <div className=' col-span-1 row-span-2 p-2 rounded-sm shadow-lg'>
      <BlogCard />
      </div>
      <div className=' w-61 h-48 rounded-sm shadow-lg'>
      </div>
      <div className=' w-61 h-48 rounded-sm shadow-lg'></div>
      <div className=' w-61 h-48 rounded-sm shadow-lg'>5</div>
      <div className=' w-61 h-48 rounded-sm shadow-lg'>6</div>
      
</div>

  )
}

export default Blogs