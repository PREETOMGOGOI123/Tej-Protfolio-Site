import React from 'react'

function WorkHighlightCards({src, alt}) {
  return (
    <div className='md:pl-[3rem]'>
      <div className='w-[74rem] h-[45rem] rounded-2xl border-4 relative bg-contain' style={{backgroundImage: `url(${src})`}}>
      </div>
    </div>
  )
}

export default WorkHighlightCards