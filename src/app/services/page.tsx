import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import img1 from '@/assets/service/1.avif'
import img2 from '@/assets/service/2.avif'
import img3 from '@/assets/service/3.avif'
import img4 from '@/assets/service/4.avif'
import img5 from '@/assets/service/5.avif'
import img6 from '@/assets/service/6.avif'
import img7 from '@/assets/service/7.avif'
import ServiceImageSection from "@/components/pages/service/ServiceImage"
const features = [
    {
        title: "Strategic Partnerships",
        description:
            "Building long-term relationships with trusted suppliers and manufacturers worldwide",
        image: img3,
        alt: "Strategic partnerships"
    },
    {
        title: "Quality Assurance",
        description:
            "Rigorous quality control processes ensuring products meet the highest standards",
        image: img4,
        alt: "Quality assurance"
    },
    {
        title: "Expert Guidance",
        description:
            "Professional consultation and support throughout your entire sourcing journey",
        image: img5,
        alt: "Expert guidance"
    },
    {
        title: "Sustainable Practices",
        description:
            "Committed to environmentally responsible sourcing and ethical business practices",
        image: img6,
        alt: "Sustainable practices"
    }
];
export default function OurServices() {
    return (
        <div className="min-h-screen bg-white">
            {/* About Avana Sourcing Section */}
            <section className="py-16 px-4 md:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div data-aos="fade-up" className="space-y-6">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">About Avana Sourcing</h1>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We are a comprehensive sourcing solutions provider specializing in connecting businesses with
                                high-quality manufacturers and suppliers worldwide. Our expertise spans across multiple industries,
                                ensuring reliable partnerships and exceptional results.
                            </p>
                            <Button className="bg-transparent hover:bg-gray-900 transition-all duration-500 border border-gray-800 text-black hover:text-white px-8 py-5 rounded-full">Learn More</Button>
                        </div>

                        <div data-aos="fade-up" >
                            <Image
                                src={img1}
                                alt="Clothing rack with hangers"
                                width={250}
                                height={300}
                                className="rounded-lg  object-cover h-64 md:h-full w-full"
                            />
                        </div>
                        <div data-aos="fade-up">
                            <Image
                                src={img2}
                                alt="Woman in floral dress"
                                width={250}
                                height={280}
                                className="rounded-lg object-cover h-64 md:h-full w-full"
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* Sourcing Solutions Section */}
            <section className="py-16 px-4 md:px-8 lg:px-16 ">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sourcing Solutions</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Comprehensive services designed to streamline your sourcing process and deliver exceptional results
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
                        {
                            features.map((feature, index) => (
                                <div data-aos="fade-up" key={index} className=" rounded-lg group overflow-hidden">
                                    <Image
                                        src={feature.image}
                                        alt={feature.alt}

                                        width={400}
                                        height={600}
                                        className="w-full group-hover:scale-105 transition-all duration-500 rounded-lg   object-cover"
                                    />
                                    <div className="mt-6">
                                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                        <p className="text-gray-600 w-5/6">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }



                    </div>
                </div>
            </section>

            {/* Partner with Us Section */}
            <section className="py-16 px-4 md:px-8 lg:px-16">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Partner with Us for Sourcing</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Ready to streamline your sourcing process? Get in touch with our team of experts and discover how we can
                            help your business grow.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2  items-center">
                        {/* Contact Form */}
                        <div className="bg-[#E3F2FD] p-8 rounded-lg">
                            <form className="space-y-6">
                                <div>
                                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                                        Your Name
                                    </Label>
                                    <Input id="name" type="text" placeholder="Enter your full name" className="mt-1 bg-white py-6 px-4 placeholder:text-lg" />
                                </div>

                                <div>
                                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                                        Your Email*
                                    </Label>
                                    <Input id="email" type="email" placeholder="Enter your email address" className="mt-1 bg-white py-6 px-4 placeholder:text-lg" />
                                </div>



                                <div>
                                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                                        Your Message*
                                    </Label>
                                    <Textarea id="message" placeholder="Tell us about your sourcing needs..." rows={12} className="mt-1 bg-white pb-20 px-4 placeholder:text-lg" />
                                </div>

                                <Button size={'lg'} className=" bg-primary hover:bg-primary/90 text-white  rounded-full">
                                    Submit Your Inquiry
                                </Button>
                            </form>
                        </div>

                        {/* Image */}
                        <div className="">
                            <Image
                                src={img7}
                                alt="Colorful clothing rack"
                                width={500}
                                height={400}
                                className="rounded-lg rounded-l-none object-cover w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <ServiceImageSection />
        </div>
    )
}
