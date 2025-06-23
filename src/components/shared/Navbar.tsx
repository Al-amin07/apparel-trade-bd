'use client';
import { useState } from 'react';
import Link from 'next/link';
import { categoryLinks } from '@/constant/product.data';
import logo from '@/assets/logo.jpg'
import Image from 'next/image';
export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Our Products', href: '/products' },
        { name: 'Our Services', href: '/services' },
        { name: 'Contact', href: '/contact' },
        { name: 'About', href: '/about' }
    ]

    return (
        <nav className=" bg-white shadow-lg py-4 px-4 md:px-0 md:py-0 fixed top-0 w-full z-20  dark:bg-gray-800">
            <div className="container  mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <Link href="/" className=''>
                        <Image src={logo} alt="logo" width={100} height={150} className='relative z-30 top-5 border-4 border-black' />                  </Link>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                            aria-label="toggle menu"
                        >
                            {!isOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Navigation Links */}
                <div
                    className={`${isOpen
                        ? 'translate-x-0 opacity-100'
                        : 'opacity-0 -translate-x-full'
                        } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all  duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}
                >
                    {
                        navLinks.map((link) => (
                            <div key={link.name} className="relative px-3 py-3   group ">
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`block  text-gray-700 transition-colors font-medium duration-300 px-2 py-2 transform dark:text-gray-200  hover:text-white hover:bg-primary dark:hover:text-blue-400 `}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                                {
                                    link.name === 'Our Products' &&
                                    <div className="absolute top-full -left-[910px]  hidden  group-hover:flex gap-6 lg:min-w-[1200px] xl:min-w-[1430px]   justify-center    bg-[#204D77] text-white shadow-xl z-40 animate-fade-in py-4">
                                        <div className='max-w-2xl  flex gap-12 item-center'>
                                            <div className='flex-1 flex  items-center jestify-end'>
                                                <h1 className='text-2xl leading-relaxed '>Serving dynamic business needs with innovative and on-trend products</h1>
                                            </div>

                                            <ul className="flex-1 pl-10 border-l border-gray-400">
                                                {/* Dropdown items */}
                                                {
                                                    categoryLinks.map((item) => (
                                                        <li key={item.name} className="mb-2">
                                                            <Link
                                                                href={`/products#${item.name}`}
                                                                className="block px-4 py-2 hover:bg-white hover:text-primary transition duration-300"
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))
                                                }

                                            </ul>
                                        </div>
                                    </div>
                                }
                            </div>

                        ))
                    }



                </div>
            </div>
            <div className='bg-black py-5'>
                <div className='container  mx-auto flex justify-end text-white   '>
                </div>
            </div>
        </nav>
    );
}
