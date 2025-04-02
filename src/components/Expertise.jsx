import React from 'react'
import Hexagon from './Hexagon'
import List from '../H_List'

const Expertise = () => {
  return (
    <div className='w-full pl-[150px] h-[543px] flex justify-evenly gap-8  bg-slate-400 p-[230px]'>
    
      {List.map((e) => (
        <Hexagon key={e.id} name={e.name} />
      ))}
    </div>
  )
}

export default Expertise