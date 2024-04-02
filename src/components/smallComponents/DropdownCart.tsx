import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { FaCartPlus } from "react-icons/fa";
  import { Button } from "@/components/ui/button"


const DropdownCart = () => {
  return (
    <div >
        <DropdownMenu>
        
  <DropdownMenuTrigger><FaCartPlus size={32} style={{ color: 'red' }} /></DropdownMenuTrigger>
  <DropdownMenuContent >
    <div className="flex justify-center flex-column h-[200px] w-64">
    <Button className="w-3/5">Go To Cart Page</Button>
    </div>

  </DropdownMenuContent>
</DropdownMenu>
    </div>
  )
}

export default DropdownCart