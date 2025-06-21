import React from 'react';
import Link from 'next/link';
import bgImg from '@/assets/header/pexels-bohlemedia-1884583.jpg'
import Image from 'next/image';
export default function ImageHero() {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat h-[calc(100vh-20px)] flex items-center justify-center"
            style={{ backgroundImage: `url("${bgImg}")` }} // replace with your actual image path
        >
            <Image src={bgImg} alt='logo' className='w-full absolute inset-0 h-full' />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/35"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-medium leading-tight">
                    Premier Sourcing <br /> Solutions for <br /> Fashion Brands
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-xl mx-auto">
                    Bridging Global Brands with reliable suppliers in India.
                </p>

                <Link href="#explore">
                    <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
                        Explore
                    </button>
                </Link>

                <div className="mt-6 text-sm tracking-wide">
                    <div className="flex justify-center mb-1 text-white">
                        {/* 5 stars */}
                        {'★★★★★'.split('').map((star, i) => (
                            <span key={i} className="text-white text-lg mx-0.5">
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
    );
}
