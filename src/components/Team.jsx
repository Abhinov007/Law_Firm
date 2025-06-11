import React from "react";
import TeamList from "../TeamList";
import TeamCard from "./TeamCard";
import ContactUs from "./ContactUs";

const Team = () => {
  return (
    <div className="relative w-full" id="team">
      {/* Background split into two halves */}
      <div className="absolute inset-0 flex flex-col">
        <div className="h-3/5 bg-white"></div>
        <div className="h-2/5 bg-gray-400"></div>
      </div>

      {/* Foreground content */}
      <div className="relative  z-10 flex flex-col justify-center lg:mt-20 px-4 lg:px-20">
        
        {/* Title */}
        <h2 className="text-3xl lg:text-5xl font-bold text-center text-gray-800 mb-10 mt-6">
          THE TEAM
        </h2>

        {/* Cards Grid */}
        <div className="flex flex-row justify-center gap-">
          {TeamList.map((e) => (
            <TeamCard key={e.id} name={e.name} />
          ))}
        </div>

        {/* Contact Section */}
        <div className="mx-auto mb-5 mt-20">
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default Team;
