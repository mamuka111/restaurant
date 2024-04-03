'use client'
import React from 'react'
import {data} from '../../../data'
import { useParams } from 'next/navigation'
const SinglePostPage = () => {
  const params = useParams();
  console.log(params);
  const element = data.filter(x => String(x.id) === params.id);
  return (
    <div>
      {element[0].description}
    </div>
  )
}

export default SinglePostPage