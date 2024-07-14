import React from 'react'

const WhoCanUse = () => {
    return (
        <section className='py-8 w-full px-3'>
            <div className='max-w-[840px] w-full mx-auto'>
                <h2 className='text-center text-3xl font-black mb-6'>WHO CAN USE FUNMATHSHEET!</h2>
                <h2 className='text-center text-xl font-black mb-8'>Anyone can practice their Math skills!</h2>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className='bg-[#00A6FF] border-[3px] h-[250px] border-black rounded-[50px] p-2 text-white text-[35px] text-center flex items-center flex-col justify-center font-bold'>
                        Students <br /> Of All Ages
                    </div>

                    <div className='bg-[#00A6FF] border-[3px] h-[250px] border-black rounded-[50px] p-2 text-white text-[35px] text-center flex items-center flex-col justify-center font-bold'>
                        Parents <br /> Helping <br />Their Kids
                    </div>

                    <div className='bg-[#00A6FF] border-[3px] h-[250px] border-black rounded-[50px] p-2 text-white text-[35px] text-center flex items-center flex-col justify-center font-bold'>
                        Teachers <br /> Supporting <br />
                        Their Students
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhoCanUse