// components/ImageTextSection.js (or pages/index.js if it's the main page)

import Image from 'next/image';
import React from 'react';
import img1 from "@/assets/about/1.avif"
import img2 from "@/assets/about/2.avif"
import img3 from "@/assets/about/3.avif"

const Sample = () => {
    // Array of item data
    const items = [

        {
            id: 1,
            image: img1,
            alt: "Close-up of fabric texture, symbolizing ethical sourcing.",
            title: "We'll be honest with you-even when it makes us look bad.",
            description: "Labelling and textile certifications are often fabricated or misleading. We won't lie to you about our products. If it doesn't meet the certification standard, we'll say so.",
        },
        {
            id: 2,
            image: img2,
            alt: "Woman holding dried plants, representing natural products.",
            title: "Our products are healthier than other affordable brands.",
            description: "If regular bananas and organic bananas were the same price, which one would you choose? Organic, obviously. Think of us as your regular-priced organic banana.",
        },
        {
            id: 3,
            image: img3,
            alt: "Hand touching soft fabric, depicting comfort.",
            title: "We're (mostly) sustainable and eco-friendly.",
            description: "We supply corporations, retail stores,and online sellers with high-end quality products at the best prices. When that's not the best choice, we source eco-friendly synthetics—yes, that's a thing!",
        },

    ];

    return (
        <div className="  font-inter mt-20">
            <div className="max-w-6xl mx-auto py-8">
                {/* Section Title */}
                <h2 className="text-4xl font-semibold md:text-5xl text-center mb-12 text-gray-800">Ask For Samples</h2>

                {/* Items Container */}
                <div className="space-y-24">
                    {items.map((item, index) => {

                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={item.id}
                                className={`
                                    flex flex-col items-center   
                                    ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}
                                `}
                            >
                                {/* Image element */}
                                <div className="w-full md:w-1/2  flex-shrink-0">
                                    <Image
                                        src={item.image}
                                        alt={item.alt}
                                        width={600}
                                        height={500}
                                        className="w-full relative z-0 h-auto object-cover "

                                    />
                                </div>

                                {/* Text content element */}
                                <div className={`w-full max-w-lg p-16 bg-white relative top-12 ${`${!isEven ? 'md:left-16' : 'md:right-16'}`} z-20 shadow-md shadow-black/40 md:w-1/2 text-gray-700`}>
                                    <h3 className="text-4xl  mb-4 text-gray-800">{item.title}</h3>
                                    <p className="text-lg leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Sample; 
