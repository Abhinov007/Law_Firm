import React from 'react'
import watermark from "../assets/watermark.png"

const Content = () => {
  return (

<div className='relative w-full mx-auto'>
<img className='w-full h-[500px]' src={watermark} alt="watermark" />
      <div className=' absolute top-5 left-22 flex items-center justify-center  gap-20'>
        <div className='  w-[550px] pr-3 p-8 m-5'>
            <h1 className='font-bold text-2xl text-cyan-900 '>Trusted Legal Expertise Across Courts & Tribunals</h1>
            <br />
                <span className='font-light text-sm'>Legum Consultants is a distinguished law firm renowned for its comprehensive legal services and dedicated client representation. Our practice extends across the Supreme Court of India, the Delhi High Court, and various tribunals and commissions, including the NCDRC, SCDRC, NGT, AFT, CAT, as well as subordinate courts in Delhi. With a commitment to excellence and a client-centric approach, we navigate complex legal matters with precision and expertise.</span>
            </div>

            <div className=' w-[581px] p-1  mt-8'>
            <h1 className='font-bold text-2xl  text-cyan-900'>Nationwide Legal Representation Across All Courts</h1>
            <br />
            <span className='font-light text-sm'><b>Comprehensive Litigation Services</b> – Advocacy in the Supreme Court, High Courts, District Courts, and   Tribunals across India.
            <br />
            <b>Expert Tribunal Representation</b> – Handling cases before NCDRC, SCDRC, NGT, AFT, CAT, and other regulatory bodies.
            <br />
            <b>Pan-India Legal Assistance</b> – Providing legal solutions across multiple jurisdictions and states.
            <br />
            <b>Corporate & Individual Legal Support</b> – Representing businesses, institutions, and individuals in diverse legal  matters.
            <br />
            <b>Strategic & Effective Advocacy</b> – Ensuring a results-driven approach in every court and tribunal.</span>
        </div>
    </div>
</div>    
  )
}

export default Content