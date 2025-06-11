import React from "react";
import lawyer_pic from '../assets/lawyer_pic.png'

const TeamCard = ({ name }) => {
  return (
    
    
    <div className=" shadow-2xl m-10 p-3 w-[265px] bg-white   h-[339px] drop-shadow-lg ">
    <img className="translate-x-8 -translate-y-10 w-max-auto" src={lawyer_pic} alt="image" />
    <h1 className=" px-7  -translate-y-8 text-wrap text-1xl text-deepblue border-black"><b>Mr Asit Kumar Roy Advocate </b></h1>
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