"use client"
import React, { useState, useRef, useEffect } from 'react';

const LearnMath = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);

    const slides = [
        '/assets/_1.webp',
        '/assets/_2.webp',
        '/assets/_3.webp',
        '/assets/_4.webp',
        '/assets/_5.webp',
    ];

    const handleNext = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentSlide > 0) {
            setCurrentSlide((prev) => prev - 1);
        }
    };

    const scrollToSlide = (index) => {
        if (sliderRef.current) {
            const slideWidth = sliderRef.current.children[0].clientWidth;
            sliderRef.current.scrollTo({
                left: slideWidth * index,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        scrollToSlide(currentSlide);
    }, [currentSlide]);

    return (
        <section className='bg-[url("/assets/bg.webp")] w-full py-10 px-3 md:px-5 bg-no-repeat bg-cover bg-center relative'>
            {/* Overlay  */}
            <div className='bg-blue_100 w-full h-full absolute top-0 left-0 bottom-0 bg-opacity-70 z-0'></div>

            <div className='relative z-30'>
                <h4 className='text-3xl text-white mb-7 text-center font-black'>Encourage Yourself To Learn Math!</h4>

                <div className='max-w-[1000px] mx-auto w-full relative'>
                    <div className='flex gap-4 overflow-x-auto no-scrollbar' ref={sliderRef}>
                        {slides.map((slide, index) => (
                            <div key={index} className='min-w-[200px] xsm:min-w-[300px] md:min-w-[438px] w-full'>
                                <img src={slide} alt={`slider-${index + 1}`} className='w-full h-full' />
                            </div>
                        ))}
                    </div>

                    {/* Left Arrow */}
                    {currentSlide > 0 && (
                        <button onClick={handlePrev} className='absolute top-0 bottom-0 my-auto left-3'>
                            <img src="/assets/right-arrow.png" alt="right-arrow" className='w-3 xsm:w-6 rotate-180' />
                        </button>
                    )}

                    {/* Right Arrow */}
                    {currentSlide < slides.length - 1 && (
                        <button onClick={handleNext} className='absolute top-0 bottom-0 my-auto right-3'>
                            <img src="/assets/right-arrow.png" alt="right-arrow" className='w-3 xsm:w-6' />
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default LearnMath;
