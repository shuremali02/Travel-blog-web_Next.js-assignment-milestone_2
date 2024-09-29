import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-6 py-12 bg-white rounded-lg shadow-md text-center">
      <h1 className="text-3xl font-bold text-center mb-4">About Us</h1>
      <div className="flex justify-center mb-4">
        <Image 
          src="/dp.png" 
          alt="About Us" 
          width={150} 
          height={100} 
          className="rounded-full"
        />
      </div>
      <p className="text-gray-700 text-lg mb-4">
        Welcome to our travel blog! We are passionate about exploring the world, sharing unique destinations, and providing helpful tips for travelers.
      </p>
      <Link href="mailto:shuremsyed41@gmail.com"
         className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Contact Us
        
      </Link>
    </div>
  );
}

