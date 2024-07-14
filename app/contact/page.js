import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contact = () => {
    return (
        <>
            <Header />

            <section className='py-10 px-3'>
                <div className='max-w-[450px] w-full mx-auto mb-20'>
                    <h2 className='text-3xl font-black text-center uppercase'>Contact</h2>

                    <form>

                        <div className='mb-[25px] mt-20'>
                            <label className='text-[#373b4d] text-sm italic font-medium'>First name</label>
                            <input type="text" className='py-[3px] mt-3 px-[13px] border-2 border-opacity-50 text-base font-medium border-black block w-full outline-none h-11 text-ellipsis overflow-hidden' />
                        </div>

                        <div className='mb-[25px]'>
                            <label className='text-[#373b4d] text-sm italic font-medium'>Email *</label>
                            <input type="email" className='py-[3px] mt-3 px-[13px] border-2 border-opacity-50 text-base font-medium border-black block w-full outline-none h-11 text-ellipsis overflow-hidden' />
                        </div>

                        <div className='mb-[25px]'>
                            <label className='text-[#373b4d] text-sm italic font-medium'>Write a message</label>
                            <textarea className='py-[3px] mt-3 px-[13px] border-2 border-opacity-50 text-base font-medium border-black block w-full outline-none h-48 text-ellipsis overflow-hidden' />
                        </div>

                        <button className='w-[147px] h-[42px] bg-black text-white font-bold text-base'>Submit</button>
                    </form>
                </div>
            </section>

            <Footer />

        </>
    )
}

export default Contact