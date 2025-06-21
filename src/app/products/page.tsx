"use client";
import Image from "next/image"
import Link from "next/link"
import bg from '@/assets/product/header.jpg'
import { IoIosArrowForward } from "react-icons/io";
import { categoryLinks, products } from "@/constant/product.data";
import SingleProduct from "@/components/pages/products/SingleProduct";
import { useState } from "react";
export default function ProductsPage() {
    const [active, setActive] = useState('WOMEN');

    return (
        <div className="min-h-screen relative ">
            {/* Hero Section */}
            <div className="relative">
                <div className="relative h-[400px] overflow-hidden">
                    <Image src={bg} alt="Fashion hero image" fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Navigation */}

            </div>
            <div className="sticky  top-16 bg-[#F1F0E9] z-20 bottom-0 left-0 right-0  ">
                <div className="container mx-auto ">
                    <nav className="flex items-center space-x-8 py-4">
                        <div className="flex items-center space-x-2 text-gray-800 font-medium">
                            <span>OUR PRODUCTS</span>
                            <span className="text-gray-900"><IoIosArrowForward size={26} /></span>
                        </div>
                        {
                            categoryLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={`#${link.name}`}
                                    className={`text-gray-600 hover:text-gray-800 pb-1 font-medium ${active === link.name ? 'border-b-2 border-blue-600 ' : ''}`}
                                    onClick={() => setActive(link.name)}
                                >
                                    {link.name}
                                </Link>
                            ))
                        }

                    </nav>
                </div>
            </div>
            <div className="mt-8">
                {
                    products?.map((product, index) => <SingleProduct key={index} product={product} />)
                }
            </div>
        </div>
    )
}
