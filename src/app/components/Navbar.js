import React from 'react'
import '../styles/navbar.css'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="pageIcon">
            <Image
                width={300}
                height={300}
                src="/portfolioIcon.png"
                className='portfolioIcon'
            />
        </div>
        <div className="navbarRight">
            {/* <button className="abtBtn">About</button> */}
            {/* <button className="contactBtn">Contact</button> */}
        </div>
    </div>
  )
}

export default Navbar