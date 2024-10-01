import React from 'react'
 import { Button } from '@/components/ui/button'
 import Image from 'next/image'
 import Link from 'next/link'
 export default function HeroSec() {
   return (
     <div className='grid grid-cols-1 md:grid-cols-2 gap-y-3  items-center min-h-[40vh] '>
         <div  className='flex flex-col justify-center space-y-6 m-6 '>
      <h1 className='font-bold  mt-4 text-2xl md:text-5xl'>Find Your Dream Destination <br /> Online With Ease 
      </h1>   
      <p className='text-md md:text-xl text-gray-600 '>
      Discover the most breathtaking locations from around the world, handpicked just for you. Whether you&#39;re seeking adventure, relaxation, or cultural immersion, we make it easy to find and plan your next dream vacation. Let us be your guide to unforgettable experiences!
      </p>
      <div className='space-x-4  '><Link href={"/destination"} >
        <Button className='py-2 px-4'>Explore Locations</Button>  </Link> 
         <Link href={"/destination"} >
         <Button className='py-2 px-4'>Reserve Now </Button>
         </Link>
      </div>
         </div>
         <div className="flex justify-center md:justify-end">
          <Image 
            src="https://i.pinimg.com/564x/20/07/2a/20072afd3df5827a63aaa98b391bb357.jpg" 
            alt="" 
            width={1022}   // Adjusted width
            height={464}  // Adjusted height
            className='object-cover w-full max-w-1xl md:w-full ' 
          />
        </div>
     </div>
   )
}