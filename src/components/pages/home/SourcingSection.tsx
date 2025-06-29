
import Image from 'next/image';
import img1 from '@/assets/header/sourcing.jpg'
import img2 from '@/assets/sourcing/two.avif'
import img3 from '@/assets/sourcing/three.avif'
export default function SourcingSection() {
    const datas = [
        { title: "Strategic Partnerships", description: "Building long-term relationships between buyers and suppliers for sustainable growth and success.", image: img2 },
        { title: "End-to-End Solutions", description: "Comprehensive sourcing for apparel, accessories, and home goods tailored to your brand’s needs.", image: img3 }
    ]
    return (
        <section className="max-w-6xl  mx-auto px-5 lg:px-0  bg-white">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row justify-between ">
                <div className='flex-1'>
                    <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-relaxed">
                        Your Premier <br /> Sourcing Partner
                    </h2>


                </div>
                <div className="flex-1">
                    <p className=" text-gray-600 w-full md:w-2/3 ">
                        Apparel Trade Bangladesh connects global fashion brands with trusted apparel, accessories, and home textile suppliers across Bangladesh; your reliable sourcing partner for quality, compliance, and value.
                    </p>
                    <div className='flex  md:gap-12 mt-12 gap-6'>
                        <div>
                            <p className="text-4xl font-semibold text-primary">99+</p>
                            <p className="text-gray-700">Trusted Partnerships</p>
                        </div>
                        <div>
                            <p className="text-4xl font-semibold text-primary">12+</p>
                            <p className="text-gray-700">Years Experience</p>
                        </div>
                    </div>
                </div>

                {/* Centered Image */}

            </div>
            <div className="mt-10 w-full  rounded-xl overflow-hidden">
                <Image
                    src={img1} // place your image in /public
                    alt="Sourcing partner"
                    width={1200}
                    height={600}
                    className="object-cover w-full max-h-96"
                />
            </div>
            {/* Middle Section */}
            <div className="max-w-4xl mx-auto mt-20 text-center">
                <h3 className="text-2xl md:text-5xl font-medium text-black/90">
                    Sourcing Excellence Delivered
                </h3>
                <p className="mt-5 mx-auto w-2/3 text-gray-600">
                    Bridging international fashion brands with reliable suppliers for innovative and sustainable solutions.
                </p>
            </div>

            {/* Bottom Cards Section */}
            <div className="max-w-6xl mx-auto mt-8 grid md:grid-cols-2 gap-6   rounded-lg">
                {
                    datas.map((data, index) => (
                        <div key={index} className="p-6 bg-[#E3F2FD]">
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">{data.title}</h4>
                            <p className="text-gray-600 text-sm mb-12">
                                {data.description}
                            </p>
                            <div className="overflow-hidden ">
                                <Image
                                    src={data.image}
                                    alt={data.title}
                                    width={500}
                                    height={500}
                                    className="object-cover w-full "
                                />
                            </div>
                        </div>
                    ))
                }

            </div>
        </section>
    );
}
