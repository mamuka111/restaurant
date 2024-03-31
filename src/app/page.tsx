import Header from "@/components/Header";
import CardComponent from '../components/CardComponent';
import CarouselSize from '../components/CarouselSize'
import {Menu} from '../components/Menu'
import { Dropdown } from "react-bootstrap";
export default function Home() {
  
  return (
    <div className="">
      <Header></Header>
      {/* <Menu></Menu> */}
    <CarouselSize></CarouselSize>
    {/* <CardComponent></CardComponent> */}
    </div>
  );
}
