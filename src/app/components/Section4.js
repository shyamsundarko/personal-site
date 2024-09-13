import React from 'react'
import '../styles/section4.css'
import Image from 'next/image'
const Section4 = () => {
  return (
    <div className='section4Container'>
        <div className="section4Title">I&apos;m proud to have worked for some awesome companies</div>
        <div className="companies">
            <div className="leadrpro">
                <Image
                    className='companyLogo'
                    src="/leadrpro.jpg"
                    width={300}
                    height={300}
                    />  
            </div>
            
            <div className="continental">
                <Image
                    className='companyLogo'
                    src="/conti.jpg"
                    width={300}
                    height={300}
                    />  
            </div>
            <div className="accenture">
                <Image
                    className='companyLogo accenture'
                    src="/accenture.jpg"
                    width={300}
                    height={300}
                    />  
            </div>
        </div>
    </div>
  )
}

export default Section4