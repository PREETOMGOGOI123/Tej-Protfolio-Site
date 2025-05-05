
import React from 'react'
import firstSlide from '@assets/backgroundVideo/heroBackground/whisk_playing_with_the_toy.mp4'

function Hero() {
  return (
    <div className='h-screen relative'>
        <video 
            src={firstSlide} 
            className='w-full h-full absolute inset-0 object-cover'
            autoPlay
            muted
            loop
            playsInline
        />
        <div className='absolute left-0 top-1/2 w-[61.8rem] h-[25.5rem] pl-[10rem] py-[4.2rem] bg-white/60 backdrop-blur-4xl rounded-xl flex flex-col justify-between items-start'>
          <p className='text-small'>Cats rule the internet, and they're also one of the most Googled animals. I work on Google Search, so in a way, I help people find what truly matters: cat videos."</p>
          <button 
            type='button' 
            className='bg-[#1E2611]/50 backdrop-blur-4xl rounded-md text-white w-fit h-fit text-[18px] px-[20px] py-[6px] flex items-center justify-center font-bold'
          >
            Next bonus fact
          </button>
        </div>
    </div>
  )
}

export default Hero