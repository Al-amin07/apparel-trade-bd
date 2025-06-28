import { interProducts } from '@/constant/product.data';
import Link from 'next/link';
import React from 'react'
import { FiArrowDownRight } from "react-icons/fi";



export default function CardItems() {
    return (
        <div className='grid max-w-7xl mt-48 mx-auto mb-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 md:p-0'>
            {
                interProducts.map((division, index) => (
                    <Link href={`/products/international#${division.name}`} key={index} className=" p-5 group cursor-pointer shadow-lg rounded-md shadow-black/30 hover:bg-primary hover:text-white transition-all duration-300 ">
                        <div className='border-2 rounded-md border-primary inline-block  transition-all duration-300 group-hover:border-white p-2'>
                            <FiArrowDownRight className="text-primary group-hover:text-white" size={24} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold my-4">{division.name}</h2>
                            <p className="">{division.description}</p>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}
