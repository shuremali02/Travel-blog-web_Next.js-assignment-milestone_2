
import React from 'react';
import { FaBiking, FaCity,  FaMountain, FaPlaneDeparture, FaShip, FaSkiing, FaTree, FaUmbrellaBeach, FaWineGlassAlt } from 'react-icons/fa'; // Example of using FontAwesome icons
import DesCat, { DesProp } from './destinationCat';

export default function LocationCard() {
  const Locations: DesProp[] = [
    {
      icon: <FaUmbrellaBeach />,
      title: 'Beach Getaways',
      availability: 'Available year-round',
    },
    {
      icon: <FaMountain />,
      title: 'Hills Adventures',
      availability: 'Seasonal: Best from May to October',
    },
    {
      icon: <FaCity />,
      title: 'City Escapes',
      availability: 'Available all year',
    },
    {
      icon: <FaSkiing />,
      title: 'Ski Resorts',
      availability: 'Available in winter',
    },
    {
      icon: <FaTree />,
      title: 'National Parks',
      availability: 'Open in spring and summer',
    },
    {
      icon: <FaPlaneDeparture />,
      title: 'International Trips',
      availability: 'Dependent on travel regulations',
    },
    {
      icon: <FaBiking />,
      title: 'Cycling Tours',
      availability: 'Available from March to September',
    },
    {
      icon: <FaWineGlassAlt />,
      title: 'Wine Country Tours',
      availability: 'Best from May to October',
    },
    {
      icon: <FaShip />,
      title: 'Cruise Vacations',
      availability: 'Available year-round',
    },
  ];

  return (
    <div className='flex flex-col items-center text-center py-12 '>
      <h1 className='font-bold text-4xl mb-4 '>Explore Destinations by Locations </h1>
      <p className='mb-10 max-w-xl text-gray-600 '>From sandy beaches to snowy mountains, our diverse travel destinations offer something for every type of traveler. Whether you&#39;re looking to escape to a bustling city or retreat to nature, find the perfect location for your next adventure. Explore all-year-round spots or seasonal retreats curated just for you!.</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 w-full max-w-6xl'>
        {Locations.map((Location, index) =>
          <DesCat key={index} {...Location} />
        )}

      </div>
    </div>
  );
}
