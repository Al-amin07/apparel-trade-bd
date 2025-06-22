/* eslint-disable @typescript-eslint/no-explicit-any */
import { IProduct } from '@/constant/product.data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'motion/react'
export default function SingleProduct({ product }: { product: IProduct }) {
    return (
        <div id={product.title} className="container   mx-auto bg-white/60 py-8">
            <div className="lg:col-span-1">
                <div className="relative h-[450px] overflow-hidden">
                    <Image src={product.img} alt="Women's fashion store" fill className="object-cover" />

                </div>
            </div>
            <div className="grid lg:grid-cols-4 bg-[#EEEDED] py-12 px-20 gap-8">



                <div className='relative p-4'>
                    <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="h-[270px] -translate-y-40 bg-[#024770] flex items-center justify-center">
                        <h2 className="text-white/90 text-2xl">{product.title}</h2>
                    </motion.div>
                </div>
                <div className="lg:col-span-3 grid md:grid-cols-3 gap-8">

                    {
                        product?.categories?.map((category, index) => <div key={index} className="space-y-4">
                            <h3 className="font-semibold text-lg text-gray-900 mb-3">{category.category}</h3>
                            <ul className="space-y-1">
                                {category.items.map((item, index) => (
                                    <li key={index}>
                                        <Link href="#" className="text-sm text-gray-700 hover:text-blue-600">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>)
                    }



                </div>
            </div>
        </div>
    )
}
