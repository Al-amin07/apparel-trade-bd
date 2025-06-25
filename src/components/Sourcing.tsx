import React from 'react'
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { GrFlag } from "react-icons/gr";
import { GiPentacle } from "react-icons/gi";

const services = [
    {
        icon: <GrFlag className="text-4xl" />,
        title: 'Sourcing Agency',
        description:
            'Soak is a clothing sourcing agency, offering valuable services in supply chain & materials management, garment development and sustainable production.',
    },
    {
        icon: <BiSolidMessageRoundedDetail className="text-4xl" />,
        title: 'Sustainable Consultancy',
        description:
            'Together with Noble Achievers, I help my customers to be able to adapt to changes flexibly. Guiding them on a sustainable path forward.',
    },
    {
        icon: <GiPentacle className="text-4xl" />,
        title: 'Thought through Development',
        description:
            'I focus and help clients on supply chain & materials management, product and garment development, after being active in the field for more than 15 years.',
    },
];

export default function Sourcing() {
    return (
        <div className="bg-[#F2EFEA] py-20 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="flex items-start gap-4">
                        <div className="text-4xl">
                            {service.icon}
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
                            <p className="mt-3  text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    )
}
