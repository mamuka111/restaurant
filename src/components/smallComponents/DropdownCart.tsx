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
    <div >
        <DropdownMenu>
        
  <DropdownMenuTrigger><FaCartPlus size={32} style={{ color: 'red' }} /></DropdownMenuTrigger>
  <DropdownMenuContent >
    <div className="h-[200px] w-64">

    </div>

  </DropdownMenuContent>
</DropdownMenu>
    </div>
  )
}

export default DropdownCart