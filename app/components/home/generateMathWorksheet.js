import React from 'react'

const GenerateMathWorksheet = () => {
    return (
        <section className='py-10 px-4 bg-[url("/assets/bg-1.webp")] bg-no-repeat bg-cover bg-center relative'>

            {/* Overlay  */}
            <div className='absolute top-0 bottom-0 w-full left-0 right-0 h-full bg-white bg-opacity-80'></div>

            <div className='text-black relative z-30 mb-10 text-3xl font-extrabold text-center'>Generate Math Worksheet By Pressing Easy Buttons!</div>
            <div className='max-w-[800px] mx-auto w-full flex gap-6 justify-between z-30 relative flex-col md:flex-row'>
                <div className='w-full md:w-[53.5%] md:h-[745px] relative border-[10px] border-black'>
                    <video src="/assets/file.mp4" controls autoPlay className=' w-full h-full'></video>
                </div>

                <div className='flex flex-row md:flex-col gap-2 md:gap-5'>
                    <div className='h-[100px] md:h-[236px] flex-1 min-w-[80px] md:min-w-full gap-3 md:w-[236px] border-[5px] border-black rounded-3xl md:rounded-[40px] p-5 bg-[#00A6FF] flex justify-between items-center flex-col'>
                        <img src="/assets/generate.svg" alt="generate" className='w-7 md:w-[95px] h-[70px] md:h-[119px]' />
                        <span className='text-xs md:text-3xl text-white font-bold'>Generate</span>
                    </div>
                    <div className='h-[100px] md:h-[236px] flex-1  min-w-[80px] md:min-w-full gap-3 md:w-[236px] border-[5px] border-black rounded-3xl md:rounded-[40px] p-5 bg-[#00A6FF] flex justify-between items-center flex-col'>
                        <img src="/assets/print.svg" alt="print" className='w-7 md:w-[95px] h-[70px] md:h-[119px]' />
                        <span className='text-xs md:text-3xl text-white font-bold'>Print</span>
                    </div>
                    <div className='h-[100px] md:h-[236px] flex-1  min-w-[80px] md:min-w-full gap-3 md:w-[236px] border-[5px] border-black rounded-3xl md:rounded-[40px] p-5 bg-[#00A6FF] flex justify-between items-center flex-col'>
                        <img src="/assets/solve.svg" alt="solve" className='w-7 md:w-[95px] h-[70px] md:h-[119px]' />
                        <span className='text-xs md:text-3xl text-white font-bold'>Solve</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GenerateMathWorksheet