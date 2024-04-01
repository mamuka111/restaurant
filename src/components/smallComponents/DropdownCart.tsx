import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { FaCartPlus } from "react-icons/fa";

const DropdownCart = () => {
  return (
    <div className="">
        <DropdownMenu>
        
  <DropdownMenuTrigger><FaCartPlus size={32} style={{ color: 'red' }} /></DropdownMenuTrigger>
  <DropdownMenuContent className='h-[200px]'>
    
  </DropdownMenuContent>
</DropdownMenu>
    </div>
  )
}

export default DropdownCart