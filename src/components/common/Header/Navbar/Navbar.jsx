import React from 'react'
import {Link} from 'react-router-dom'


function Navbar() {
  return (
    <nav className='navbar '>
            <ul className='flex gap-[5.1rem]'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Contact</Link></li>
            </ul>
        </nav>
  )
}

export default Navbar