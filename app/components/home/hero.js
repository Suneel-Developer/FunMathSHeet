import React from 'react'
import Link from 'next/link'

const Hero = () => {
    return (
        <section className='bg-[url("/assets/bg.webp")] w-full py-10 px-3 md:px-5 bg-no-repeat bg-cover bg-center relative'>
            <div className='bg-blue_100 w-full h-full absolute top-0 left-0 bottom-0 bg-opacity-70 z-0'></div>

            <div className='text-white z-30 relative'>
                <Link href="/math-worksheet">
                    <h2 className='py-2 md:py-5 rounded-xl mt-10 text-black border-4 border-black_100 w-fit mx-auto bg-white text-2xl text-center md:text-[50px] font-black px-4 md:px-16 tracking-[0.02em]'>Welcome Students</h2>
                </Link>

                <Link href="/math-worksheet" >
                    <div className='py-2 md:py-4 rounded-xl mt-10 text-black border-4 border-black_100 w-fit mx-auto bg-white text-2xl md:text-[50px] leading-[40px] md:leading-[70px] font-black px-4 md:px-10 tracking-[0.02em] text-center'>
                        Create Unlimited Math <br /> Worksheet For You To Learn
                    </div>
                </Link>


                <div className='max-w-[1050px] mx-auto w-full grid grid-cols-1 xsm:grid-cols-3 gap-4 mt-10'>
                    <h2 className='text-xs md:text-xl text-white font-semibold leading-8 hidden xsm:block'>
                        What Does Fun <br />
                        MathSheet Have? <br />
                        Addition Worksheet <br />
                        Subtraction Worksheet <br />
                        Multiplication Worksheet <br />
                        Division Worksheet <br />
                        Fraction Worksheet <br />
                        Decimal Worksheet <br />
                        Percentage Worksheet <br />
                        Roman Numeral Worksheet
                    </h2>

                    <div className='flex flex-col items-center justify-center'>
                        <Link href="/math-worksheet" className='bg-white border-4 border-black py-14 xsm:py-8 md:py-14 px-5 tracking-[0.1em] text-base xsm:text-xs md:text-2xl font-bold mb-5 text-black w-full text-center hover:bg-opacity-30 transition duration-300'>
                            Click Here To Create
                        </Link>

                        <h3 className='text-xs md:text-base text-white font-semibold text-center'>Become A FunMathSheet Member To
                            Access To All Categories
                        </h3>
                    </div>

                    <h2 className='text-xs md:text-xl text-white font-semibold leading-8 text-end hidden xsm:block'>
                        <br />
                        Rounding Worksheet <br />
                        Power Worksheet <br />
                        Time Worksheet <br />
                        Measurement Worksheet <br />
                        Algebra Worksheet <br />
                        BODMAS Worksheet <br />
                        Converting Worksheet <br />
                        & more worksheet <br />
                        Maths Speed Test
                    </h2>

                </div>
            </div>
        </section>
    )
}

export default Hero