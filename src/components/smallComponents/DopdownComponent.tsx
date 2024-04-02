import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { RxHamburgerMenu } from "react-icons/rx";
  import Link from 'next/link';

const DopdownComponent = () => {
  return (
    <div >
        <DropdownMenu>
        
  <DropdownMenuTrigger><RxHamburgerMenu size={32} style={{ color: 'red' }} /></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Navigation</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <Link href={`/`}><DropdownMenuItem>Home</DropdownMenuItem></Link>
    <Link href={`/card`}><DropdownMenuItem>Menu</DropdownMenuItem></Link>
    <DropdownMenuItem>About</DropdownMenuItem>
    <DropdownMenuItem>Contact us</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
    </div>
  )
}

export default DopdownComponent