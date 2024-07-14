"use client"
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const modalRef = useRef(null);

    const openSearch = () => {
        setIsSearchOpen(true);
        setIsVisible(true);
    };

    const closeSearch = () => {
        setIsVisible(false);
        setTimeout(() => {
            setIsSearchOpen(false);
        }, 300);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeSearch();
            }
        };

        if (isSearchOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isSearchOpen]);

    return (
        <section className='px-3 bg-black sticky top-0 h-20 flex items-center z-50'>
            <div className='w-full max-w-[901px] mx-auto flex items-center justify-between gap-2'>
                <div>
                    <img src="/assets/profile-avator.svg" alt="profile-avator" className='w-7 xsm:w-8 h-7 xsm:h-8 cursor-pointer' />
                </div>

                <div>
                    <Link href="/" className='bg-white text-sm xsm:text-xl py-2 px-2 xsm:px-4 font-extrabold tracking-wide rounded-md overflow-hidden'>FunMathSheet.com</Link>
                </div>


                {/* Links  */}
                <div className='text-white'>
                    <button onClick={openSearch} type='button' className='flex items-center justify-center'><img src="/assets/toggle-icon.svg" alt="toggle-icon" className='h-5 xsm:h-7 w-6 xsm:w-10' /></button>
                    {isSearchOpen && (
                        <div className={`bg-black bg-opacity-55 fixed top-0 w-full h-screen left-0 flex justify-end transition-opacity duration-150 ease-linear z-50 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                            <div ref={modalRef} className={`bg-black w-full max-w-[480px] px-5 xsm:px-10 py-5 flex items-center overflow-y-auto no-scrollbar relative transition-transform duration-300 ease-in-out transform ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}>
                                <ul className='mt-36'>
                                    <li className='h-20 flex items-center'><Link href="#" className='text-white font-extrabold text-2xl xsm:text-3xl'>Home</Link></li>
                                    <li className='h-20 flex items-center'><Link href="#" className='text-white font-extrabold text-2xl xsm:text-3xl'>Math Worksheet</Link></li>
                                    <li className='h-20 flex items-center'><Link href="#" className='text-white font-extrabold text-2xl xsm:text-3xl'>Membership</Link></li>
                                    <li className='h-20 flex items-center'><Link href="#" className='text-white font-extrabold text-2xl xsm:text-3xl'>Worksheet Sample</Link></li>
                                    <li className='h-20 flex items-center'><Link href="#" className='text-white font-extrabold text-2xl xsm:text-3xl'>FAQ</Link></li>
                                    <li className='h-20 flex items-center'><Link href="/privacy-policy" className='text-white font-extrabold text-2xl xsm:text-3xl'>Privacy Policy</Link></li>
                                    <li className='h-20 flex items-center'><Link href="#" className='text-white font-extrabold text-2xl xsm:text-3xl'>Terms & Conditions</Link></li>
                                    <li className='h-20 flex items-center'><Link href="/about" className='text-white font-extrabold text-2xl xsm:text-3xl'>About</Link></li>
                                    <li className='h-20 flex items-center'><Link href="/contact" className='text-white font-extrabold text-2xl xsm:text-3xl'>Contact</Link></li>
                                </ul>
                                <button onClick={closeSearch} className='absolute top-8 right-8'><img src="/assets/close.svg" alt="close" className='w-6 h-6' /></button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Header
