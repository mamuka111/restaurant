"use client";
import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { data } from "../../../data";
import Link from "next/link";
import { FaLariSign } from "react-icons/fa6";
import { FaEuroSign } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
// import CartCounter from '../../components/smallComponents/CartCounter'

const CardComponent = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const [searchCommand, setSearchCommand] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [prevFilteredData, setPrevFilteredData] = useState(data);

  const handleFiltering = (category: string) => {
    if (category === "everything") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) => item.category === category);
      setFilteredData(filtered);
    }
  };
  const handleSearch = (value: string) => {
    const search = value;
    if (search === "") {
      setFilteredData(data);
    } else {
      const filtered = filteredData.filter((item) => {
        return (
          item.name.toLowerCase().includes(search) ||
          item.category.toLowerCase().includes(search)
        );
      });
      setFilteredData(filtered);
    }
  };
  return (
    <div className=" flex-col">
      <div className="flex items-center justify-between 2xl:mx-32 xl:mx-0 lg:mx-32 md:mx-12 sm:mx-8 gap-5 h-full mt-16">
        <Select
          onValueChange={(value) => {
            handleFiltering(value);
          }}>
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
        <Input
          className="max-w-[300px] 2xl:w-[300px] xl:[300px] lg:[100px] md:[100px] sm:[200px]"
          placeholder="Search people"
          value={searchCommand}
          onChange={(e) => {
            setSearchCommand(e.target.value);
            handleSearch(e.target.value);
          }}
        />
      </div>
      <div className="flex items-center justify-center flex-wrap gap-5 ">
        {filteredData.map((item) => (
          <Card key={item.id} className="py-4 w-[300px] ">
            <CardHeader className="pb-0 pt-2 px-4  flex-col items-start">
              <div className="flex flex-col ">
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
              <div className="flex justify-start ">
                <Link href={`/${item.id}`}>
                  <Button className="w-32">
                    <p>details</p>
                  </Button>
                </Link>
                <Button className="w-24">
                  <p>add to cart</p>
                </Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
