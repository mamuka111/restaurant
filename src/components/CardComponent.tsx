import React from 'react'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import {data} from '../../data'
import { Button } from "@/components/ui/button"

const CardComponent = () => {
  return (
    <div className='flex items-center justify-center flex-wrap gap-5'>
    {data.map(item => (
    <Card key={item.id} className="py-4 w-[300px]">
    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <p className="text-tiny uppercase font-bold">{item.category}</p>
      <small className="text-default-500">price:{item.price}$</small>
      <h4 className="font-bold text-large">{item.name}</h4>
    </CardHeader>
    <CardBody className="flex gap-3 overflow-visible py-2">
      <Image
        alt="Card background"
        className="object-cover rounded-xl h-[200]"
        src={item.image}
        width={270}
      />
         <Button  className='w-32'><p>details</p></Button>
    </CardBody>
  </Card>
    ))}
  </div>
);
}
  

export default CardComponent