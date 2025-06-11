import React from 'react'
import ContactUs from "../components/ContactUs"

const Litigation = () => {
  return (
    <div className='  text-wrap grid grid-row-2 gap-4  w-auto h-auto  mt-10 px-5 mb-10  ' id='litigation'>
    <h1 className=' text-bold mx-auto mb-0  '><b>CRIMINAL LITIGATION</b></h1>
    <div className=' lg:mx-60  p-5 mt-0 lg:mt-0 '>
    <span className='text-s text-wrap mt-0 lg:mt-0   '>At Legum Consultants, we provide expert legal representation in a wide range of criminal matters across all courts and tribunals in India. Our team specializes in handling complex and high-stakes cases with a strategic and results-driven approach. We represent clients in offenses against individuals, such as murder, assault, rape, and kidnapping, as well as property-related crimes, including theft, fraud, and extortion. Our expertise extends to white-collar crimes, such as corporate fraud, money laundering, and insider trading, along with economic offenses like tax evasion and corruption. With the rise of cyber threats, we assist in cases of hacking, identity theft, and online fraud. We also have extensive experience in drug and narcotics cases, handling legal matters under the NDPS Act. Our firm represents individuals and organizations in terrorism and national security laws, including UAPA and NSA cases, while also advocating in crimes against women and minors, such as domestic violence and sexual harassment. Additionally, we provide legal counsel in public order and security offenses, including rioting, hate speech, and sedition. With a strong presence in courts nationwide, we ensure the best possible defense and justice for our clients.
    </span>
    <br />
    <br />
    <h1 className='text-sm'>
    Our experienced team handles:
    </h1>
    
    <br />
    <b className='text-xs'>Offenses Against Individuals</b> – Murder, attempt to murder, assault, rape, kidnapping.
    <br />
    <b className='text-xs'>Property Crimes</b>– Theft, burglary, fraud, extortion, breach of trust.
    <br />
    <b className='text-xs'>White-Collar & Economic Crimes</b> – Corporate fraud, money laundering, tax evasion, corruption.
    <br />
    <b className='text-xs'> Cyber Crimes</b> – Hacking, identity theft, online harassment, phishing.
    <br />
    <b className='text-xs'>Drug & Narcotics Cases</b> – Possession, smuggling, trafficking (NDPS Act).
    <br />
    <b className='text-xs'>Terrorism & National Security</b> – Cases under UAPA, NSA, sedition laws.
    <br />
    <b className='text-xs'>Crimes Against Women & Minors</b> – Sexual harassment, domestic violence, dowry harassment.
    <br />
    <b className='text-xs'>Public Order Offenses</b> – Rioting, unlawful assembly, hate speech, sedition.
    <br />
    <span className='text-sm'>
    With a strategic, results-driven approach, we ensure the best legal defense and prosecution for our clients. Trust us to protect your rights.
    </span>
    </div>
    <div className='mx-auto mb-5 mt-25 lg:mt-25'>
    <ContactUs />
    
    </div>
    </div>
  )
}

export default Litigation