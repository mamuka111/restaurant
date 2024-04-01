import Header from "@/components/Header";
import CardComponent from '../components/CardComponent';
import CarouselSize from '../components/CarouselSize'
import {Menu} from '../components/Menu'
import { Dropdown } from "react-bootstrap";
import MenuPage from "./MenuPage";
import CartCounter from "@/components/smallComponents/CartCounter";
export default function Home() {
  
  return (
    <div className="">
      {/* <CartCounter></CartCounter> */}
      <Header></Header>
      {/* <Menu></Menu> */}
    {/* <CarouselSize></CarouselSize> */}
    {/* <MenuPage></MenuPage> */}
    <CardComponent></CardComponent>
    </div>
  );
}
