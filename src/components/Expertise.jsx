import React from 'react'
import Hexagon from './Hexagon'
import List from '../H_List'
import ContactUs from './ContactUs'

const Expertise = () => {
  return (
    <div className='flex flex-col justify-items-center bg-slate-500' id='expertise'>
    <div className='flex flex-col px-25 lg:flex-row flex-wrap md:justify-center md:flex md:flex-wrap py-6  '>

      <div className='flex m-auto flex-col justify-center gap-1 p-2'>
        <div className=' w-50 h-56 flex flex-col justify-center gap-1'>
       <div className=' h-6'>
       <h1 className="text-white mx-10 text text-xs ">CRIMINAL LITIGATION</h1>
       </div>  
        <div className=" w-36 h-40 flex items-center justify-center shadow-lg text-lg font-bold bg-white m-auto my-0.5"
        style={{
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
          >
          </div>
            </div>
            </div>

            <div className='flex m-auto flex-col justify-center gap-1 p-2'>
        <div className=' w-50 h-56 flex flex-col justify-center gap-1'>
       <div className=' h-6'>
       <h1 className="text-white ml-13 text text-xs ">CIVIL LITIGATIONS</h1>
       </div>  
        <div className=" w-36 h-40 flex items-center justify-center shadow-lg text-lg font-bold bg-white m-auto my-0.5"
        style={{
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
          >
          </div>
            </div>
            </div>

            <div className='flex m-auto flex-col justify-center gap-1 p-2'>
        <div className=' w-50 h-56 flex flex-col justify-center gap-1'>
       <div className=' h-6'>
       <h1 className="text-white ml-12 text text-xs ">ACCIDENTAL CLAIMS</h1>
       </div>  
        <div className=" w-36 h-40 flex items-center justify-center shadow-lg text-lg font-bold bg-white m-auto my-0.5"
        style={{
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
          >
          </div>
            </div>
            </div>

            <div className='flex m-auto flex-col justify-center gap-1 p-2'>
        <div className=' w-50 h-56 flex flex-col justify-center gap-1'>
       <div className=' h-6'>
       <h1 className="text-white ml-9.5 text text-xs ">CONSTITUTIONAL LAW</h1>
       </div>  
        <div className=" w-36 h-40 flex items-center justify-center shadow-lg text-lg font-bold bg-white m-auto my-0.5"
        style={{
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
          >
          </div>
            </div>
            </div>

            <div className='flex m-auto flex-col justify-center gap-1 p-2'>
        <div className=' w-50 h-56 flex flex-col justify-center gap-1'>
       <div className=' h-6'>
       <h1 className="text-white ml-4.5  text text-xs ">EMPLOYMENT & LABOUR LAW</h1>
       </div>  
        <div className=" w-36 h-40 flex items-center justify-center shadow-lg text-lg font-bold bg-white m-auto my-0.5"
        style={{
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
          >
          </div>
            </div>
            </div>

            <div className='flex m-auto flex-col justify-center gap-1 p-2'>
        <div className=' w-50 h-56 flex flex-col justify-center gap-1'>
       <div className=''>
       <h1 className="text-white mx-15.5 text text-xs ">ARMY CASES</h1>
       </div>  
        <div className=" w-36 h-40 shadow-xl bg-white m-auto my-0.5"
        style={{
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          filter: "drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5))"
          }}
          >
          </div>
            </div>
            </div>

    
   {/* {List.map((e) => (
      <Hexagon key={e.id} name={e.name} />
      ))}
      </div>
      <div className='mx-auto p-3'>
      <ContactUs /> */} 
      </div>
      </div>
  )
}

export default Expertise