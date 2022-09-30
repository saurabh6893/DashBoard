import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiHome } from 'react-icons/fi';
import { FaWpforms } from 'react-icons/fa';
import { ImDisplay } from 'react-icons/im';
const Navbar = () => {
  const [isHover, setIsHover] = useState<boolean>(false)
  const expansion = {
    display: isHover ? "inline" : "none",
  }
  const bar = {
    transitionDuration: '0.5s',
    transitionStyle: 'easeInOut',
    width: isHover ? "200px" : "100px",
  }

  const HoverOn = () => {
    setIsHover(true)
  }
  const HoverOff = () => {
    setIsHover(false)
  }

  return (
    <nav>
      <div className="navbox" onMouseLeave={HoverOff} onMouseEnter={HoverOn} style={bar}>
        <Link to='/' ><div className="linkbox">
          <h1 style={expansion}>Home</h1><FiHome />
        </div></Link>
        <Link to='/formx'><div className="linkbox"><h1 style={expansion}>form</h1><FaWpforms /></div></Link>
        <Link to='/display'><div className="linkbox"><h1 style={expansion}>Display</h1 ><ImDisplay /></div></Link>
      </div >
    </nav >
  )
}

export default Navbar