"use client";
import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AlgebraWorksheet = () => {
    const [showAnswer, setShowAnswer] = useState(false);
    const [problems, setProblems] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [numbersGenerated, setNumbersGenerated] = useState(false);

    const generateProblems = () => {
        const newProblems = [];
        const newAnswers = [];
        for (let i = 0; i < 30; i++) {
            const coef1 = Math.floor(Math.random() * 10) + 1;
            const coef2 = Math.floor(Math.random() * 10) + 1;
            const constant = Math.floor(Math.random() * 100) - 50;
            const varName = i % 2 === 0 ? 'x' : 'y';
            const answer = (constant - coef2) / coef1;
            newProblems.push(`${coef1}${varName} + ${coef2} = ${constant}  find ${varName} =`);
            newAnswers.push(answer.toFixed(2));
        }
        setProblems(newProblems);
        setAnswers(newAnswers);
        setShowAnswer(true);
        setNumbersGenerated(true);
    };

    const downloadPDF = () => {
        const doc = new jsPDF();

        doc.setFontSize(18);
        doc.text('Algebra Worksheet', 105, 10, null, null, 'center');

        const colWidth = 100;
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

        doc.save('algebra-worksheet.pdf');
    };

    return (
        <>
            {/* Header Section */}
            <Header />

            {/* Algebra Worksheet */}
            <div className="px-1 xsm:px-3 flex flex-col items-center justify-center mb-8">
                <div className="w-full max-w-[901px] mx-auto">
                    <header className="flex justify-center items-center pt-8 pb-12 w-full">
                        <h1 className="text-xl xsm:text-2xl font-extrabold text-center">Algebra Worksheet</h1>
                    </header>
                    <div className="grid grid-cols-2 border-r-2 border-black mb-10 xsm:mb-20">
                        {!numbersGenerated ? (
                            Array.from({ length: 2 }).map((_, lineIndex) => (
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
                            <p className='font-semibold text-black text-xs xsm:text-sm'>
                                {answers.map(answer => Math.round(answer)).filter((_, index) => index % 2 === 0).join(', ')}
                            </p>
                            <p className='font-semibold text-black text-xs xsm:text-sm'>
                                {answers.map(answer => Math.round(answer)).filter((_, index) => index % 2 !== 0).join(', ')}
                            </p>
                        </div>
                    )}




                    <footer className="flex justify-center flex-wrap items-center mb-10 gap-2 xsm:gap-4">
                        <button
                            onClick={generateProblems}
                            className="px-2 xsm:px-5 py-1 h-10 xsm:h-[53px] border-2 border-black outline-none text-white text-xs xsm:text-base font-medium bg-black tracking-widest hover:bg-white hover:text-black transition-all duration-200"
                        >
                            Generate Level 1
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

export default AlgebraWorksheet;
