import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { CiStar } from "react-icons/ci";
export interface Cardprops {
    image: string;
    category: string;
    title: string;
    description: string;
    rating: number;
    price: string

}
export default function TravelCards(props: Cardprops) {

    return (
        <div className='flex justify-center items-center'>
        <div className='w-full max-w-md h-auto bg-white shadow-lg rounded-lg p-4  m-4   border border-gray-400'>
            <div className=' w-full h-[200px] relative mb-3'>
                <Image src={props.image} alt={props.title} objectFit='cover' layout='fill' className='rounded-t-lg' />
            </div >
            <div className='flex justify-between items-center mb-2 '>
                <h1 className='text-lg font-semibold  '>{props.category} </h1>
                <p className='flex gap-3 text-gray-500'><CiStar size={20} />{props.rating}</p>
            </div>
            <div className='flex flex-col mb-4'>
                <h2 className=' text-lg font-bold '> {props.title}</h2>
                <p className='text-gray-600 '>{props.description}
                </p>
            </div>
            <div className='flex gap-4  items-center'>
                <Button>Add Now </Button>
                <p className='text-lg font-semibold text-blue-500 '>{props.price}

                </p>

            </div>

        </div>
        </div>
    )
}

