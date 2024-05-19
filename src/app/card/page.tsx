'use client'
import React from 'react'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import {data} from '../../../data'
import Link from 'next/link';
import { FaLariSign } from "react-icons/fa6";
import { FaEuroSign } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
// import CartCounter from '../../components/smallComponents/CartCounter'

const CardComponent = () => {
  const [selectedOption, setSelectedOption] = useState(null)
  return (
    <div className=' flex-col'>
      <div className='flex items-center justify-start 2xl:ml-32 xl:ml-0 lg:ml-32 md:ml-16 sm:ml-16 gap-5 h-full mt-16'> 
      
      <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Filter" />
  </SelectTrigger>
  <SelectContent>
  <SelectItem value="everything">Everithing</SelectItem>
    <SelectItem value="Main Dish">Main Dish</SelectItem>
    <SelectItem value="Side Dish">Side Dish</SelectItem>
    <SelectItem value="Drinks">Drinks</SelectItem>
    <SelectItem value="Dessert">Desserts</SelectItem>
  </SelectContent>
</Select>
</div>
<div className='flex items-center justify-center flex-wrap gap-5 '>
    {data.map(item =>(
      
    <Card key={item.id} className="py-4 w-[300px] ">
    <CardHeader className="pb-0 pt-2 px-4  flex-col items-start">
      <div className='flex flex-col '>
      <p className="text-tiny uppercase font-bold">{item.category}</p>
      <small className="text-default-500">price:{item.price}$</small>
      <h4 className="font-bold text-large">{item.name}</h4>
      </div>
    </CardHeader>
    <CardBody className="flex gap-3 overflow-visible py-2">
      <Image
        alt="Card background"
        className="object-cover rounded-xl h-[200]"
        src={item.image}
        width={270}
      />
      <div className='flex justify-start '>
      <Link href={`/${item.id}`}><Button  className='w-32'><p>details</p></Button></Link>
         <Button  className='w-24'><p>add to cart</p></Button>
         </div>
    </CardBody>
  </Card>
    ))}
    </div>
  </div>
  
);
}
  

export default CardComponent