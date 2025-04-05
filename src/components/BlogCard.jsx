import React from 'react'
import BlogPic from '../assets/BlogPic.png';

const BlogCard = () => {
  return (
    <div className='flex flex-col'>
    <img src={BlogPic} alt="image" />
    <h1>Heading</h1>
    <span className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur voluptatibus eos minima quam, vel cumque itaque unde nesciunt veritatis sapiente recusandae consectetur, odit, suscipit dolor deleniti placeat nihil quia. Inventore!</span>
    </div>
  )
}

export default BlogCard