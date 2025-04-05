import React from 'react'


const Hexagon = (props) => {
  return (
    <div className='flex flex-col justify-center'>
        
            <h1 className="text-white text text-sm px-4">{props.name}</h1>
        
            <div className="relative w-24 h-40 flex items-center justify-center shadow-lg text-lg font-bold bg-white p-12 m-5"
            style={{
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          >
            </div>
            </div>
  )
}

export default Hexagon