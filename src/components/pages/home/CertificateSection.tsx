import React from "react";
import c1 from "@/assets/certificate/C1.png";
import c2 from "@/assets/certificate/C2.png";
import c3 from "@/assets/certificate/C3.png";
import c4 from "@/assets/certificate/C4.png";
import Image from "next/image";
const CertificationSection = () => {
    const certifications = [
        {
            name: "amfori BSCI",
            logo: c1,
            alt: "amfori BSCI logo",
            description: "STANDARD 100 by OEKO-TEX® is one of the world's best-known labels for textiles tested for harmful substances.",
        },
        {
            name: "OEKO-TEX®",
            logo: c2,
            alt: "OEKO-TEX® logo",
            description: "STANDARD 100 by OEKO-TEX® is one of the world's best-known labels for textiles tested for harmful substances.",
        },
        {
            name: "Global Recycled Standard",
            logo: c3,
            alt: "Global Recycled Standard logo",
            description: "STANDARD 100 by OEKO-TEX® is one of the world's best-known labels for textiles tested for harmful substances.",
        },
        {
            name: "Sedex",
            logo: c4,
            alt: "Sedex logo",
            description: "STANDARD 100 by OEKO-TEX® is one of the world's best-known labels for textiles tested for harmful substances.",
        },
        {
            name: "amfori BSCI",
            logo: c1,
            alt: "amfori BSCI logo",
            description: "STANDARD 100 by OEKO-TEX® is one of the world's best-known labels for textiles tested for harmful substances.",
        },

    ];

    return (
        <section className="w-full max-w-7xl mx-auto  font-inter">
            {/* Header Section */}

            <div className="text-right ">
                <h2 className="text-5xl mb-4  font-bold text-primary ">
                    Trusted Certifications & <br /> Partner Accreditations
                </h2>
                <p className="max-w-2xl ml-auto text-gray-600">The certifications we hold across our supply chain, products, and ethical practices give your brand the confidence to source through trusted partners and industry-leading standards.</p>
            </div>


            {/* Logos Section */}
            <div className=" py-12 ">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="bg-white cursor-pointer p-4   flex flex-col  items-center justify-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
                        >
                            <Image
                                src={cert.logo}
                                alt={cert.alt}
                                className="max-w-full max-h-full object-contain  rounded-md h-[130px]"
                                width={450}
                                height={450}
                            />
                            <h1 className=" text-lg font-semibold">{cert.name}</h1>
                            <p className="text-xs text-gray-600 text-center mt-4">{cert.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificationSection;
