import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Faqs from '../components/home/Faqs'

const MathWorksheet = () => {
    return (
        <>
            <Header />

            <section className='py-10 px-2'>
                <div className='max-w-[901px] w-full mx-auto h-auto'>

                    <div className='text-center font-extrabold text-xl xsm:text-3xl bg-black text-white px-4 xsm:px-8 py-[10px] rounded-[6px] mb-10 w-fit mx-auto'>MATH WORKSHEETS</div>


                    <div className='grid grid-cols-2 gap-2 lmd:gap-5 h-auto'>

                        {/* Addition WORKSHEETS  */}
                        <Link href="/addition-worksheet" className='relative w-full lmd:w-[397px] bg-black rounded-[30px] xsm:rounded-[50px] sm:rounded-[80px] h-[170px] xsm:h-[300px] lmd:h-[393px] flex items-center justify-center gap-3'>
                            <div className='text-white relative px-5 py-5 xsm:py-10 flex flex-col justify-between w-full h-full items-center'>
                                <h2 className='text-base xsm:text-[25px] text-center font-bold capitalize'>Free to use</h2>
                                <img src="/assets/plus.svg" alt="edit" className='w-10 xsm:w-20 lmd:w-[135px] h-10 xsm:h-20 lmd:h-[134px]' />
                                <h2 className='text-base xsm:text-[25px] font-bold capitalize text-[#00A6FF] underline'>Addition</h2>
                            </div>
                        </Link>

                        {/* Subtraction worksheet */}
                        <Link href="/subtraction-worksheet" className='relative w-full lmd:w-[397px] bg-black rounded-[30px] xsm:rounded-[50px] sm:rounded-[80px] h-[170px] xsm:h-[300px] lmd:h-[393px] flex items-center justify-center gap-3'>
                            <div className='text-white relative px-5 py-5 xsm:py-10 flex flex-col justify-between w-full h-full items-center'>
                                <h2 className='text-base xsm:text-[25px] font-bold text-center capitalize'>Free to use</h2>
                                <img src="/assets/minus.png" alt="edit" className='w-14 xsm:w-20 lmd:w-[135px] h-[22px]' />
                                <h2 className='text-base xsm:text-[25px] font-bold capitalize text-[#00A6FF] underline'>Subtraction</h2>
                            </div>
                        </Link>

                        {/* Multiplication worksheet  */}
                        <Link href="/multiplication-worksheet" className='relative w-full lmd:w-[397px] bg-black rounded-[30px] xsm:rounded-[50px] sm:rounded-[80px] h-[170px] xsm:h-[300px] lmd:h-[393px] flex items-center justify-center gap-3'>
                            <div className='text-white relative px-5 py-5 xsm:py-10 flex flex-col justify-between w-full h-full items-center'>
                                <h2 className='text-base xsm:text-[25px] font-bold capitalize'>Membership</h2>
                                <h1 className='text-[50px] xsm:text-[100px] lmd:text-[160px] leading-3 font-bold'>X</h1>
                                <h2 className='text-base xsm:text-[25px] font-bold capitalize text-[#00A6FF] underline'>Multiplication</h2>
                            </div>
                        </Link>

                        {/* Division worksheet  */}
                        <Link href="/division-worksheet" className='relative w-full lmd:w-[397px] bg-black rounded-[30px] xsm:rounded-[50px] sm:rounded-[80px] h-[170px] xsm:h-[300px] lmd:h-[393px] flex items-center justify-center gap-3'>
                            <div className='text-white relative px-5 py-5 xsm:py-10 flex flex-col justify-between w-full h-full items-center'>
                                <h2 className='text-base xsm:text-[25px] font-bold capitalize'>Membership</h2>
                                <h1 className='text-[100px] xsm:text-[170px] lmd:text-[250px] leading-3 font-medium'>÷</h1>
                                <h2 className='text-base xsm:text-[25px] font-bold capitalize text-[#00A6FF] underline'>Division</h2>
                            </div>
                        </Link>

                        {/* Fraction worksheet  */}
                        <Link href="/fraction-worksheet" className='relative w-full lmd:w-[397px] bg-black rounded-[30px] xsm:rounded-[50px] sm:rounded-[80px] h-[170px] xsm:h-[300px] lmd:h-[393px] flex items-center justify-center gap-3'>
                            <div className='text-white relative px-5 py-5 xsm:py-10 flex flex-col justify-between w-full h-full items-center'>
                                <h2 className='text-base xsm:text-[25px] font-bold capitalize'>Membership</h2>
                                <h1 className='text-5xl xsm:text-[100px] lmd:text-[200px] leading-3 font-bold'>/</h1>
                                <h2 className='text-base xsm:text-[25px] font-bold capitalize text-[#00A6FF] underline'>Fraction</h2>
                            </div>
                        </Link>

                        {/* Decimal worksheet  */}
                        <Link href="/decimal-worksheet" className='relative w-full lmd:w-[397px] bg-black rounded-[30px] xsm:rounded-[50px] sm:rounded-[80px] h-[170px] xsm:h-[300px] lmd:h-[393px] flex items-center justify-center gap-3'>
                            <div className='text-white relative px-5 py-5 xsm:py-10 flex flex-col justify-between w-full h-full items-center'>
                                <h2 className='text-base xsm:text-[25px] font-bold capitalize'>Membership</h2>
                                <img src="/assets/decimal.png" alt="decimal" className='w-8 xsm:w-[60px] lmd:w-[100px] h-8 xsm:h-[60px] lmd:h-[100px]' />
                                <h2 className='text-base xsm:text-[25px] font-bold capitalize text-[#00A6FF] underline'>Decimal</h2>
                            </div>
                        </Link>

                        {/* BODMAS worksheet  */}
                        <Link href="/bodmas-worksheet" className='relative w-full lmd:w-[397px] bg-black rounded-[30px] xsm:rounded-[50px] sm:rounded-[80px] h-[170px] xsm:h-[300px] lmd:h-[393px] flex items-center justify-center gap-3'>
                            <div className='text-white relative px-5 py-5 xsm:py-10 flex flex-col justify-between w-full h-full items-center'>
                                <h2 className='text-base xsm:text-[25px] font-bold capitalize'>Membership</h2>
                                <h1 className='text-4xl xsm:text-[60px] lmd:text-[106px] leading-3 font-bold'>(&nbsp; )</h1>
                                <h2 className='text-base xsm:text-[25px] font-bold capitalize text-[#00A6FF] underline'>BODMAS</h2>
                            </div>
                        </Link>

                        {/* percentage worksheet  */}
                        <Link href="/percentage-worksheet" className='relative w-full lmd:w-[397px] bg-black rounded-[30px] xsm:rounded-[50px] sm:rounded-[80px] h-[170px] xsm:h-[300px] lmd:h-[393px] flex items-center justify-center gap-3'>
                            <div className='text-white relative px-5 py-5 xsm:py-10 flex flex-col justify-between w-full h-full items-center'>
                                <h2 className='text-base xsm:text-[25px] font-bold capitalize'>Membership</h2>
                                <h1 className='text-4xl xsm:text-8xl lmd:text-[128px] leading-3 font-bold'>%</h1>
                                <h2 className='text-base text-center xsm:text-[25px] font-bold capitalize text-[#00A6FF] underline'>Percentage</h2>
                            </div>
                        </Link>

                        {/* Algebra  worksheet  */}
                        <Link href="/algebra-worksheet" className='relative w-full lmd:w-[397px] bg-black rounded-[30px] xsm:rounded-[50px] sm:rounded-[80px] h-[170px] xsm:h-[300px] lmd:h-[393px] flex items-center justify-center gap-3'>
                            <div className='text-white relative px-5 py-5 xsm:py-10 flex flex-col justify-between w-full h-full items-center'>
                                <h2 className='text-base xsm:text-[25px] font-bold capitalize'>Membership</h2>
                                <h1 className='text-4xl xsm:text-6xl lmd:text-[120px] leading-3 font-bold'>X</h1>
                                <h2 className='text-base xsm:text-[25px] font-bold capitalize text-[#00A6FF] underline'>Algebra </h2>
                            </div>
                        </Link>

                        {/* Greater & less than worksheet  */}
                        <Link href="/greaterlessthan-worksheet" className='relative w-full lmd:w-[397px] bg-black rounded-[30px] xsm:rounded-[50px] sm:rounded-[80px] h-[170px] xsm:h-[300px] lmd:h-[393px] flex items-center justify-center gap-3'>
                            <div className='text-white relative px-5 py-5 xsm:py-10 flex flex-col justify-between w-full h-full items-center'>
                                <h2 className='text-base xsm:text-[25px] font-bold capitalize'>Membership</h2>
                                <h1 className='text-4xl xsm:text-6xl lmd:text-[140px] leading-3 font-bold'>{'<'}</h1>
                                <h2 className='text-base xsm:text-[25px] font-bold capitalize text-[#00A6FF] underline'>Greater & less than</h2>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            <Faqs />
            <Footer />
        </>
    )
}

export default MathWorksheet