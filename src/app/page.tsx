import React from 'react'
import LocCards from './components/locCards'
import { Bs123 } from "react-icons/bs";
import HeroSec from './components/heroSec';
import Cards from './components/card';

import TeamCard from './components/teamCard';
import LocationCard from './components/location';
import Contact from './contact/page';
import Destination from './destination/page';
import Team from './team/page';
import About from './about/page';
import Testimonial from './testimonials/page';


export default function Home() {
//  const  myobj={icon:"abcd",
//   title:"this is title",
//   description:"description"
//  }
  return (
    <div>
      
  
     <HeroSec/>
     <About/>
   <Destination/>
   <Team/>
   <Testimonial/>
  </div>
  ) 
}
