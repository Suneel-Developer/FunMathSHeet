"use client"
import React, { useState } from 'react';

const faqsData = [
    {
        question: "What is FunMathSheet?",
        answer: "FunMathSheet is an innovative online platform designed to enhance Math skills for learners of all ages. With just one button, users can generate customized Math worksheets in A4 paper format, which can be easily printed from both computers and mobile devices."
    },

    {
        question: "How does the worksheet generation feature work?",
        answer: "Our worksheet generation feature allows users to create personalized Math worksheets with a single click. Users can select their desired Math categories and instantly generate a worksheet tailored to their preferences."
    },

    {
        question: "What does the membership include?",
        answer: "Our membership grants unlimited access to both Math worksheet generators on our website. You can create as many worksheets as you need for your educational needs."
    },

    {
        question: "Is FunMathSheet suitable for all ages?",
        answer: "Yes, FunMathSheet is designed to benefit learners of all ages, from young children to adults. Our platform offers customizable worksheets and resources tailored to various skill levels, making it suitable for learners at any stage of their Math journey."
    },

    {
        question: "What paper size are the worksheets formatted for?",
        answer: "All worksheets generated on  Fun MathSheet are formatted to fit A4 paper size, ensuring compatibility with standard printers and easy printing from both computers and mobile devices. If printer will most likely shows up 2 pages, we suggest to look at the preview first, and only print out the first page."
    },

    {
        question: "How often are new categories or features added to FunMathSheet?",
        answer: "We are continuously updating and expanding our platform to provide users with a diverse range of Math categories and features. While we strive to introduce new content regularly, the frequency of updates may vary based on user feedback and platform development."
    },

    {
        question: "How do I cancel my subscription?",
        answer: "You can cancel your subscription anytime by logging into your account, navigating to the subscription settings, and selecting the cancel option. Your access will continue until the end of the current billing period."
    },

    {
        question: "Will I receive a refund if I cancel my subscription?",
        answer: "No, we do not offer refunds. When you cancel, your subscription will remain active until the end of the current billing period, after which it will not renew."
    },

    {
        question: "Can I switch between plans?",
        answer: "Yes, you can switch plans by accessing your account settings. The change will take effect at the end of your current billing cycle."
    },

    {
        question: "Are there any technical requirements for using FunMathSheet?",
        answer: "FunMathSheet is compatible with most devices and web browsers, ensuring a seamless user experience for all users. However, we recommend using the latest version of your preferred web browser for optimal performance."
    },

    {
        question: "What should I do if I encounter technical issues with the website?",
        answer: "If you experience any technical difficulties while using FunMathSheet, please refer to our troubleshooting guide for assistance. If the problem persists, don not hesitate to reach out to our technical support team for further assistance."
    },

    {
        question: "Why Generate Button Does not Work?",
        answer: "If you do occur this problem, the best solution will be to refresh the page or right click the page and click on reload. Sometime the page will not load up properly, which interferes the program of the website. A other solution will be try a different device or a different browser. "
    },

    {
        question: "Can I access FunMathSheet from any device?",
        answer: "Yes, FunMathSheet is accessible from any internet-enabled device, including computers, tablets, and smartphones. Our platform is designed to provide a seamless user experience across multiple devices, allowing users to generate and print worksheets conveniently."
    },

    {
        question: "Is GWS Education and FunMathSheet the same?",
        answer: "Yes they are the same, GWS Education was our previously brand name, now we have changed our new brand name to FunMathSheet. To make the brand name more exciting."
    },
];

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className='bg-white py-8 px-4'>
            <div className='max-w-[900px] mx-auto w-full'>
                <h2 className='mb-5 text-center text-3xl font-black'>FAQs</h2>
                <ul>
                    {faqsData.map((faq, index) => (
                        <li key={index} className='border-b border-black-200'>
                            <div
                                onClick={() => toggleFaq(index)}
                                className='py-4 md:py-6 cursor-pointer flex items-center justify-between gap-2'
                            >
                                <h3 className='flex-1 tex-base md:text-lg font-semibold'>{faq.question}</h3>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                >
                                    <path
                                        d="M8.14644661,10.1464466 C8.34170876,9.95118446 8.65829124,9.95118446 8.85355339,10.1464466 L12.4989857,13.7981758 L16.1502401,10.1464466 C16.3455022,9.95118446 16.6620847,9.95118446 16.8573469,10.1464466 C17.052609,10.3417088 17.052609,10.6582912 16.8573469,10.8535534 L12.4989857,15.2123894 L8.14644661,10.8535534 C7.95118446,10.6582912 7.95118446,10.3417088 8.14644661,10.1464466 Z"
                                    />
                                </svg>
                            </div>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-screen pb-[30px] px-[2px]' : 'max-h-0'}`}
                            >
                                <p className='text-base font-medium'>{faq.answer}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Faqs;
