import React from 'react';

const ContactUs = () => {
  const handleContactClick = () => {
    const footerSection = document.getElementById("contact");
    if (footerSection) {
      footerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className='bg-deepblue w-30 h-8 hover:cursor'
      style={{
        clipPath: 'polygon(0% 0%, 100% 0, 100% 65%, 90% 100%, 0% 100%)',
      }}
    >
      <button
        className='text-sm pt-1 px-4 text-white hover:cursor-pointer'
        onClick={handleContactClick}
      >
        CONTACT US
      </button>
    </div>
  );
};

export default ContactUs;
