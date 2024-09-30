import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-300 text-black border border-black font-bold shadow-md shadow-gray-900 p-5">
      {/* Grid Layout for Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1: Popular Destinations */}
          <div className="flex flex-col p-6 bg-gray-300">
            <h1 className="font-semibold text-lg mb-2">Popular Destinations</h1>
            <p>Bali, Indonesia</p>
            <p>Paris, France</p>
            <p>Tokyo, Japan</p>
            <p>New York, USA</p>
            <Link href={"/destinations"} className="text-gray-700 hover:underline">Explore More</Link>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col p-6 bg-gray-300">
            <h1 className="font-semibold text-lg mb-2">Quick Links</h1>
            <Link href="/about" className="text-gray-700 hover:underline">About Us</Link>
            <Link href="/blog" className="text-gray-700 hover:underline">Travel Blog</Link>
            <Link href="/team" className="text-gray-700 hover:underline">Team</Link>
            <Link href="/tours" className="text-gray-700 hover:underline">Tours & Packages</Link>
          </div>

          {/* Column 3: Stay Connected */}
          <div className="flex flex-col p-6 bg-gray-300">
            <h1 className="font-semibold text-lg mb-2">Stay Connected</h1>
            <p>Follow us on social media for the latest travel tips and updates:</p>
            <Link href={"https://www.Linkedin.com/"} className="text-blue-400 hover:underline">Linkedin</Link>
            <Link href={"https://www.facebook.com/"} className="text-blue-400 hover:underline">Facebook</Link>
            <Link href={"https://www.twitter.com/"} className="text-blue-400 hover:underline">Twitter</Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          {/* Navigation Links */}
          <div className='flex space-x-4'>
            <Link href={'/'} className='transform hover:scale-105'> Home </Link>
            <Link href={'/about'} className='transform hover:scale-105'> About </Link>
            <Link href={'/team'} className='transform hover:scale-105'> Team </Link>
            <Link href={'/testimonials'} className='transform hover:scale-105'> Testimonials </Link>
            <Link href={'/destination'} className='transform hover:scale-105'> Destinations </Link>
          </div>

          {/* Footer Message */}
          <div className='flex items-center space-x-4 mt-4 md:mt-0'>
            <p>© 2024 Travel Adventures. Discover the world, one journey at a time.</p>
          </div>

          {/* Country/Location */}
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <p>Global Travel Blog</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
