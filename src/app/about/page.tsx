import Image from "next/image";
import img1 from '@/assets/New folder/1.avif'
import img2 from '@/assets/New folder/2.avif'
import img3 from '@/assets/New folder/3.avif'
import img4 from '@/assets/New folder/4.avif'
import img5 from '@/assets/New folder/5.avif'
import Sample from "@/components/pages/about/Sample";
import FAQSection from "@/components/pages/about/FaqSection";
export default function AboutPage() {
    return (
        <div className="   px-5 md:px-0 py-10">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div data-aos="fade-up">
                        <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
                            Your Premier Fashion Sourcing Partner
                        </h1>
                        <p className="text-gray-700 mb-4">
                            At Alamin Sourcing, we connect global fashion brands with reliable textile
                            suppliers and manufacturers.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Our Production team is well organized to get styles from the first prototype to bulk production.
                        </p>
                        <p className="text-gray-700 mb-4">
                            We provide end-to-end solutions for all clients right from the product concept to delivery.
                        </p>
                        <p className="text-gray-700 mb-6">
                            We believe in Trust, Honesty, and Transparency.
                        </p>
                        <button className="px-6 py-2 border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white transition rounded-full">
                            Contact
                        </button>
                    </div>
                    <div data-aos="fade-up" className="relative w-full ">
                        <Image
                            src={img1} // Replace with your actual image
                            alt="Hero image"
                            width={600}
                            height={700}
                            className="object-cover rounded-md"
                        />
                        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-[#E3F2FD] bg-opacity-80 p-8 rounded shadow-md min-w-md">
                            <p className="  text-gray-900 text-lg font-semibold">
                                Exceptional service and quality <br /> assurance
                                <br />
                                <span className="font-normal text-gray-800 text-base"> Fashion Brand</span>
                            </p>
                        </div>
                    </div>
                </div>
                <Sample />
            </div>

            <FAQSection />

            {/* Fashion Sourcing Section */}
            <div className="mt-24">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4"> Fashion Sourcing</h2>
                    <p className="text-lg text-gray-600 max-w-lg mx-auto">

                        Bridging international brands with reliable suppliers for quality solutions.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Image src={img2} alt="Item 1" width={500} height={500} className="rounded-md object-cover w-full " />
                    <Image src={img3} alt="Item 2" width={500} height={500} className="rounded-md object-cover w-full " />
                    <Image src={img4} alt="Item 3" width={500} height={500} className="rounded-md object-cover w-full" />
                    <Image src={img5} alt="Item 4" width={500} height={500} className="rounded-md object-cover w-full " />
                </div>
            </div>
        </div>
    );
}
