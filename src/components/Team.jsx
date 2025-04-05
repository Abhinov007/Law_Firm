import React from "react";
import TeamList from "../TeamList";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <div className="relative h-[600px] w-full">
    
    <div className="absolute top-0 left-0 w-full h-full flex flex-col">
      
      <div className="w-full h-1/2 bg-white"></div>
      
      <div className="w-full h-1/2 bg-slate-500"></div>
    </div>

    
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-auto border-black rounded-lg flex gap-5 items-center justify-center">
   
   
    {TeamList.map((e) => (
      <TeamCard key={e.id} name={e.name} />


    ))}
      
    </div>
  </div>
  );
};

export default Team;
