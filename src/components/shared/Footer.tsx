
import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
    return (
        <footer className="bg-black/90 text-white py-10 px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 ">
                {/* Left */}
                <div>
                    <h4 className="text-lg font-semibold mb-2">Sourcing</h4>
                    <p className="text-sm mb-4">
                        Bridging fashion brands with reliable <br className='hidden md:block' /> suppliers globally.
                    </p>
                    <div className="flex space-x-4 text-xl">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTiktok />
                        <FaXTwitter />
                    </div>
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

            <div className="max-w-6xl mx-auto text-sm mt-10 text-gray-300">
                © 2024. All rights reserved.
            </div>
        </footer>
    );
}
