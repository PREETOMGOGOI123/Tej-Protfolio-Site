import React from 'react'
import WorkHighlightCards from '@components/Home/WorkHighlightCards/WorkHighlightCards';


const workDetails = [
  {
    title: 'Project Alpha',
    image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
    year: '2020'
  },
  {
    title: 'Design Beta',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    year: '2020'
  },
  {
    title: 'Development Gamma',
    image: 'https://images.pexels.com/photos/3184631/pexels-photo-3184631.jpeg',
    year: '2020'
  },
  {
    title: 'Marketing Delta',
    image: 'https://images.pexels.com/photos/3184356/pexels-photo-3184356.jpeg',
    year: '2020'
  }
];

function WorkHighlights() {
  return (
    <div className='flex flex-col items-center'>
      <div className='mb-[1.7rem] text-medium text-accent w-full'>
        <h3 className='w-full '>Work Highlights</h3>
        <p>&gt;&gt;&gt;</p>
      </div>
      <div className='flex flex-wrap justify-between gap-y-[1.7rem] w-full'>
        {workDetails.map((item)=>(
          <div>
            <WorkHighlightCards src={item.image} alt={item.title} />
            <div className='py-[2.3rem] flex items-center gap-[1.4rem]'>
              <div className='w-[9rem] h-[4.5rem] rounded-[4.5rem] bg-[#3A3A3A]'><p className='text-white text-small text-center leading-[4.5rem]'>{item.year}</p></div>
              <p className='text-large text-accent'>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkHighlights