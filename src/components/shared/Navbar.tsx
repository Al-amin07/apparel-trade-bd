'use client';
import { useState } from 'react';
import Link from 'next/link';
import { categoryLinks } from '@/constant/product.data';
import { usePathname } from 'next/navigation';
// import logo from '@/assets/logo.jpg'
// import Image from 'next/image';
export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Products', href: '/products' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' },
        { name: 'About', href: '/about' }
    ]
    const pathname = usePathname();
    console.log('Current Pathname:', pathname);
    return (
        <nav className=" bg-white shadow-lg py-4 px-4 md:px-0 md:py-0 fixed top-0 w-full z-20  dark:bg-gray-800">
            <div className="max-w-6xl  mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <Link href="/" className='font-bold bg-white border-black py-3 px-3 text-center text-lg border-4 relative z-30 top-5 uppercase'>
                        {/* <Image src={logo} alt="logo" width={100} height={150} className='relative z-30 top-5 border-4 border-black' />                  */}
                        Apparel <br /> Trade
                    </Link>

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
                            <div key={link.name} className=" px-3 py-3   group ">
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`block  text-gray-700 transition-colors font-medium duration-300 px-2 py-2 transform    `}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                    {
                                        pathname !== link.href ? <span className='h-0.5 w-0 bg-black block group-hover:w-full transition-all duration-700'></span> :
                                            <span className='h-0.5 w-full bg-black block transition-all duration-700'></span>
                                    }
                                </Link>
                                {/* Main */}
                                {/* {
                                    link.name === 'Products' &&
                                    <div className="absolute top-full -left-[24%]  -translate-x-1/2 hidden group-hover:flex gap-6 min-w-screen justify-center bg-[#204D77] text-white shadow-xl z-40 animate-fade-in py-4 px-6">
                                        <div className='max-w-4xl w-full flex gap-12 items-center'>
                                            <div className='flex-1 flex items-center'>
                                                <h1 className='text-2xl leading-relaxed'>
                                                    Serving dynamic business needs with innovative and on-trend products
                                                </h1>
                                            </div>

                                            <ul className="flex-1 pl-10 border-l border-gray-400">
                                                {categoryLinks.map((item) => (
                                                    <li key={item.name} className="mb-2">
                                                        <Link
                                                            href={`/products#${item.name}`}
                                                            className="block px-4 py-2 hover:bg-white hover:text-primary transition duration-300"
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                } */}

                                {/* Example */}
                                {/* <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:flex w-screen max-w-6xl bg-[#204D77] text-white shadow-xl z-40 animate-fade-in py-6 px-10">
                                    <div className="w-full flex gap-12 items-start">
                                        <div className="w-1/2 pr-6 border-r border-gray-500">
                                            <h1 className="text-3xl font-bold leading-snug">
                                                Empowering brands with trend-forward product lines.
                                            </h1>
                                            <p className="mt-2 text-gray-300">Explore categories that match your business goals.</p>
                                        </div>
                                        <ul className="w-1/2 grid grid-cols-2 gap-4 pl-6">
                                            {categoryLinks.map((item) => (
                                                <li key={item.name}>
                                                    <Link
                                                        href={`/products#${item.name}`}
                                                        className="block px-4 py-2 rounded hover:bg-white hover:text-primary transition"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div> */}
                                {/* Style 1 */}
                                {/* <div className="absolute top-full -left-[24%]  -translate-x-1/2 hidden group-hover:flex gap-6 min-w-screen justify-center bg-[#204D77] text-white shadow-xl z-40 animate-fade-in py-16 px-12">
                                    <h2 className="text-2xl font-semibold leading-snug max-w-2xl text-center">
                                        Serving dynamic business needs with innovative and on-trend products
                                    </h2>
                                    <ul className="grid grid-cols-3 gap-4 mt-6 w-full max-w-4xl">
                                        {categoryLinks.map((item) => (
                                            <li key={item.name}>
                                                <Link
                                                    href={`/products#${item.name}`}
                                                    className="block px-4 py-3 text-center bg-white text-primary hover:bg-primary hover:text-white transition rounded-md shadow"
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div> */}

                                {/* Style 2 */}
                                {/* <div className="absolute top-full -left-[24%]  -translate-x-1/2 hidden group-hover:flex gap-6 min-w-screen justify-center bg-[#204D77] text-white shadow-xl z-40 animate-fade-in py-16 px-12">
                                    <div className="max-w-7xl mx-auto">
                                        <h2 className="text-3xl font-semibold mb-6 text-center">
                                            Serving dynamic business needs with innovative and on-trend products
                                        </h2>
                                        <ul className="grid grid-cols-4 gap-6 mt-4">
                                            {categoryLinks.map((item) => (
                                                <li key={item.name}>
                                                    <Link
                                                        href={`/products#${item.name}`}
                                                        className="block px-4 py-3 rounded bg-white text-primary hover:bg-primary hover:text-white transition text-center shadow"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div> */}

                                {/* Style 3 */}
                                <div className="absolute top-full -left-[24%]  -translate-x-1/2 hidden group-hover:flex gap-6 min-w-screen justify-center bg-[#204D77] text-white shadow-xl z-40 animate-fade-in py-16 px-12">
                                    <h2 className="text-xl font-bold mb-4 text-center leading-relaxed">
                                        Serving dynamic business needs with <br /> innovative and on-trend products
                                    </h2>
                                    <ul className="space-y-2">
                                        {categoryLinks.map((item) => (
                                            <li key={item.name}>
                                                <Link
                                                    href={`/products#${item.name}`}
                                                    className="block px-4 py-2 hover:bg-white hover:text-primary transition rounded "
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Style 4 */}
                                {/* <div className="absolute top-full -left-[24%]  -translate-x-1/2 hidden group-hover:flex gap-6 min-w-screen justify-center bg-[#204D77] text-white shadow-xl z-40 animate-fade-in py-16 px-12">
                                    <h2 className="text-3xl font-bold text-center mb-4 drop-shadow-md">
                                        Serving dynamic business needs with
                                        <br /> innovative and on-trend products
                                    </h2>
                                    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                                        {categoryLinks.map((item) => (
                                            <li key={item.name}>
                                                <Link
                                                    href={`/products#${item.name}`}
                                                    className="block px-4 py-3 text-center rounded-xl bg-white/20 hover:bg-white hover:text-primary text-white hover:shadow-lg backdrop-blur transition-all duration-300"
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div> */}







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
