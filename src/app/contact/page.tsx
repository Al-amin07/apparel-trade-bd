import React from 'react'

export default function ContactPage() {
    return (
        <div className="mt-24 flex flex-col md:flex-row items-center justify-between  rounded-lg ">
            <div data-aos="fade-up" className="md:w-1/2">
                <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Our Location</h2>
                <p className="text-gray-600 w-5/6 mb-4">Based in India, we connect international fashion brands with reliable suppliers, offering end-to-end sourcing solutions for apparel, accessories, and home goods.</p>
                <div>
                    <h1 className="text-lg  font-semibold text-gray-800 mb-1.5">Bangladesh</h1>
                    <p className="text-gray-700 mb-2">
                        Head Office: Flat # B-2, House # 43, Road # 6, Sector # 13,
                        <br />
                        Uttara, Dhaka-1230, Bangladesh
                    </p>
                </div>
                <div>
                    <h1 className="text-lg  font-semibold text-gray-800 mb-1.5">Hours</h1>
                    <p className="text-gray-700 mb-2">
                        9 AM - 6 PM
                    </p>
                </div>


            </div>
            <div data-aos="fade-up" className="mt-4 w-full md:w-1/2 ">
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d228.04548168483632!2d90.40227528140477!3d23.863800974251664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%20Head%20Office%3A%20Flat%20%23%20B-2%2C%20House%20%23%2043%2C%20Road%20%23%206%2C%20Sector%20%23%2013%2C%20%20%20%20Uttara%2C%20Dhaka-1230%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1750587328212!5m2!1sen!2sbd" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}
