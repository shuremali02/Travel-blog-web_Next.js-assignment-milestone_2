// "use client"
// import Link from 'next/link'
// import { useState } from 'react'
// import { IoMdMenu } from "react-icons/io";
// import { MdOutlineCancelPresentation } from "react-icons/md";

// export default function Navbar() {
//   const [isOpen,setIsOpen]=useState <boolean>(false)
//   return (
// <header className='bg-black text-white flex justify-between p-2  '>
// <div>TravelBlog</div> 
//   <div className='hidden gap-4 md:flex'> 
//   <Link href={'/'} className='transform hover:scale-105' > Home
//   </Link>
//   <Link href={'/about'}  className='transform hover:scale-105' > About
//   </Link>
//   <Link href={'/contact'}  className='transform hover:scale-105' > Contact
//   </Link>  
//   <Link href={'/destination'}  className='transform hover:scale-105'> Destination
//   </Link>
//   </div>
//   <div className='md:hidden'>
// <button onClick={()=>setIsOpen(!isOpen)}> 
//   {isOpen? <MdOutlineCancelPresentation/>:<IoMdMenu/> }
// </button>

//   </div>
//   {isOpen&&<nav>
//     <ul>
//     <Link href={'/'} className='transform hover:scale-105' > Home
//   </Link>
//   <Link href={'/about'}  className='transform hover:scale-105' > About
//   </Link>
//   <Link href={'/contact'}  className='transform hover:scale-105' > Contact
//   </Link>  
//   <Link href={'/destination'}  className='transform hover:scale-105'> Destination
//   </Link>
//     </ul>
//     </nav>}
//   </header>
//   )
// }
"use client"
import Link from 'next/link'
import { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { MdOutlineCancelPresentation } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className='bg-gray-300 text-black border border-b-black font-bold shadow-lg shadow-gray-900 flex justify-between p-4'>
      <div>TravelBlog</div>

      {/* Show navigation links on medium screens and larger */}
      <div className="hidden md:flex  gap-8 justify-between">
        <Link href={'/'} className='transform hover:scale-105'> Home </Link>
        <Link href={'/about'} className='transform hover:scale-105'> About </Link>
        <Link href={'/team'} className='transform hover:scale-105'> Team </Link>
        <Link href={'/testimonials'} className='transform hover:scale-105'> Testimonials </Link>
        <Link href={'/destination'} className='transform hover:scale-105'> Destination </Link>
      </div>

      {/* Show menu button on small screens */}
      <div className='md:hidden'>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <MdOutlineCancelPresentation size={24} /> : <IoMdMenu size={24} />}
        </button>
      </div>

      {/* Mobile navigation menu when isOpen is true, only for small screens */}
      {isOpen && (
        <nav className='absolute top-14 left-0 w-full bg-black text-white p-4 md:hidden text-center'>
          <ul className='flex flex-col gap-4'>
            <Link href={'/'} className='transform hover:scale-105' onClick={() => setIsOpen(false)}> Home </Link>
            <Link href={'/about'} className='transform hover:scale-105' onClick={() => setIsOpen(false)}> About </Link>
            <Link href={'/team'} className='transform hover:scale-105' onClick={() => setIsOpen(false)}> Team </Link>
            <Link href={'/testimonials'} className='transform hover:scale-105'> Testimonials </Link>
            <Link href={'/destination'} className='transform hover:scale-105' onClick={() => setIsOpen(false)}> Destination </Link>
          </ul>
        </nav>
      )}
    </header>
  )
}
