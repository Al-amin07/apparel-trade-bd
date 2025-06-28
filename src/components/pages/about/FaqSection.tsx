// components/FAQSection.tsx
'use client'; // This directive is necessary if you're using the App Router and want to use client-side features like useState

import React from 'react';
import Image from 'next/image';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'; // Adjust path if necessary based on your shadcn setup
import img1 from "@/assets/about/4.avif"
const FAQSection: React.FC = () => {
    const faqs = [
        {
            question: 'Design',
            answer:
                'All our products are designed in Canada, and manufactured in one of our partner factories in Turkey, India, Israel, or Asia.',
        },
        {
            question: 'Quality',
            answer:
                'We adhere to rigorous quality control standards to ensure our products meet the highest benchmarks for durability and performance.',
        },
        {
            question: 'Sustainability',
            answer:
                'We are committed to eco-friendly practices, sourcing materials responsibly and minimizing our environmental footprint in production.',
        },
        {
            question: 'Affordability',
            answer:
                'We strive to offer premium quality at competitive prices, making high-end products accessible without compromising on value.',
        },
    ];

    return (
        <div className="flex flex-col mt-16 md:flex-row-reverse  bg-white">
            {/* Left Section - Image */}
            <div className="md:w-1/2  overflow-hidden relative ">
                <Image
                    src={img1} // Ensure you have this image in your public/images folder
                    alt="Old building facade with wooden doors and lush vegetation"
                    width={700}
                    height={500}
                    quality={90}
                    className="object-cover w-full"
                />
            </div>

            {/* Right Section - FAQ Content */}
            <div className="md:w-1/2 bg-neutral-50 p-8 md:p-16 flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-normal text-neutral-800 mb-8 tracking-tight">
                    Frequently Asked Questions
                </h2>

                {/* Shadcn Accordion */}
                <Accordion type="single" collapsible defaultValue="item-0">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={`item-${index}`} value={`item-${index}`} className="border-b border-neutral-300">
                            <AccordionTrigger className="text-xl font-light text-neutral-800 hover:no-underline py-4">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-neutral-600 text-base leading-relaxed pb-4">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
};

export default FAQSection;