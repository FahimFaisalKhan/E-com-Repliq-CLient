import React from "react";

import Carousel from "./Carousel/Carousel";
import CarouselPhone from "./Carousel/CarouselPhone";
import Products from "./Products/Products";

const Home = () => {
  return (
    <div>
      <div className="hidden xl:block">
        <Carousel />
      </div>
      <div className="xl:hidden">
        <CarouselPhone />
      </div>

      <Products />
    </div>
  );
};

export default Home;
