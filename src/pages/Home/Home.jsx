import React from 'react'
import Header from '@components/common/Header/Header'
import Hero from './sections/Hero'
import WorkHighlights from './sections/WorkHighlights'

function Home() {
  return (
    <div className='grid grid-rows-auto section text-small overflow-x-hidden'>
      <Header />
      <Hero />
      <WorkHighlights />
    </div>
  ) 
}

export default Home