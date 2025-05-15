import React from 'react'

function Projects({src}) {
  return (
    <div className='w-[40rem] h-[20rem] rounded-xl bg-[#F4EDBA] flex items-center justify-center'>
      <img src={src} alt="title" className='w-[80%] h-[80%] rounded-xl'/>
    </div>
  )
}

export default Projects