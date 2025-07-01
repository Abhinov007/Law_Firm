import React from "react";
import Slider from "react-slick";
import TeamList from "../TeamList";
import TeamCard from "./TeamCard";
import ContactUs from "./ContactUs";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Team = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Shows 3 cards per slide
    slidesToScroll: 1,
    autoplay: true,             // ← auto scroll enabled
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="relative w-full overflow-hidden py-10" id="team">
      {/* Background split into two halves */}
      <div className="absolute inset-0 flex flex-col">
        <div className="h-3/5 bg-white"></div>
        <div className="h-2/5 bg-gray-400"></div>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col justify-center px-4 lg:px-20">
        {/* Title */}
        <h2 className="text-3xl lg:text-5xl font-bold text-center text-gray-800 mb-10 mt-6">
          THE TEAM
        </h2>

        {/* Carousel */}
        <div className="w-full  p-5 gap-5 mx-auto">
          <Slider {...settings}>
            {TeamList.map((e) => (
              <div key={e.id} className="px-3">
               <div className="flex justify-center">
            <TeamCard name={e.name} image={e.image} />
           </div>
           </div>
           ))}
          </Slider>

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
