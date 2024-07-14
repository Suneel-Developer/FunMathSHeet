import React from 'react'

const JoinCommunity = () => {
    return (
        <section className='bg-[url("/assets/bg-3.webp")] bg-no-repeat bg-cover bg-center relative py-8 px-3'>
            {/* Overlay  */}
            <div className='absolute top-0 bottom-0 w-full left-0 right-0 h-full bg-white bg-opacity-90'></div>

            <div className='relative z-30 max-w-[800px] w-full mx-auto'>
                <h2 className='text-center tracking-[0.03em] text-2xl sm:text-3xl font-black mb-5'>Join Our Community of Supportive Students!</h2>

                <div className='bg-[#00A6FF] rounded-xl py-5 border-2 border-black border-opacity-50 px-5 mx-auto w-fit'>
                    <span className='text-white text-6xl sm:text-[100px] font-black text-center'>5,000+</span>
                </div>

                <h3 className='text-center text-[22px] font-bold my-5'>Number Of FUN Members Sign Up</h3>

                <p className='text-center font-normal text-black text-base sm:text-xl'>Join thousands of students who are taking control of their education with our easy-to-use, effective, and engaging math worksheet generator. Together, we can help you build a strong foundation in math, boost your confidence, and achieve academic success.</p>
            </div>
        </section>
    )
}

export default JoinCommunity