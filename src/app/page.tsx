import React from 'react'
import HeroSec from './components/heroSec';
import Destination from './destination/page';
import Team from './team/page';
import Testimonial from './testimonials/page';


export default function Home() {

  return (
    <div className='min-h-screen'>


      <HeroSec />

      <Destination />
      <Team />
      <Testimonial />
    </div>
  )
}
