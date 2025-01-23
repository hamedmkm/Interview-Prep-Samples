import React, { useState } from "react";

const SumNumberComponent = () => {
    const numbers = ["1", "2", "3", "4"];
    const initialSum = numbers.reduce((acc, curr) => acc + Number(curr), 0); 
    const [yourNumber, setYourNumber] = useState(0);
    const [sum, setSum] = useState(initialSum);

    const sumFunction = () => {
        setSum(initialSum + yourNumber); 
    };

    return (
        <div className="min-h-screen flex items-center justify-center  p-6">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center animate-fade-in">
                    Sum Calculator
                </h1>
                <ul className="flex justify-between items-center mb-6">
                    {numbers.map((num, index) => (
                        <li
                            key={index}
                            className="text-lg font-semibold text-gray-700 bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center animate-slide-in"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            {num}
                        </li>
                    ))}
                </ul>
                <div className="mb-4">
                    <input
                        type="number"
                        placeholder="Enter a number"
                        onChange={(e) => setYourNumber(Number(e.target.value))}
                        className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    onClick={sumFunction}
                    className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-lg font-bold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 focus:outline-none"
                >
                    Calculate
                </button>
                <p
                    className="text-center text-xl font-bold text-gray-800 mt-6 animate-fade-in-up"
                    style={{ animationDelay: "0.5s" }}
                >
                    Sum of all numbers:{" "}
                    <span className="text-blue-500">{sum}</span>
                </p>
            </div>
        </div>
    );
};

export default SumNumberComponent;
