import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function HeroSec() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-y-3 items-center min-h-[40vh] '>
        <div  className='flex flex-col justify-center space-y-6 m-6 '>
     <h1 className='font-bold  mt-4 text-2xl md:text-5xl'>Find Your Dream Destination <br /> Online With Ease 
     </h1>   
     <p className='text-md md:text-xl text-gray-600 '>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi animi molestiae debitis nulla illo doloremque impedit? Reprehenderit iure obcaecati iste enim natus. Expedita nulla sint at officia exercitationem tempora atque.!</p>
     <div className='space-x-4  '>
        <Button className='py-2 px-4'>Explore Locations</Button>   
        
        <Button className='py-2 px-4'>Reserve Now </Button>
     </div>
        </div>
        <div className='flex justify-center md:justify-end'>
      <Image src="/dp.png" alt="" width={720} height={700} className='object-cover w-full max-w-1xl'/>
        </div>
    </div>
  )
}

