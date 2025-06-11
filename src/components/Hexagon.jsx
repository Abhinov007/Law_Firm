import React from 'react'


const Hexagon = (props) => {
  return (
    <div className='flex m-auto flex-col justify-center gap-1 p-2'>
        <div className='bg-green-500 w-50 h-56 flex flex-col justify-center gap-1'>
       <div className='bg-red-700 h-6'>
       <h1 className="text-white mx-10 text text-xs ">{props.name}</h1>
       </div>  
        <div className=" w-36 h-40 flex items-center justify-center shadow-lg text-lg font-bold bg-white m-auto my-0.5"
        style={{
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
          >
          </div>
            </div>
            </div>
  )
}

export default Hexagon