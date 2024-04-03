'use client'
import {data} from '../../data'
import { Button } from "@/components/ui/button"
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from 'next/link'

export function CarouselSize() {
  return (
  <div className='pt-10 mx-5 sm:px-8 xl:px-16'>
    <Carousel
    plugins={[
      Autoplay({
        delay: 2000,
      }),
    ]}
      opts={{
        align: "start",
      }}
      className=" w-full max-w-[90vw]"
    >
      <CarouselContent>
        {data && data.map(item => (
          <CarouselItem key={item.id} className="md:basis-1/2">
              <Card className="flex items-center justify-center gap-5 flex-column" >
              <CardContent className='flex-column"'>
                <div className='flex flex-col gap-2'>
                  <div className=' h-64 w-full aspect-w-16 aspect-h-9'>
                   <Image height={300} width={300} src={item.image} className='object-cover w-full h-full pt-4' alt={item.description} />
                    
                  </div>
                  <h2 className="text-3xl font-semibold">{item.name}</h2>
                  {/* <Link href={`/${item.id}`}><Button  className='w-32'><p>details</p></Button></Link> */}
                  </div>
                </CardContent>
              </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className='hidden 2xl:block xl:block lg:block md:block sm:hidden'>
      <CarouselPrevious />
      <CarouselNext />
      </div>
    </Carousel>
    </div>
  ) 
}
export default CarouselSize