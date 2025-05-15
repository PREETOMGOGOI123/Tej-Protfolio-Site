import React from 'react'

function WorkHighlightCards({src, alt}) {
  return (
      <div className='w-[41vw] h-[25vw] rounded-2xl border-4 relative bg-contain' style={{backgroundImage: `url(${src})`}}>
      </div>
  
  )
}

export default WorkHighlightCards