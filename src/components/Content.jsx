import React from 'react'
import watermark from "../assets/watermark.png"
import bgContent from "../assets/bgContent.png"

const Content = () => {
  return (

<div className=' relative  h-[1000px] w-screen md:h-[400px]  ' id='Content'>
<img className='w-full h-[1000px] md:h-[400px]' src={bgContent} alt="watermark" />
     
<div className='absolute top-2 left-0 mx-8 grid grid-rows-2 gap-2 md:grid-cols-2 p-10  mt-10 '>

<div className=' h-auto '>
<h1 className='text-2xl '>Trusted Legal Expertise Across Courts & Tribunals</h1>
<span className='text-xs '>Legum Consultants is a distinguished law firm renowned for its comprehensive legal services and dedicated client representation. Our practice extends across the Supreme Court of India, the Delhi High Court, and various tribunals and commissions, including the NCDRC, SCDRC, NGT, AFT, CAT, as well as subordinate courts in Delhi. With a commitment to excellence and a client-centric approach, we navigate complex legal matters with precision and expertise.</span>
</div>
<div className=' h-auto'>
<h1 className='text-2xl '>Nationwide Legal Representation Across All Courts</h1>
<span className='text-xs '>Comprehensive Litigation Services – Advocacy in the Supreme Court, High Courts, District Courts, and Tribunals across India.
Expert Tribunal Representation – Handling cases before NCDRC, SCDRC, NGT, AFT, CAT, and other regulatory bodies.
Pan-India Legal Assistance – Providing legal solutions across multiple jurisdictions and states.
Corporate & Individual Legal Support – Representing businesses, institutions, and individuals in diverse legal matters.
Strategic & Effective Advocacy – Ensuring a results-driven approach in every court and tribunal.</span>
</div>


</div>

</div>
  )
}

export default Content