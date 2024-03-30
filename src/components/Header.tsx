import React from 'react'
import Link from 'next/link';
import { ModeToggle } from './theme/mode-toggle';
import CardComponent from './CardComponent';

const Header = () => {
  return (
    <div className='flex items-center justify-between'>
 <nav className="bg-800 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="   flex  items-center space-x-4 gap-10">
              <a className=' cursor-pointer text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl bg-clip-text text-transparent bg-gradient-to-tr from-primary'>Reastaurant</a>
              <a  className=" cursor-pointer text-3xl font-bold tracking-tighter text-sm xl:text-2xl bg-clip-text text-transparent bg-gradient-to-tr from-primary">Menu</a>
              <a className="cursor-pointer text-3xl font-bold tracking-tighter text-sm xl:text-2xl bg-clip-text text-transparent bg-gradient-to-tr from-primary">About</a>
              <a className="cursor-pointer text-3xl font-bold tracking-tighter text-sm xl:text-2xl bg-clip-text text-transparent bg-gradient-to-tr from-primary">Contact Us</a>
          </div>
          {/* You can add additional navigation items, such as login/logout buttons, here */}
        </div>
      </div>
    </nav>
    <div className='m4-50'>
    <ModeToggle></ModeToggle>
    </div>
    </div>
  )
}

export default Header