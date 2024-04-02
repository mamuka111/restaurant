import React from 'react'
import {data} from '../../data'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

const CardDetailsPage = () => {
  return (
    <div >
        {data.map(item => (
            <Card key={item.id}>
      
            </Card>
        ))}
    </div>

    )
}

export default CardDetailsPage