"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import c1 from "@/assets/customer/c1.png";
import c2 from "@/assets/customer/c2.png";
import c3 from "@/assets/customer/c3.png";
import c4 from "@/assets/customer/c4.png";
import c5 from "@/assets/customer/c5.jpg";
import c6 from "@/assets/customer/c6.png";
import c7 from "@/assets/customer/c7.jpg";
import c8 from "@/assets/customer/c8.jpg";
import c9 from "@/assets/customer/c9.png";
import c10 from "@/assets/customer/c10.jpg";
import c11 from "@/assets/customer/c1.png";
import c12 from "@/assets/customer/c2.png";
import Image from "next/image";
export default function OurCustomer() {
    const customerLogos = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12];
    return (
        <div className="py-16">
            <div className="flex  items-center justify-center my-12">
                <div className="border-t border-red-600 w-full max-w-1/3"></div>
                <h2 className="text-5xl px-4  font-bold text-primary">PARTNERS</h2>
                <div className="border-t border-red-600 w-full max-w-1/3"></div>
            </div>


            <Swiper
                slidesPerView={5}
                slidesPerGroup={5}
                spaceBetween={30}
                loop={true}
                // loopedSlides={customerLogos?.length}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 6,
                        slidesPerGroup: 6,
                        spaceBetween: 30,
                    },
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper min-h-[200px]"
            >
                {customerLogos.map((logo, index) => (
                    <SwiperSlide key={index} className="flex ">
                        <Image
                            src={logo}
                            alt={`Customer Logo ${index + 1}`}
                            width={150}
                            height={150}
                            className="object-contain mx-auto "
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
