import React from 'react'
import Hexagon from './Hexagon'
import List from '../H_List'
import ContactUs from './ContactUs'

const Expertise = () => {
  return (
    <div className='flex flex-col justify-items-center bg-slate-500' id='expertise'>
    <div className='flex flex-col px-25 lg:flex-row flex-wrap md:justify-center md:flex md:flex-wrap py-6  '>
    
    {List.map((e) => (
      <Hexagon key={e.id} name={e.name} />
      ))}
      </div>
      <div className='mx-auto p-3'>
      <ContactUs />
      </div>
      </div>
  )
}

export default Expertise