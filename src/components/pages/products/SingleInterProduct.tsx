import { IInterProduct } from '@/constant/product.data'
import Image from 'next/image'
import React from 'react'
import { FiArrowDownRight } from 'react-icons/fi'

export default function SingleInterProduct({ product }: { product: IInterProduct }) {
  return (
    <div id={product.name} className="container scroll-mt-32 mx-auto bg-white/60 py-8">
      <div className="container mx-auto bg-white/60 py-8">
        <div className="lg:col-span-1">

        </div>
        <div className="grid lg:grid-cols-3 items-center bg-[#EEEDED]  p-16 gap-12">
          <div className=" p-5 min-h-[400px] bg-white group cursor-pointer shadow-lg rounded-md shadow-black/30 hover:bg-primary hover:text-white transition-all duration-300 ">
            <div className='border-2 rounded-md border-primary inline-block  transition-all duration-300 group-hover:border-white p-2'>
              <FiArrowDownRight className="text-primary group-hover:text-white" size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-semibold my-4">{product.name}</h2>
              <p className="">{product.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sequi, ullam blanditiis adipisci praesentium ducimus repellendus aperiam animi facilis est.</p>
            </div>
          </div>

          <div className="">
            <Image src={product.img2} width={500} height={500} alt="Product image" className="w-full min-h-[400px] object-cover rounded-md" />
          </div>
          <div className="">
            <Image src={product.img2} width={500} height={500} alt="Product image" className="w-full min-h-[400px] object-cover rounded-md" />
          </div>

        </div>
      </div>
    </div>
  )
}
