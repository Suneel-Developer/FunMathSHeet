import React from 'react'
import Link from 'next/link'

const SubFooter = () => {
    return (
        <section className='bg-black py-8 px-3 border-b border-white border-opacity-20'>
            <div className='max-w-[800px] mx-auto w-full flex flex-col-reverse md:flex-row gap-5 items-center justify-between'>
                <ul className=' max-w-[328px] w-full flex flex-col gap-[10px]'>
                    <li className='text-center bg-blue-100 px-2 flex items-center justify-center rounded-[50px] h-[49px] text-base font-bold'>
                        <Link href="/">Home</Link>
                    </li>

                    <li className='text-center bg-white px-2 flex items-center justify-center rounded-[50px] h-[49px] text-base font-bold hover:bg-blue-100 transition-colors duration-200 cursor-pointer'>
                        <Link href="/math-worksheet" className='w-full text-center'>Math Worksheet</Link>
                    </li>

                    <li className='text-center bg-white px-2 flex items-center justify-center rounded-[50px] h-[49px] text-base font-bold hover:bg-blue-100 transition-colors duration-200 cursor-pointer'>
                        <Link href="#" className='w-full text-center'>Membership</Link>
                    </li>

                    <li className='text-center bg-white px-2 flex items-center justify-center rounded-[50px] h-[49px] text-base font-bold hover:bg-blue-100 transition-colors duration-200 cursor-pointer'>
                        <Link href="#" className='w-full text-center'>Worksheet Sample</Link>
                    </li>

                    <li className='text-center bg-white px-2 flex items-center justify-center rounded-[50px] h-[49px] text-base font-bold hover:bg-blue-100 transition-colors duration-200 cursor-pointer'>
                        <Link href="#" className='w-full text-center'>FAQ</Link>
                    </li>

                    <li className='text-center bg-white px-2 flex items-center justify-center rounded-[50px] h-[49px] text-base font-bold hover:bg-blue-100 transition-colors duration-200 cursor-pointer'>
                        <Link href="#" className='w-full text-center'>Privacy Policy</Link>
                    </li>

                    <li className='text-center bg-white px-2 flex items-center justify-center rounded-[50px] h-[49px] text-base font-bold hover:bg-blue-100 transition-colors duration-200 cursor-pointer'>
                        <Link href="/terms-condition" className='w-full text-center'>Terms & Condition</Link>
                    </li>

                    <li className='text-center bg-white px-2 flex items-center justify-center rounded-[50px] h-[49px] text-base font-bold hover:bg-blue-100 transition-colors duration-200 cursor-pointer'>
                        <Link href="/about" className='w-full text-center'>About</Link>
                    </li>
                    <li className='text-center bg-white px-2 flex items-center justify-center rounded-[50px] h-[49px] text-base font-bold hover:bg-blue-100 transition-colors duration-200 cursor-pointer'>
                        <Link href="/contact" className='w-full text-center'>Contact</Link>
                    </li>
                </ul>

                <div className='mb-10 md:mb-0'>
                    <h2 className='text-white text-center text-3xl sm:text-[40px] font-black mb-5'>FUNMATHSHEET</h2>
                    <h2 className='text-white text-center text-xl font-extrabold mb-2'>Social Media Link</h2>

                    <div className='flex items-center gap-3 mt-5 justify-center'>
                        <img src="/assets/tiktok.webp" alt="tiktok" className='w-14 md:w-[98px] h-14 md:h-[98px] rounded-full' />
                        <img src="/assets/facebook.webp" alt="facebook" className='w-14 md:w-[98px] h-14 md:h-[98px] rounded-full' />
                        <img src="/assets/instagram.webp" alt="instagram" className='w-14 md:w-[98px] h-14 md:h-[98px] rounded-full' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubFooter