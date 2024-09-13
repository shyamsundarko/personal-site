import React from 'react'
import '../styles/section2.css'
import Image from 'next/image'
const Section2 = () => {
  return (
    <div className='section2Container'>
        <div className="imgNameContainer">
            <Image
                className='profilePic'
                src="/profilePic.jpg"
                width={300}
                height={300}
            />
            <div className="nameContainer">
                <div className="nameSection">I&apos;m Shyam Sundar</div>
                <div className="introSection">I&apos;m passionate about building digital products that solve real-world problems. Over the past year, I collaborated with talented people to create innovative solutions for both businesses and consumers. I'm entrepreneurial, quietly confident, and always curious, continuously refining my skills as I seek new opportunities for internships or full-time roles.</div>
            </div>
        </div>
        <div className="unisContainer">
            <div className="containerHeading">I have been shaped by these remarkable institutions</div>
            <div className="unis">
                <div className="ntu">
                    <Image
                    className='uniLogo'
                    src="/ntu_logo.png"
                    width={300}
                    height={300}
                    />  
                </div>
                <div className="northeastern">
                    <Image
                    className='uniLogo'
                    src="/neu_logo.png"
                    width={300}
                    height={300}
                    />  
                </div>
            </div>
        </div>
        
        
    </div>
  )
}

export default Section2