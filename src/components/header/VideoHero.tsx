// 'use client';
import React from 'react';
import Link from 'next/link';

export default function VideoHero() {
    return (
        <section className="relative h-screen overflow-hidden">
            {/* Background video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/your-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Premier Sourcing <br /> Solutions for <br /> Fashion Brands
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-xl">
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
