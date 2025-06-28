
import { interProducts } from '@/constant/product.data';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa6';

export default function Footer() {
    return (
        <footer className="bg-black/90 text-white py-10 px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-4 ">
                {/* Left */}
                <div>
                    <h4 className="text-lg font-semibold mb-2">APPAREL TRADE BD.
                    </h4>
                    <p className="text-sm mb-4">
                        Bridging global fashion brands with trusted <br /> Bangladeshi suppliers and world-class excellence
                    </p>
                    <div className="flex space-x-4 text-xl">
                        <FaFacebookF />
                        <FaInstagram />

                    </div>
                </div>
                <div>
                    <h4 className="text-sm font-semibold mb-1 uppercase">Our Products</h4>
                    <ul>{
                        interProducts.map((product) => (
                            <li key={product.name} className="mb-1">
                                <Link href={`/products/international#${product.name}`} className="text-sm hover:text-primary transition">
                                    {product.name}
                                </Link>
                            </li>
                        ))
                    }</ul>
                </div>
                {/* Middle */}
                <div>
                    <h4 className="text-sm font-semibold mb-1 uppercase">Head Office</h4>
                    <p className="text-sm">+91-9899062333</p>
                    <p className="text-sm">vandana@avanasourcing.com</p>
                </div>

                {/* Right */}
                <div>
                    <h4 className="text-sm font-semibold mb-1 uppercase">Partnerships</h4>
                    <form className="mt-2">
                        <input
                            type="email"
                            placeholder="Your email for inquiries"
                            className="w-full mb-3 px-4 py-2 rounded-full bg-white text-black"
                        />
                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-blue-600 text-white py-2 rounded-full font-medium transition"
                        >
                            Submit your request now
                        </button>
                    </form>
                </div>
            </div>

            <div className="max-w-6xl mx-auto text-sm text-center mt-10 text-gray-300">
                © APPAREL TRADE BD. All Rights Reserved. | Manufactured in Bangladesh. Crafted for global brands.
            </div>
        </footer>
    );
}
