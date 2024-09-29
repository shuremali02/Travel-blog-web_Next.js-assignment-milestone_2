
import React from 'react';
import LocCards, { Cardprop } from './locCards'; // Adjust the path as per your folder structure
import { FaBiking, FaCity, FaMapMarkerAlt, FaMountain, FaPlaneDeparture, FaShip, FaSkiing, FaTree, FaUmbrellaBeach, FaWineGlassAlt } from 'react-icons/fa'; // Example of using FontAwesome icons
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
            <p className='mb-10 max-w-xl text-gray-600 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus hic et tempora, dicta dolore sit eum molestias itaque quaerat culpa cupiditate perspiciatis non aut error animi cum nemo architecto sunt.</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 w-full max-w-6xl'>
            {Locations.map((Location,index)=>
            <DesCat key={index} {...Location}/>
            )}

        </div>
        </div>
    );
}
