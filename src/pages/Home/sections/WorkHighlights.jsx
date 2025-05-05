import React from 'react'
import WorkHighlightCards from '@components/Home/WorkHighlightCards/WorkHighlightCards';
import Projects  from '@components/Home/WorkHighlightCards/Projects';

const workDetails = [
  {
    title: 'Project Alpha',
    image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg'
  },
  {
    title: 'Design Beta',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
  },
  {
    title: 'Development Gamma',
    image: 'https://images.pexels.com/photos/3184631/pexels-photo-3184631.jpeg'
  },
  {
    title: 'Marketing Delta',
    image: 'https://images.pexels.com/photos/3184356/pexels-photo-3184356.jpeg'
  }
];

function WorkHighlights() {
  return (
    <div className='pt-[7.9rem] md:ml-[10rem]'>
      <div className='mb-[1.7rem] text-medium text-accent'>
        <h3>Work Highlights</h3>
        <p>&gt;&gt;&gt;</p>
      </div>
      <div className='grid grid-cols-2 gap-y-[1.7rem] '>
        {workDetails.map((item)=>(
          <div>
            <WorkHighlightCards src={item.image} alt={item.title} />
            <p className='py-[2.3rem] text-large text-accent'>{item.title}</p>
          </div>
        ))}
      </div>
      <div className='mb-[1.7rem] pt-[7.9rem]'>
        <h3>Work Highlights</h3>
        <p>&gt;&gt;&gt;</p>
      </div>
      <hr className='md:ml-[3rem]' />
      <Projects />
      <hr className='md:ml-[3rem]' />
      <Projects />
    </div>
  )
}

export default WorkHighlights