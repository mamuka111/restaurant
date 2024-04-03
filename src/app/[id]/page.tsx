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
    <div className='mt-16'>
      <div className='flex flex-col w-1/2 justify-center items-center' >
      <Image src={element[0].image} width={500} height={500} alt='image not found'></Image>
      <p className='w-96 text-slate-300'>
      {element[0].description}
      </p>
      </div>
    <div>

    </div>
    </div>
  )
}

export default SinglePostPage