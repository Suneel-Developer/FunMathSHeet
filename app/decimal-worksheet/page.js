"use client";
import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DecimalWorksheet = () => {
    const [level, setLevel] = useState(null);
    const [showAnswer, setShowAnswer] = useState(false);
    const [problems, setProblems] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [numbersGenerated, setNumbersGenerated] = useState(false);

    const generateProblems = (level) => {
        const newProblems = [];
        const newAnswers = [];
        for (let i = 0; i < 45; i++) {
            const num1 = (Math.random() * 10).toFixed(2);
            const num2 = (Math.random() * 10).toFixed(2);

            if (level === 1) {
                const result = (parseFloat(num1) + parseFloat(num2)).toFixed(2);
                newProblems.push(`${num1} + ${num2} =`);
                newAnswers.push(result);
            } else if (level === 2) {
                const result = (parseFloat(num1) - parseFloat(num2)).toFixed(2);
                newProblems.push(`${num1} - ${num2} =`);
                newAnswers.push(result);
            }
        }
        setProblems(newProblems);
        setAnswers(newAnswers);
        setLevel(level);
        setShowAnswer(true);
        setNumbersGenerated(true);
    };

    const downloadPDF = () => {
        const doc = new jsPDF();

        doc.setFontSize(18);
        doc.text('Decimal Worksheet', 105, 10, null, null, 'center');

        const colWidth = 64;
        const rowHeight = 17;
        const startX = 10;
        const startY = 35;

        doc.setFontSize(14);

        problems.forEach((problem, index) => {
            const colIndex = Math.floor(index / 15);
            const rowIndex = index % 15;
            const x = startX + colIndex * colWidth;
            const y = startY + rowIndex * rowHeight;

            doc.text(`${problem}`, x, y);
        });

        // Add footer text
        const footerText = 'Generated with SimpleMathWorksheet.com';
        const footerFontSize = 10;
        const footerColor = '#008000';
        const footerMargin = 10;

        const totalPages = doc.internal.getNumberOfPages();

        for (let i = 1; i <= totalPages; i++) {
            doc.setPage(i);
            doc.setFontSize(footerFontSize);
            doc.setTextColor(footerColor);
            doc.text(footerText, doc.internal.pageSize.getWidth() / 2, doc.internal.pageSize.getHeight() - footerMargin, { align: 'center' });
        }

        doc.save('decimal-worksheet.pdf');
    };

    return (
        <>
            {/* Header Section */}
            <Header />

            {/* Decimal Worksheet */}
            <div className="px-1 xsm:px-3 flex flex-col items-center justify-center mb-8">
                <div className="w-full max-w-[901px] mx-auto">
                    <header className="flex justify-center items-center pt-8 pb-12 w-full">
                        <h1 className="text-xl xsm:text-2xl font-extrabold text-center">Decimal Worksheet</h1>
                    </header>
                    <div className="grid grid-cols-3 border-r-2 border-black mb-10 xsm:mb-20">
                        {!numbersGenerated ? (
                            Array.from({ length: 3 }).map((_, lineIndex) => (
                                <div key={lineIndex} className="flex flex-col border-l-2 border-black px-1 xsm:px-2">
                                    {Array.from({ length: 15 }).map((_, i) => (
                                        <div key={i} className="text-sm xsm:text-lg sm:text-[25px] leading-[2em] sm:leading-[2.4em] text-black font-bold">{i + 1 + lineIndex * 15})</div>
                                    ))}
                                </div>
                            ))
                        ) : (
                            problems.map((problem, index) => (
                                <div key={index} className="flex border-l-2 border-black px-1 xsm:px-2 gap-1 justify-between items-center">
                                    <span className='text-sm xsm:text-lg sm:text-[25px] leading-[2em] sm:leading-[2.4em] text-black font-bold'> {problem}</span>
                                </div>
                            ))
                        )}
                    </div>

                    {showAnswer && problems.length > 0 && (
                        <div className="mb-10 flex flex-col gap-1 px-2">
                            {Array.from({ length: Math.ceil(answers.length / 3) }).map((_, lineIndex) => (
                                <p key={lineIndex} className='font-semibold text-black text-xs xsm:text-sm'>
                                    {answers.filter((_, index) => index % 3 === lineIndex).join(', ')}
                                </p>
                            ))}
                        </div>
                    )}

                    <footer className="flex justify-center flex-wrap items-center mb-10 gap-2 xsm:gap-4">
                        <button
                            onClick={() => generateProblems(1)}
                            className="px-2 xsm:px-5 py-1 h-10 xsm:h-[53px] border-2 border-black outline-none text-white text-xs xsm:text-base font-medium bg-black tracking-widest hover:bg-white hover:text-black transition-all duration-200"
                        >
                            Generate Level 1
                        </button>

                        <button
                            onClick={() => generateProblems(2)}
                            className="px-2 xsm:px-5 py-1 h-10 xsm:h-[53px] border-2 border-black outline-none text-white text-xs xsm:text-base font-medium bg-black tracking-widest hover:bg-white hover:text-black transition-all duration-200"
                        >
                            Generate Level 2
                        </button>

                        <button
                            onClick={() => setShowAnswer(!showAnswer)}
                            className="px-2 xsm:px-5 py-1 h-10 xsm:h-[53px] border-2 border-black outline-none text-white text-xs xsm:text-base font-medium bg-black tracking-widest hover:bg-white hover:text-black transition-all duration-200"
                        >
                            {showAnswer ? 'Hide Answers' : 'Show Answers'}
                        </button>

                        <button
                            onClick={downloadPDF}
                            className="px-2 xsm:px-5 py-1 h-10 xsm:h-[53px] border-2 border-green-700 outline-none text-white text-xs xsm:text-base font-medium bg-green-700 tracking-widest hover:bg-white hover:text-black transition-all duration-200"
                        >
                            Download Worksheet
                        </button>
                    </footer>
                </div>
            </div>

            {/* Footer Section  */}
            <Footer />
        </>
    );
};

export default DecimalWorksheet;
