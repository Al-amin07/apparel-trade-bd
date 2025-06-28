import Image from 'next/image'
import React from 'react'
import img1 from "@/assets/service/1.jpg"
import img2 from "@/assets/service/2.jpg"
import img3 from "@/assets/service/3.jpg"
import img4 from "@/assets/service/4.jpg"
import img5 from "@/assets/service/5.jpg"
import img6 from "@/assets/service/4.jpg"
export default function ServiceImageSection() {
    const serviceData = [
        {
            title: "Product, Compliance and Ethical Sourcing",
            description: "We work closely with our clients to understand their specific requirements and provide tailored solutions that meet their unique needs. Our team of experts has extensive experience in product development, compliance, and ethical sourcing, ensuring that all products meet the highest standards of quality, sustainability, and social responsibility. We work with a network of trusted suppliers and manufacturers to ensure that all products are produced ethically and sustainably.",
            imageSrc: img1,
            imageAlt: "Hands working on manufacturing process"
        },
        {
            title: "Design & Development Support",
            description: "Our design and development team works closely with clients to bring their vision to life. From initial concept sketches to final product development, we provide comprehensive support throughout the entire design process, ensuring that every detail meets our clients' specifications and quality standards.",
            imageSrc: img2,
            imageAlt: "Design sketches and development materials"
        },
        {
            title: "Supplier Coordination",
            description: "We work with a network of trusted suppliers and manufacturers to ensure that all products are produced to the highest standards. Our supplier coordination services include quality control, logistics management, and ongoing relationship management to ensure smooth operations and consistent quality delivery.",
            imageSrc: img3,
            imageAlt: "Supplier coordination"
        },
        {
            title: "Cost Efficiency",
            description: "We understand the importance of cost efficiency in today's competitive market. Our team works diligently to optimize processes, reduce waste, and find cost-effective solutions without compromising on quality. We provide detailed cost analysis and recommendations to help our clients achieve their financial goals.",
            imageSrc: img4,
            imageAlt: "Hands working on cost efficiency analysis"
        },
        {
            title: "On-Time Delivery.",
            description: "We understand the importance of deadlines and work hard to ensure your orders are delivered on time.",
            imageSrc: img5,
            imageAlt: "Hands working on cost efficiency analysis"
        },
        {
            title: "Logistics & Shipping",
            description: " From packaging to timely shipping, we handle all logistics, ensuring your products reach you without delay.",
            imageSrc: img6,
            imageAlt: "Hands working on cost efficiency analysis"
        },

    ]
    return (
        <div className="min-h-screen bg-white">
            {
                serviceData.map((service, index) => (
                    <section key={index} className={`py-16 px-6 lg:px-12 ${index % 2 !== 0 ? 'bg-gray-50' : ''}`}>
                        <div className="max-w-6xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                                <div className={`space-y-6 ${index % 2 === 0 ? '' : 'lg:order-2'}`}>
                                    <div className="text-sm text-gray-600 uppercase tracking-wide">Our Services</div>
                                    <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">{service.title}</h2>
                                    <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
                                </div>
                                <div className={`relative ${index % 2 === 0 ? '' : 'lg:order-1'}`}>
                                    <div className="aspect-[4/3] relative overflow-hidden cursor-pointer">
                                        <Image
                                            src={service.imageSrc}
                                            alt={service.imageAlt}
                                            fill
                                            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                        />
                                        <div className=''>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))
            }

        </div>
    )
}
