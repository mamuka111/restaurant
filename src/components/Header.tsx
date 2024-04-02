import React from 'react'
import Link from 'next/link';
import { ModeToggle } from './theme/mode-toggle';
import CardComponent from './CardComponent';
import DopdownComponent from './smallComponents/DopdownComponent';
import DropdownCart from './smallComponents/DropdownCart';
import { Button } from "@/components/ui/button"
import { FaCartPlus } from "react-icons/fa";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const Header = () => {
  return (
<div className='flex items-center justify-between py-5 mx-5 sm:px-8 xl:px-16'>
  <nav className="bg-800 py-4">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center space-x-4 gap-10">
        <Link href={`/`} className='cursor-pointer text-4xl lg:text-3xl xl:text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-tr from-primary sm:text-3xl'>Restaurant</Link>
        <Link href={`/card`} className="hidden sm:inline cursor-pointer text-3xl font-bold tracking-tighter text-sm xl:text-2xl bg-clip-text text-transparent bg-gradient-to-tr from-primary">Menu</Link>
        <Link href={'/'} className="hidden sm:inline cursor-pointer text-3xl font-bold tracking-tighter text-sm xl:text-2xl bg-clip-text text-transparent bg-gradient-to-tr from-primary">About</Link>
        <Link href={'/'} className="hidden sm:inline cursor-pointer text-3xl font-bold tracking-tighter text-sm xl:text-2xl bg-clip-text text-transparent bg-gradient-to-tr from-primary">Contact Us</Link>
      </div>
    </div>
  </nav>
  <div className='flex flex-row gap-4 m4-50'>
    <div className='2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden'> 
    <div className='mr-4'>
      <DopdownComponent></DopdownComponent>
      </div>
    </div>
      <DropdownCart></DropdownCart>
    <ModeToggle></ModeToggle>
   
  </div>
</div>
  )
}

export default Header