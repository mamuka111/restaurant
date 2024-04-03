'use client'
import React from 'react'
import {data} from '../../../data'
import { useParams } from 'next/navigation'
import Image from 'next/image'
const SinglePostPage = () => {
  const params = useParams();
  console.log(params);
  const element = data.filter(x => String(x.id) === params.id);
  return (
    <div className='mt-16 flex justify-center'>
      <div className='flex flex-col  md:w-1/2  w-11/12 justify-center items-center gap-4' >
      <Image src={element[0].image} width={500} height={500} alt='image not found'></Image>
      <p className='w-100% '>
      {element[0].description}
      </p>
      </div>
      <div className='flex flex-col  md:w-1/2 w-11/12 justify-center items-center gap-4'>

      </div>
    </div>
  )
}

export default SinglePostPage