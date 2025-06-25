"use client";
import React from 'react';
import Link from 'next/link';
import bgImg1 from '@/assets/header/pexels-bohlemedia-1884583.jpg'
import bgImg2 from '@/assets/header/pexels-nietjuhart-934070.jpg'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default function ImageHero() {
    return (
        // <section
        //     className="relative bg-cover bg-center bg-no-repeat h-[calc(100vh-20px)] flex items-center justify-center"
        //     style={{ backgroundImage: `url("${bgImg}")` }} // replace with your actual image path
        // >
        //     <Image src={bgImg} alt='logo' className='w-full absolute inset-0 h-full' />
        //     {/* Overlay */}
        //     <div className="absolute inset-0 bg-black/35"></div>

        //     {/* Content */}
        //     <div className="relative z-10 text-center text-white px-4">
        //         <h1 className="text-4xl md:text-5xl font-medium leading-tight">
        //             {/* Premier Sourcing <br /> Solutions for <br /> Fashion Brands */}
        //             Premier Sourcing Solutions <br />
        //             For <br />
        //             Retail Apparel and Fashion Industry

        //         </h1>
        //         <p className="mt-4 text-lg md:text-xl ">
        //             Connecting Global Fashion Buyers with Trusted Garment Sourcing Partners in Bangladesh.                </p>

        //         <Link href="/about">
        //             <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
        //                 Explore
        //             </button>
        //         </Link>

        //         <div className="mt-6 text-sm tracking-wide">
        //             <div className="flex justify-center mb-1 text-white">
        //                 {/* 5 stars */}
        //                 {'★★★★★'.split('').map((star, i) => (
        //                     <span key={i} className="text-yellow-500 text-lg mx-0.5">
        //                         {star}
        //                     </span>
        //                 ))}
        //             </div>
        //             <p className="uppercase text-xs font-semibold">
        //                 Trusted by leading fashion brands
        //             </p>
        //         </div>
        //     </div>
        // </section>
        <div className="h-[700px] w-full">
            <Swiper
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
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
                        className="relative bg-cover bg-center bg-no-repeat h-[700px] flex items-center justify-center"
                    // replace with your actual image path
                    >
                        <Image src={bgImg1} alt='logo' className='w-full absolute inset-0 h-full' />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/35"></div>

                        {/* Content */}
                        <div className="relative z-10 text-center text-white px-4">
                            <h1 className="text-4xl md:text-5xl font-medium leading-tight">
                                {/* Premier Sourcing <br /> Solutions for <br /> Fashion Brands */}
                                Premier Sourcing Solutions <br />
                                For <br />
                                Retail Apparel and Fashion Industry

                            </h1>
                            <p className="mt-4 text-lg md:text-xl ">
                                Connecting Global Fashion Buyers with Trusted Garment Sourcing Partners in Bangladesh.                </p>

                            <Link href="/about">
                                <button className="mt-6 px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-blue-700 cursor-pointer transition">
                                    Explore
                                </button>
                            </Link>

                            <div className="mt-6 text-sm tracking-wide">
                                <div className="flex justify-center mb-1 text-white">
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
                <SwiperSlide className="">
                    <section
                        className="relative bg-cover bg-center bg-no-repeat h-[700px] flex items-center justify-center"
                    // replace with your actual image path
                    >
                        <Image src={bgImg2} alt='logo' className='w-full absolute inset-0 h-full' />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/35"></div>

                        {/* Content */}
                        <div className="relative z-10 text-center text-white px-4">
                            <h1 className="text-4xl md:text-5xl font-medium leading-tight">
                                {/* Premier Sourcing <br /> Solutions for <br /> Fashion Brands */}
                                Premier Sourcing Solutions <br />
                                For <br />
                                Retail Apparel and Fashion Industry

                            </h1>
                            <p className="mt-4 text-lg md:text-xl ">
                                Connecting Global Fashion Buyers with Trusted Garment Sourcing Partners in Bangladesh.                </p>

                            <Link href="/about">
                                <button className="mt-6 px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-blue-700 cursor-pointer transition">
                                    Explore
                                </button>
                            </Link>

                            <div className="mt-6 text-sm tracking-wide">
                                <div className="flex justify-center mb-1 text-white">
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
