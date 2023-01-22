import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "./Carousel.css";
// import required modules
import { EffectCube, Pagination, Navigation } from "swiper";

export default function CarouselPhone() {
  const offersDemo = {
    title: "Chrismas Sell",
    wish: "Merry Chrismas!!",
    offers: [
      {
        offer: "25%",
        textBeforeOffer: "Chirsmas is here. Get",
        textAfterOffer: "discount on all products.",
        image: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      },
      {
        offer: "35%",

        textAfterOffer: "off on laptops of any brand. Lets get electrified!",
        image: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
      },
      {
        offer: "20%",
        textBeforeOffer: "Cell phones of any brand you will get up to",
        image: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      },
    ],
  };
  return (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        navigation={true}
        pagination={true}
        modules={[EffectCube, Pagination, Navigation]}
        className="phoneSwiper relative"
        style={{
          "--swiper-navigation-color": "#D8F3DC",
          "--swiper-pagination-color": "#D8F3DC",
        }}
      >
        {offersDemo.offers.map((o, i) => (
          <SwiperSlide key={i} className="bg-primary-light my-swiper-slide ">
            <div className="w-full  relative flex flex-col items-center justify-between h-[90vh]">
              <div className="flex flex-col justify-center px-2 py-4 gap-y-2 ">
                <h2 className="text-5xl font-bold text-warning">
                  {offersDemo.title}
                </h2>
                <p className="text-2xl text-tertiary-light">
                  {o.textBeforeOffer && o.textBeforeOffer}
                  <span className="text-3xl text-warning font-bold mx-2">
                    {o.offer}
                  </span>
                  {o.textAfterOffer && o.textAfterOffer}
                </p>
                <i className="mt-5 font-semibold text-xl text-[#00296b]">
                  {offersDemo.wish}
                </i>
              </div>
              <div className="min-h-[35%] flex items-end  overflow-hidden">
                <img alt="" className="" src={o.image} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
