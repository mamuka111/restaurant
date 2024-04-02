'use client'
import React from 'react'
import {data} from '../../../data'
import CardComponent from '@/components/CardComponent'
import { useParams } from 'next/navigation'
const page = () => {
  const params = useParams();
  console.log(params);
  const element = data.filter(x => String(x.id) === params.id);
  return (
    <div>
      {element[0].description}
    </div>
  )
}

export default page