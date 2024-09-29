import React from 'react'

import TravelCards, { Cardprops } from '../components/card';
import LocationCard from '../components/location';
export default function Destination() {
    const travelDestinations :Cardprops[]= [
        {
          image: '/dp.png',
          category: 'City',
          title: 'Islamabad, Pakistan',
          description: 'A serene city with beautiful landscapes and modern architecture.',
          rating: 4.8,
          price: '$200 per night',
        },
        {
          image: '/dp.png',
          category: 'Beach',
          title: 'Maldives',
          description: 'Tropical paradise with crystal clear waters and luxurious resorts.',
          rating: 4.9,
          price: '$500 per night',
        },
        {
          image: '/dp.png',
          category: 'Mountain',
          title: 'Swiss Alps, Switzerland',
          description: 'Breathtaking mountain views perfect for skiing and hiking.',
          rating: 4.7,
          price: '$350 per night',
        },
        {
          image: '/dp.png',
          category: 'City',
          title: 'Paris, France',
          description: 'The city of lights, famous for its art, fashion, and the Eiffel Tower.',
          rating: 4.6,
          price: '$300 per night',
        },
        {
          image: '/dp.png',
          category: 'Cultural',
          title: 'Kyoto, Japan',
          description: 'A historic city known for its temples, gardens, and traditional tea houses.',
          rating: 4.8,
          price: '$180 per night',
        },
        {
          image: '/dp.png',
          category: 'Adventure',
          title: 'Cape Town, South Africa',
          description: 'A vibrant city with Table Mountain, beautiful beaches, and a rich culture.',
          rating: 4.7,
          price: '$250 per night',
        },
      ];
      
      


      
  return (
    <><LocationCard/> 
    <div className='text-center py-12 '>
        <h1 className='font-bold text-4xl mb-4 '> 
        Destinations
        </h1>
        <p className='text-lg text-gray-600 '>"Explore the world, embrace new cultures, and create unforgettable memories on every journey."</p></div>

    <div className='flex items-center'>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-3 mx-auto max-w-6xl ' >
        {travelDestinations.map((destination,index)=>
       < TravelCards key={index} {...destination} />
        
        )}
    </div>
    
    </div>
    
    </>
  )
}
