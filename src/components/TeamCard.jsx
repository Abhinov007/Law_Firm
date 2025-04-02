import React from "react";

const TeamCard = ({ name }) => {
  return (
    <div className=" bg-white m-5 w-[250px] h-[350px] drop-shadow-lg ">
    <img className="translate-x-8 -translate-y-6" src={name} alt="image" />
    <h1 className=" px-7 -translate-y-5 text-wrap text-1xl text-blue-400 border-black">Mr Asit Kumar Roy Advocate </h1>
    </div>
  );
};
/*<div className="absolute bottom-0 left-0 w-1/5 h-4/5  -translate-0 flex items-end px-5 py-8">
<h1>hello</h1>
</div>


<div className="absolute bg-red-500 top-0 right-0 w-4/5 h-4/5  -translate-x-0">
<img className="" src={name} alt="image" />
</div>*/

export default TeamCard;
