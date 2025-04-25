import React from "react";
import TeamList from "../TeamList";
import TeamCard from "./TeamCard";
import ContactUs from "./ContactUs";

const Team = () => {
  return (
    <div className="flex flex-col justify-center" id="team">
    
    <div className="z-10 px-13 flex flex-col md:flex md:flex-row md:flex-wrap lg:flex lg:flex-row  md:px-10  ">
    
    {TeamList.map((e) => (
      <TeamCard key={e.id} name={e.name} />
      
      
      ))}
      
      </div>
      <div className="mx-auto">
      <ContactUs />
      </div>
      </div>
  );
};

export default Team;
