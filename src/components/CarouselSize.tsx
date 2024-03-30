
import {data} from '../../data'
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
    <Carousel
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
                  <img src={item.image} className='h-[300]' height={300} width={300} alt={item.description} />  
                  <h2 className="text-3xl font-semibold">{item.name}</h2>
                  <Link href={`/${item.id}`}>Go to page</Link>
                </CardContent>
              </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ) 
}
export default CarouselSize