import React from 'react'
import Header from '@components/common/Header/Header'
import Hero from './sections/Hero'
import WorkHighlights from './sections/WorkHighlights'
import ProjectsCard from '@components/Home/WorkHighlightCards/ProjectsCard'

function Home() {
  const projects = [
    {image: 'https://images.pexels.com/photos/114907/pexels-photo-114907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', title: 'Critx ShareConnect Illustrations' },
    {image: 'https://images.pexels.com/photos/114907/pexels-photo-114907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', title: 'Critx ShareConnect product' },
    {image: 'https://images.pexels.com/photos/114907/pexels-photo-114907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', title: 'Wotu' },
    {image: 'https://images.pexels.com/photos/114907/pexels-photo-114907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', title: 'Wotu' },
    {image: 'https://images.pexels.com/photos/114907/pexels-photo-114907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', title: 'Wookler' },
    {image: 'https://images.pexels.com/photos/114907/pexels-photo-114907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', title: 'PayPal' },
    {image: 'https://images.pexels.com/photos/114907/pexels-photo-114907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', title: 'Working notes' },
  ]

  return (
    <div className='grid grid-rows-auto section text-small overflow-x-hidden gap-y-[7.1rem]'>
      <Header />
      <Hero />
      <div className='px-24 flex flex-col gap-y-[7.1rem]'>
      <WorkHighlights />
      <div>
        <h3 className='text-medium'>
          More Projects &gt;&gt;&gt;
        </h3>
        <hr className='w-full my-[2.4rem]' />
        <div className='w-full place-items-center grid grid-cols-3 gap-y-[7.1rem] py-[3.5rem]'>
          {projects.map((item, index) => (
            <div>
            <ProjectsCard key={index} src={item.image} alt={item.title} />
            <h2 className='text-medium py-[1.5rem]'>{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  ) 
}

export default Home