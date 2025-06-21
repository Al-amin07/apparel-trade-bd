'use client';
import React, { useState } from 'react';
import img from '@/assets/sourcing/getintouch.jpg'
import Image from 'next/image';
export default function GetInTouch() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    return (
        <section
            className="relative  py-16"

        >
            <Image src={img} alt='logo' className='w-full absolute inset-0 h-full' priority={true} />
            <div className="absolute inset-0 "></div>

            <div className="relative z-10 max-w-xl mx-auto px-4 text-center text-white">
                <h2 className="text-3xl md:text-4xl font-medium">Get in Touch</h2>
                <p className="mt-2 w-2/3 mx-auto mb-8 text-gray-200">
                    Contact us for sourcing solutions in fashion and home goods.
                </p>

                <form className="bg-white rounded-lg p-6 text-left text-gray-800 shadow-lg">
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Your Name</label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Your Email*</label>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-1">Your Message*</label>
                        <textarea
                            rows={4}
                            placeholder="Type your message here"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-primary text-white rounded-full py-2 font-semibold hover:bg-blue-800 transition"
                    >
                        Submit Inquiry
                    </button>
                </form>
            </div>
        </section>
    );
}
