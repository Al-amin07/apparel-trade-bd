"use client";
import React from 'react';
import Link from 'next/link';
import bgImg1 from '@/assets/header/1.jpg'
import bgImg2 from '@/assets/header/2.jpg'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default function ImageHero() {
    return (

        <div className="h-[700px] w-full">
            <Swiper
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    reverseDirection: true,
                }}
                // mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Pagination, Mousewheel, Autoplay]}
                className="h-[700px]"
            >
                <SwiperSlide className=" ">
                    <section
                        className="relative bg-cover bg-center bg-no-repeat h-[700px] flex items-center justify-end"

                    >
                        <Image src={bgImg1} alt='logo' className='w-full absolute inset-0 h-full object-cover' />



                        <div className="relative  z-10 text-right text-white px-12">
                            <h1 className="text-4xl md:text-4xl font-medium leading-tight">

                                Premier sourcing for global fashion and retail brands.

                            </h1>
                            <p className="mt-4 text-lg md:text-xl ">
                                Connecting global fashion buyers to trusted Bangladeshi partners.                </p>

                            <Link href="/about">
                                <button className="mt-6 px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-blue-700 cursor-pointer transition">
                                    Explore
                                </button>
                            </Link>

                            <div className="mt-6 text-sm tracking-wide">
                                <div className="flex justify-end mb-1 text-white">

                                    {'★★★★★'.split('').map((star, i) => (
                                        <span key={i} className="text-yellow-500 text-lg mx-0.5">
                                            {star}
                                        </span>
                                    ))}
                                </div>
                                <p className="uppercase text-xs font-semibold">
                                    Trusted by leading fashion brands
                                </p>
                            </div>
                        </div>
                    </section>

                </SwiperSlide>
                <SwiperSlide className="">
                    <section
                        className="relative bg-cover bg-center bg-no-repeat h-[700px] flex items-center justify-end"
                    // replace with your actual image path
                    >
                        <Image src={bgImg2} alt='logo' className='w-full absolute inset-0 h-full object-cover' />
                        {/* Overlay */}
                        {/* <div className="absolute inset-0 bg-black/35"></div> */}

                        {/* Content */}
                        <div className="relative z-10 text-right text-white px-12">
                            <h1 className="text-4xl md:text-4xl font-medium leading-tight">
                                {/* Premier Sourcing <br /> Solutions for <br /> Fashion Brands */}

                                Your Global & Local Partner in Sustainable Fashion.


                            </h1>
                            <p className="mt-4 text-lg md:text-xl ">
                                Empowering your brand through ethical sourcing and exceptional quality.                </p>

                            <Link href="/about">
                                <button className="mt-6 px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-blue-700 cursor-pointer transition">
                                    Explore
                                </button>
                            </Link>

                            <div className="mt-6 text-sm tracking-wide">
                                <div className="flex justify-end mb-1 text-white">
                                    {/* 5 stars */}
                                    {'★★★★★'.split('').map((star, i) => (
                                        <span key={i} className="text-yellow-500 text-lg mx-0.5">
                                            {star}
                                        </span>
                                    ))}
                                </div>
                                <p className="uppercase text-xs font-semibold">
                                    Trusted by leading fashion brands
                                </p>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}
