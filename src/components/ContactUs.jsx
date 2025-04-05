import React from 'react'

const ContactUs = () => {
const Contact = () => {
    console.log("contacted");
      }

  return (
    <div className='bg-blue-300 w-22 h-7 hover:cursor'
    style={{
        clipPath: "polygon(0% 0%, 100% 0, 100% 50%, 70% 100%, 0% 100%)",
      }}>
    <button className='text-sm px-1 hover:cursor-pointer' onClick={Contact} >Contact us</button>
    </div>
  )
}

export default ContactUs