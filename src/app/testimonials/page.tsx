import React from 'react'
import TestimonialsCard, { TestimonialsProp } from '../components/testimonialsCard'

export default function Testimonial() {
    const Test: TestimonialsProp[] = [
        {
          description: "This travel blog has inspired me to explore new places I never thought I'd visit. The tips and insights are invaluable!",
          image: '/dp.png',
          name: 'Sara Johnson',
          designation: 'Travel Enthusiast',
        },
        {
          description: "I found the best deals and amazing travel itineraries here! Highly recommend to anyone looking to travel.",
          image: '/dp.png',
          name: 'Michael Lee',
          designation: 'Frequent Traveler',
        },
        {
          description: "The detailed guides and stunning photography made my trip planning so much easier. Thank you for sharing your experiences!",
          image: '/dp.png',
          name: 'Emily Carter',
          designation: 'Adventure Seeker',
        },
        {
          description: "I love the personal touch in the posts! It feels like I’m traveling with a friend. Keep up the great work!",
          image: '/dp.png',
          name: 'John Smith',
          designation: 'Travel Blogger',
        },
        {
          description: "This blog is my go-to for travel advice. I’ve discovered hidden gems and unique experiences thanks to your recommendations!",
          image: '/dp.png',
          name: 'Rachel Adams',
          designation: 'Travel Planner',
        },
        {
          description: "Absolutely love the content! The travel tips have made my journeys more enjoyable and stress-free.",
          image: '/dp.png',
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
        {Test.map((testimonial,index)=>
        <TestimonialsCard key={index} {...testimonial} />
        
        )}
    </div>
    </div>
    </>
  )
}
