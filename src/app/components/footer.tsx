// import React from 'react'
// import Link from 'next/link'

// export default function Footer() {
//   return (
//     <div className="bg-black text-white  grid grid-cols-3 p-5 ">
//       <div>
//        <h1>
//         heading1
//        </h1>
//         <p>
//           japan
//         </p>
//         <p>
//           china 
//         </p>
//         <p>
//           pakistan
//         </p>
//         <Link href={"/"}>Get Direction</Link>
//       </div>
//       <div>
//       <h1>
//         heading1
//        </h1>
//         <p>
//         city
//         </p>
//         <p>
//          hyd
//         </p>
//         <p>
//           krchi
//         </p>
//         <Link href={"/"}>Get Direction</Link>
//       </div>
//       <div className='flex flex-col'>
//       <h1>
//         heading3
//        </h1>
//         <Link href={"/"}>Portfolio</Link>
//         <Link href={"/"}>BlogPost</Link>
        
      
//       </div>
//       {/* <div className='flex flex-row items-center justify-between text-sm  '>
//         <div className='flex space-x-4 '>
//         <Link href={'/'} className='transform hover:scale-105'> Home </Link>
//         <Link href={'/about'} className='transform hover:scale-105'> About </Link>
//         <Link href={'/contact'} className='transform hover:scale-105'> Contact </Link>
//         <Link href={'/destination'} className='transform hover:scale-105'> Destination </Link>

//         </div>
//         <div className='flex space-x-4 items-center'>
//         <p>© 2024 Tech Store. Your go-to place for tech gadgets</p>
//         </div>
//         <div className='flex space-x-4 items-center'>
//         <p>ind</p>
//         </div>
       
//       </div> */}
//       <footer className="bg-black text-white p-4">
//   <div className='border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between text-sm'>
    
//     {/* Navigation Links */}
//     <div className='flex space-x-4'>
//       <Link href={'/'} className='transform hover:scale-105'> Home </Link>
//       <Link href={'/about'} className='transform hover:scale-105'> About </Link>
//       <Link href={'/contact'} className='transform hover:scale-105'> Contact </Link>
//       <Link href={'/destination'} className='transform hover:scale-105'> Destination </Link>
//     </div>

//     {/* Footer Message */}
//     <div className='flex items-center space-x-4"'>
//       <p>© 2024 Tech Store. Your go-to place for tech gadgets</p>
//     </div>

//     {/* Country/Location */}
//     <div className="flex items-center space-x-3">
//       <p>IND</p>
//     </div>

//   </div>
// </footer>



//     </div>
//   )
// }
import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-300  text-black border border-black font-bold shadow-md shadow-gray-900 p-5">
      {/* Grid Layout for Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
             {/* Column 1 */}
             <div className="flex justify-between p-6 bg-gray-300">
  <div>
          <h1 className="font-semibold text-lg mb-2">Heading 1</h1>
          <p>Japan</p>
          <p>China</p>
          <p>Pakistan</p>
          <Link href={"/"} className="text-gray-700 hover:underline">Get Direction</Link>
        </div>
        
        {/* Column 2 */}
        <div>
          <h1 className="font-semibold text-lg mb-2">Heading 2</h1>
          <p>City</p>
          <p>Hyd</p>
          <p>Krchi</p>
          <Link href={"/"} className="text-gray-700 hover:underline">Get Direction</Link>
        </div>
</div>

        
        {/* Column 3 */}
        <div className='flex flex-col'>
          <h1 className="font-semibold text-lg mb-2">Heading 3</h1>
          <Link href={"https://milestone-02-personal-portfolio.netlify.app/"} className="text-blue-400 hover:underline">Portfolio</Link>
          <Link href={"https://blogpost101.netlify.app/"} className="text-blue-400 hover:underline">BlogPost</Link>
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
            <Link href={'/contact'} className='transform hover:scale-105'> Contact </Link>
            <Link href={'/destination'} className='transform hover:scale-105'> Destination </Link>
          </div>

          {/* Footer Message */}
          <div className='flex items-center space-x-4 mt-4 md:mt-0'>
            <p>© 2024 Tech Store. Your go-to place for tech gadgets</p>
          </div>

          {/* Country/Location */}
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <p>home page</p>
          </div>
        </div>
      </div>
    </footer>
  )
}