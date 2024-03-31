import React from 'react'
import Link from 'next/link';
import { ModeToggle } from './theme/mode-toggle';
import CardComponent from './CardComponent';
import DopdownComponent from '../components/DopdownComponent';


const Header = () => {
  return (
<div className='flex items-center justify-between py-5 mx-5 sm:px-8 xl:px-16'>
  <nav className="bg-800 py-4">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center space-x-4 gap-10">
        <Link href={`/#`} className='cursor-pointer text-4xl lg:text-3xl xl:text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-tr from-primary sm:text-3xl'>Restaurant</Link>
        <Link href={`/Menu`} className="hidden sm:inline cursor-pointer text-3xl font-bold tracking-tighter text-sm xl:text-2xl bg-clip-text text-transparent bg-gradient-to-tr from-primary">Menu</Link>
        <a className="hidden sm:inline cursor-pointer text-3xl font-bold tracking-tighter text-sm xl:text-2xl bg-clip-text text-transparent bg-gradient-to-tr from-primary">About</a>
        <a className="hidden sm:inline cursor-pointer text-3xl font-bold tracking-tighter text-sm xl:text-2xl bg-clip-text text-transparent bg-gradient-to-tr from-primary">Contact Us</a>
      </div>
    </div>
  </nav>
  <div className='flex flex-row gap-10 m4-50'>
    <div className='2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden'> 
      <DopdownComponent></DopdownComponent>
    </div>
    <ModeToggle></ModeToggle>
  </div>
</div>
  )
}

export default Header