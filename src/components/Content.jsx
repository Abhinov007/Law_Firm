import React from 'react';
import watermark from "../assets/watermark.png";
import bgContent from "../assets/bgContent.png";

const Content = () => {
  return (
    <div className="relative w-screen h-[1000px] lg:h-[500px] md:h-[400px]" id="Content">
      {/* Background Image */}
      <img className="w-full h-[1000px] lg:h-[500px]  object-cover" src={bgContent} alt="background" />

      {/* Foreground Text Content */}
      <div className="absolute top-0 left-0 w-full h-full grid gap-6 md:grid-cols-2 px-4 py-8 md:px-10 md:py-14">
        {/* Left Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Trusted Legal Expertise Across Courts & Tribunals
          </h1>
          <p className="text-sm leading-relaxed">
            Legum Consultants is a distinguished law firm renowned for its comprehensive legal services and dedicated client representation. Our practice extends across the Supreme Court of India, the Delhi High Court, and various tribunals and commissions, including the NCDRC, SCDRC, NGT, AFT, CAT, as well as subordinate courts in Delhi. With a commitment to excellence and a client-centric approach, we navigate complex legal matters with precision and expertise.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Nationwide Legal Representation Across All Courts
          </h1>
          <p className="text-sm leading-relaxed">
            <strong>Comprehensive Litigation Services</strong> – Advocacy in the Supreme Court, High Courts, District Courts, and Tribunals across India. <br /><br />
            <strong>Expert Tribunal Representation</strong> – Handling cases before NCDRC, SCDRC, NGT, AFT, CAT, and other regulatory bodies. <br /><br />
            <strong>Pan-India Legal Assistance</strong> – Providing legal solutions across multiple jurisdictions and states. <br /><br />
            <strong>Corporate & Individual Legal Support</strong> – Representing businesses, institutions, and individuals in diverse legal matters. <br /><br />
            <strong>Strategic & Effective Advocacy</strong> – Ensuring a results-driven approach in every court and tribunal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
