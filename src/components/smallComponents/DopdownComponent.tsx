import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { RxHamburgerMenu } from "react-icons/rx";
const DopdownComponent = () => {
  return (
    <div className="">
        <DropdownMenu>
        
  <DropdownMenuTrigger><RxHamburgerMenu size={32} style={{ color: 'red' }} /></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Navigation</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Menu</DropdownMenuItem>
    <DropdownMenuItem>About</DropdownMenuItem>
    <DropdownMenuItem>Contact us</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
    </div>
  )
}

export default DopdownComponent