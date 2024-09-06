import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { RiMenu3Fill } from "react-icons/ri";
function Navbar() {
  let [isMenuOpen,setIsMenuOpen] = useState(false);
  return (
    <div className='h-screen w-full border-2 bg-gradient-to-r from-blue-400 to-emerald-400'>
      <div className='flex justify-between py-6 px-8 bg-white shadow-md md:px-32 text-black items-center'>
        <a href="#">
          <img src="./public/tailwind-css.png" className='w-52 hover:scale-105 transition-all' alt="tailwind-css" />
        </a>
        <ul className='hidden xl:flex gap-10 text-base font-semibold'>
          <li className='hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer p-3'>Home</li>
          <li className='hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer p-3'>About</li>
          <li className='hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer p-3'>Contact</li>
          <li className='hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer p-3'>Products</li>
        </ul>
        <div className='relative hidden md:flex justify-center items-center gap-3'>
        <IoSearch className='absolute left-3 text-2xl text-gray-500' />
        <input type="text" placeholder='Search...' className='py-2 pl-10 rounded-xl border-2 border-blue-300 focus:bg-slate-100 focus:outline-sky-500' />
        </div>
        {!isMenuOpen ? 
        <RiMenu3Fill onClick={() => setIsMenuOpen(!isMenuOpen)} className='block xl:hidden text-4xl cursor-pointer transition-all' />
        :
        <ImCross onClick={() => setIsMenuOpen(!isMenuOpen)} className='block xl:hidden text-3xl cursor-pointer' />
        }
          <div className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col itemscen
          gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} style={{transition : 'transform 0.3s ease,opacity 0.3s ease'}}>
            <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Home</li>
            <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>About</li>
            <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Contact</li>
            <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Products</li>
            
          </div>
      </div>
    </div>
  )
}

export default Navbar