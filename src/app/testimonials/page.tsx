import React from 'react'
import TestimonialsCard, { TestimonialsProp } from '../components/testimonialsCard'

export default function Testimonial() {
  const Test: TestimonialsProp[] = [
    {
      description: "This travel blog has inspired me to explore new places I never thought I'd visit. The tips and insights are invaluable!",
      image: 'https://i.pinimg.com/236x/3c/93/0a/3c930a5b0b7a35c0415d896aaf4047ed.jpg',
      name: 'Sara Johnson',
      designation: 'Travel Enthusiast',
    },
    {
      description: "I found the best deals and amazing travel itineraries here! Highly recommend to anyone looking to travel.",
      image: 'https://i.pinimg.com/236x/49/af/14/49af147a467ace4768394811d8ad1649.jpg',
      name: 'Michael Lee',
      designation: 'Frequent Traveler',
    },
    {
      description: "The detailed guides and stunning photography made my trip planning so much easier. Thank you for sharing your experiences!",
      image: 'https://i.pinimg.com/236x/e7/27/b3/e727b38bc4a2340d4b772edd0864e5c1.jpg',
      name: 'Emily Carter',
      designation: 'Adventure Seeker',
    },
    {
      description: "I love the personal touch in the posts! It feels like I’m traveling with a friend. Keep up the great work!",
      image: 'https://i.pinimg.com/236x/1c/2a/82/1c2a82c92c9ffd43833697b5a6d8836f.jpg',
      name: 'John Smith',
      designation: 'Travel Blogger',
    },
    {
      description: "This blog is my go-to for travel advice. I’ve discovered hidden gems and unique experiences thanks to your recommendations!",
      image: 'https://i.pinimg.com/236x/29/25/34/2925347368d50b346e7f29164e756ce0.jpg',
      name: 'Rachel Adams',
      designation: 'Travel Planner',
    },
    {
      description: "Absolutely love the content! The travel tips have made my journeys more enjoyable and stress-free.",
      image: 'https://i.pinimg.com/236x/08/75/f9/0875f9ae7e2184b889487b9c5e30f8b7.jpg',
      name: 'David Brown',
      designation: 'Nature Lover',
    },
  ];



  return (
    <>
      <div className='text-center py-12 '>
        <h1 className='font-bold text-4xl mb-4 '>
          What Are Clients Say
        </h1>
        <p className='text-lg text-gray-600'>
          Our clients’ experiences matter to us! Read what they have to say about their adventures and how our travel blog has inspired them to explore new destinations. Each testimonial reflects our commitment to providing valuable insights and unforgettable journeys.
        </p>
      </div>
      <div className='flex items-center '>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-3 mx-auto max-w-6xl ' >
          {Test.map((testimonial, index) =>
            <TestimonialsCard key={index} {...testimonial} />

          )}
        </div>
      </div>
    </>
  )
}
