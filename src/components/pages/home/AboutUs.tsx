// components/AboutCompany.tsx
import Image from 'next/image';
import logo from "@/assets/logo.jpg"
export default function AboutUs() {
    return (
        <section className=" max-w-6xl  mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left: Image */}
                <div data-aos="fade-up" className="flex justify-center">
                    <Image
                        src={logo}// Place the image in your public folder
                        alt="Inaya Sourcing Team Illustration"
                        width={500}
                        height={500}
                        className="min-w-full h-auto"
                        priority
                    />
                </div>

                {/* Right: Text Content */}
                <div data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-2">
                        The Company
                    </h2>
                    <h3 className="text-xl md:text-2xl text-primary font-semibold  mb-4">
                        Apparel Trade BD.
                    </h3>
                    <p className="italic text-sm text-gray-600 mb-4">
                        A Global Apparel Buying House
                    </p>
                    <p className="text-gray-700 mb-4">
                        <span className="text-[#e94e4e] font-semibold">✓</span>   Apparel Trade BD. is a well-established reputed Garments buying house in Dhaka, Bangladesh. We have an experienced and hardworking merchandising, procurement & quality control team, which can provide you with a complete service supplying quality garment at competitive prices.
                    </p>
                    <p className="text-gray-700">
                        The company is a Buying and Sourcing agency from Bangladesh offers its international buyers, the ultimate solution for sourcing excellent quality Garments, Apparel Accessories from Bangladesh and Internationally, and our valued expertise and experience in sourcing and technical fields have helped us gain an in-depth understanding of Garments, Apparels and Fashion Accessories.{' '}
                        <a href="#" className="text-[#e94e4e] hover:underline">Find out more »</a>
                    </p>
                </div>
            </div>
        </section>
    );
}
