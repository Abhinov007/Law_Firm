import React from 'react'

const TeamCard = ({ name, image }) => {
  return (
    <div className="shadow-2xl p-3 w-[265px] bg-white h-[339px] drop-shadow-lg">
      <img className="translate-x-8 -translate-y-10 w-max-auto" src={image} alt="lawyer" />
      <h1 className="px-7 -translate-y-8 text-wrap text-1xl text-deepblue border-black">
        <b>{name}</b>
      </h1>
    </div>
  );
};

export default TeamCard;
