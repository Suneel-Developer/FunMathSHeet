import React from 'react'

const Pricing = () => {
    return (
        <section className='bg-[url("/assets/bg-2.webp")] bg-no-repeat bg-cover bg-center relative'>

            {/* Overlay  */}
            <div className='absolute top-0 bottom-0 w-full left-0 right-0 h-full bg-blue-100 bg-opacity-70'></div>

            <div className='bg-black p-3 relative z-30 w-full tracking-[0.03em] text-[28px] text-[#FF4040] text-center font-bold'>
                SAVE MASSIVE DEAL ON VIP! LIFETIME ACCESS!
            </div>

            <div className='max-w-[980px] mx-auto w-full relative z-30 py-10 px-3'>
                <h2 className='text-white font-bold tracking-[0.03em] text-3xl text-center mb-5'>JOIN A MEMBERSHIP TO GAIN ALL ACCESS</h2>

                <div className='grid grid-cols-1 lmd:grid-cols-2 gap-5'>
                    <div className='bg-white border border-black'>
                        <div className='p-4 sm:p-[30px] flex items-center justify-center flex-col'>
                            <h2 className='text-center text-3xl font-extrabold mb-3'>Basic Membership</h2>
                            <div className='flex items-start justify-center gap-2 mb-5'>
                                <span className='text-lg font-extrabold'>USD</span>
                                <span className='leading-[1] text-[60px] font-black'>10</span>
                            </div>

                            <span className='text-xs text-center font-black mb-1'>Every month</span>
                            <h3 className='text-sm text-center font-bold'>Low Cost For Short Term Learners</h3>

                            <button className='w-full bg-black text-center text-white py-[14px] px-4 text-sm mt-10'>Select</button>
                        </div>

                        <ul className='bg-white border-t-2 p-4 sm:p-7 flex flex-col gap-5'>
                            <li className='flex items-center justify-center text-center gap-2 leading-[1.5] text-sm font-semibold'><img src="/assets/tikmark-icon.svg" alt="tikmark-icon" />Generate Unlimited Educational Worksheets</li>
                            <li className='flex items-center justify-center text-center gap-2 leading-[1.5] text-sm font-semibold'><img src="/assets/tikmark-icon.svg" alt="tikmark-icon" />Access To All Math Categories</li>
                            <li className='flex items-center justify-center text-center gap-2 leading-[1.5] text-sm font-semibold'><img src="/assets/tikmark-icon.svg" alt="tikmark-icon" />Print Out Perfect A4 Worksheets</li>
                            <li className='flex items-center justify-center text-center gap-2 leading-[1.5] text-sm font-semibold'><img src="/assets/tikmark-icon.svg" alt="tikmark-icon" />Go Online & Type In To Solve</li>
                            <li className='flex items-center justify-center text-center gap-2 leading-[1.5] text-sm font-semibold'><img src="/assets/tikmark-icon.svg" alt="tikmark-icon" />Ability To Hide & Unhide Answers</li>
                            <li className='flex items-center justify-center text-center gap-2 leading-[1.5] text-sm font-semibold'><img src="/assets/tikmark-icon.svg" alt="tikmark-icon" />Works On Desktop, Mobile & All Devices</li>
                            <li className='flex items-center justify-center text-center gap-2 leading-[1.5] text-sm font-semibold'><img src="/assets/tikmark-icon.svg" alt="tikmark-icon" />No Popups & Crazy Ads</li>
                            <li className='flex items-center justify-center text-center gap-2 leading-[1.5] text-sm font-semibold'><img src="/assets/tikmark-icon.svg" alt="tikmark-icon" />Paid Monthly</li>
                            <li className='flex items-center justify-center text-center gap-2 leading-[1.5] text-sm font-semibold'><img src="/assets/tikmark-icon.svg" alt="tikmark-icon" />Cancel Anytime</li>
                            <li className='flex items-center justify-center text-center gap-2 leading-[1.5] text-sm font-semibold'><img src="/assets/tikmark-icon.svg" alt="tikmark-icon" />No Setup Fee</li>
                        </ul>
                    </div>

                    <div className='bg-white border border-black relative'>
                        <div className='p-4 sm:p-[30px] flex items-center justify-center flex-col'>
                            <h2 className='text-center text-3xl font-extrabold mb-3'>VIP Membership</h2>
                            <div className='flex items-start justify-center gap-2 mb-5'>
                                <span className='text-lg font-extrabold'>USD</span>
                                <span className='leading-[1] text-[60px] font-black'>30</span>
                            </div>

                            <h3 className='text-sm text-center font-bold'>Life Time & Unlimited Access For Long Term <br/> Learners</h3>

                            <button className='w-full bg-black text-center text-white py-[14px] px-4 text-sm mt-10'>Select</button>
                        </div>

                        <ul className='bg-white border-t-2 p-4 sm:p-7 flex flex-col gap-5'>
                            <li className='flex items-center justify-center text-center gap-2 leading-[1.5] text-sm font-semibold'><img src="/assets/tikmark-icon.svg" alt="tikmark-icon" />Generate Unlimited Educational Worksheets</li>
                            <li className='flex items-center justify-center text-center gap-2 leading-[1.5] text-sm font-semibold'><img src="/assets/tikmark-icon.svg" alt="tikmark-icon" />Access To All Math Categories</li>
                            <li className='flex items-center justify-center text-center gap-2 leading-[1.5] text-sm font-semibold'><img src="/assets/tikmark-icon.svg" alt="tikmark-icon" />Print Out Perfect A4 Worksheets</li>
                            <li className='flex items-center justify-center text-center gap-2 leading-[1.5] text-sm font-semibold'><img src="/assets/tikmark-icon.svg" alt="tikmark-icon" />Go Online & Type In To Solve</li>
                            <li className='flex items-center justify-center text-center gap-2 leading-[1.5] text-sm font-semibold'><img src="/assets/tikmark-icon.svg" alt="tikmark-icon" />Ability To Hide & Unhide Answers</li>
                            <li className='flex items-center justify-center text-center gap-2 leading-[1.5] text-sm font-semibold'><img src="/assets/tikmark-icon.svg" alt="tikmark-icon" />Works On Desktop, Mobile & All Devices</li>
                            <li className='flex items-center justify-center text-center gap-2 leading-[1.5] text-sm font-semibold'><img src="/assets/tikmark-icon.svg" alt="tikmark-icon" />No Popups & Crazy Ads</li>
                            <li className='flex items-center justify-center text-center gap-2 leading-[1.5] text-sm font-semibold'><img src="/assets/tikmark-icon.svg" alt="tikmark-icon" />One Time Purchase</li>
                            <li className='flex items-center justify-center text-center gap-2 leading-[1.5] text-sm font-semibold'><img src="/assets/tikmark-icon.svg" alt="tikmark-icon" />No Recurring Payments</li>
                            <li className='flex items-center justify-center text-center gap-2 leading-[1.5] text-sm font-semibold'><img src="/assets/tikmark-icon.svg" alt="tikmark-icon" />Life Time & Unlimited Access</li>
                        </ul>


                        <div className='mx-auto absolute -top-3 left-0 right-0 w-fit bg-[#e21c21] text-white text-center text-sm font-bold px-[10px] py-1'>BEFORE $60 / SAVE $30</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing