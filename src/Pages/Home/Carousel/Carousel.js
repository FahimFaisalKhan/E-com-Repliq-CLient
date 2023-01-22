import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

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

export default function Carousel() {
  return (
    <div className="h-[26rem]   ">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ dynamicBullets: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className=" max-h-[100%] "
        style={{
          "--swiper-navigation-color": "#D8F3DC",
          "--swiper-pagination-color": "#D8F3DC",
        }}
      >
        {offersDemo.offers.map((o, i) => (
          <SwiperSlide key={i} className="w-full  justify-center ">
            <div
              className="w-full h-[26rem] relative flex items-center pl-10 2xl:pl-32"
              style={{
                //   backgroundImage: ` linear-gradient(to right  , rgb(45, 106, 79 ) ,rgb(45, 106, 79 ) 52% ,    rgb(45, 106, 79 , .1) 50% ) ,  url(https://i.dummyjson.com/data/products/1/thumbnail.jpg)`,
                backgroundColor: "rgb(45, 106, 79 )",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right ",
                backgroundSize: "contain ",
              }}
            >
              <div className="flex flex-col gap-y-2">
                <h2 className="text-5xl 2xl:text-7xl font-bold text-warning">
                  {offersDemo.title}
                </h2>
                <p className="text-xl 2xl:text-2xl text-tertiary-light">
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
              <img
                className="absolute top-[50%] -translate-y-[50%] right-12 max-w-[32rem] rounded-2xl flex items-center "
                src={o.image}
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}

        {/* <SwiperSlide className="w-full  justify-center hidden sm:flex">
          <div
            className="w-full h-[100%] relative"
            style={{
              //   backgroundImage: ` linear-gradient(to right  , rgb(45, 106, 79 ) ,rgb(45, 106, 79 ) 52% ,    rgb(45, 106, 79 , .1) 50% ) ,  url(https://i.dummyjson.com/data/products/1/thumbnail.jpg)`,
              backgroundColor: "rgb(45, 106, 79 )",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right ",
              backgroundSize: "contain ",
            }}
          >
            <img
              className="absolute top-[50%] -translate-y-[50%] right-12 max-w-[32rem] rounded-2xl flex items-center "
              src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full flex justify-center sm:hidden">
          <div
            className="w-full h-[80%]"
            style={{
              backgroundImage: ` linear-gradient(to bottom  , rgb(45, 106, 79 ) ,rgb(45, 106, 79 ) 49% ,    rgb(45, 106, 79 , .1) 50% ) ,  url(https://i.dummyjson.com/data/products/1/thumbnail.jpg)`,
              backgroundColor: "rgb(45, 106, 79 )",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right bottom",
              backgroundSize: "contain ",
            }}
          >
            lala
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full  justify-center hidden sm:flex">
          <div
            className="w-full h-[100%] relative"
            style={{
              //   backgroundImage: ` linear-gradient(to right  , rgb(45, 106, 79 ) ,rgb(45, 106, 79 ) 52% ,    rgb(45, 106, 79 , .1) 50% ) ,  url(https://i.dummyjson.com/data/products/1/thumbnail.jpg)`,
              backgroundColor: "rgb(45, 106, 79 )",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right ",
              backgroundSize: "contain ",
            }}
          >
            <img
              className="absolute top-[50%] -translate-y-[50%] right-12 max-w-[32rem] rounded-2xl flex items-center "
              src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full flex justify-center sm:hidden">
          <div
            className="w-full h-[80%]"
            style={{
              backgroundImage: ` linear-gradient(to bottom  , rgb(45, 106, 79 ) ,rgb(45, 106, 79 ) 49% ,    rgb(45, 106, 79 , .1) 50% ) ,  url(https://i.dummyjson.com/data/products/1/thumbnail.jpg)`,
              backgroundColor: "rgb(45, 106, 79 )",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right bottom",
              backgroundSize: "contain ",
            }}
          >
            lala
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
}
