import React from 'react'
import Navbar from './Navbar/Navbar'

function Header() {
    return (
      <header className='fixed w-full top-0 z-50'>
        <div className='w-full h-[80px] flex justify-between px-[6.8rem] items-center text-[#292929] bg-white/70 backdrop-blur-4xl'>
            <div className='logo relative z-10'>
                <h1>Logo</h1>
            </div>
            <div className='relative z-10'>
                <Navbar />
            </div>
        </div>
      </header>
    )
}

export default Header