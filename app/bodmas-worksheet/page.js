"use client"
import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BodmasWorksheet = () => {
    const [showAnswer, setShowAnswer] = useState(false);
    const [problems, setProblems] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [numbersGenerated, setNumbersGenerated] = useState(false);

    const generateProblems = () => {
        const newProblems = [];
        const newAnswers = [];
        const operations = ['+', '-', '*', '/'];

        for (let i = 0; i < 45; i++) {
            const num1 = Math.floor(Math.random() * 10) + 1;
            const num2 = Math.floor(Math.random() * 10) + 1;
            const num3 = Math.floor(Math.random() * 10) + 1;
            const num4 = Math.floor(Math.random() * 10) + 1;

            const operation1 = operations[Math.floor(Math.random() * operations.length)];
            const operation2 = operations[Math.floor(Math.random() * operations.length)];
            const operation3 = operations[Math.floor(Math.random() * operations.length)];

            const problem = `(${num1} ${operation1} ${num2}) ${operation2} ${num3} ${operation3} ${num4} =`;
            const answer = eval(`(${num1} ${operation1} ${num2}) ${operation2} ${num3} ${operation3} ${num4}`);

            newProblems.push(problem);
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
        doc.text('BODMAS Worksheet', 105, 10, null, null, 'center');

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

        doc.save('bodmas-worksheet.pdf');
    };

    return (
        <>
            {/* Header Section */}
            <Header />

            {/* BODMAS Worksheet */}
            <div className="px-1 xsm:px-3 flex flex-col items-center justify-center mb-8">
                <div className="w-full max-w-[901px] mx-auto">
                    <header className="flex justify-center items-center pt-8 pb-12 w-full">
                        <h1 className="text-xl xsm:text-2xl font-extrabold text-center">BODMAS Worksheet</h1>
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
                            {Array.from({ length: 3 }).map((_, lineIndex) => (
                                <p key={lineIndex} className='font-semibold text-black text-xs xsm:text-sm'>{answers.slice(lineIndex * 15, (lineIndex + 1) * 15).join(', ')}</p>
                            ))}
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

export default BodmasWorksheet;
