import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const expertiseData = [
  { title: "CRIMINAL LITIGATION" },
  { title: "CIVIL LITIGATIONS" },
  { title: "ACCIDENTAL CLAIMS" },
  { title: "CONSTITUTIONAL LAW" },
  { title: "EMPLOYMENT & LABOUR LAW" },
  { title: "ARMY CASES" },
];

const Expertise = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 6, // Adjust for responsiveness
    slidesToScroll: 1,
    autoplay: true,             // ← auto scroll enabled
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='bg-slate-500 py-10 px-4' id='expertise'>
      <h2 className="text-white text-3xl font-bold text-center mb-8">Our Expertise</h2>
      <Slider {...settings}>
        {expertiseData.map((item, index) => (
          <div key={index} className="px-4">
            <div className='flex flex-col items-center gap-2'>
              <h3 className="text-white text-sm text-center">{item.title}</h3>
              <div
                className="w-36 h-40 bg-white shadow-xl"
                style={{
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  filter: "drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5))",
                }}
              ></div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Expertise;
