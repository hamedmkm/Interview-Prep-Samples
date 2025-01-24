import React, { useState, useEffect } from 'react';

const Time = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);


  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);


  const [showCalculator, setShowCalculator] = useState(true);
  const [showTimer, setShowTimer] = useState(false);

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
    setResult(null);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('خطا');
    }
  };


  const handleStartTimer = (seconds) => {
    setTimeLeft(seconds);
    setIsRunning(true);
  };

  const handleToggleTimer = () => {
    setIsRunning((prev) => !prev);
  };

  useEffect(() => {
    let interval;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      alert('زمان تمام شد!');
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  return (
    <div className="max-w-4xl mx-auto p-8 w-[90%] rounded-xl shadow-lg">
      <div className="mb-6 text-center">
        <button
          onClick={() => setShowCalculator((prev) => !prev)}
          className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 mx-2"
        >
          {showCalculator ? 'مخفی کردن ماشین‌حساب' : 'نمایش ماشین‌حساب'}
        </button>
        <button
          onClick={() => setShowTimer((prev) => !prev)}
          className="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 mx-2"
        >
          {showTimer ? 'مخفی کردن تایمر' : 'نمایش تایمر'}
        </button>
      </div>

      {/* نمایش ماشین‌حساب */}
      {showCalculator && (
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-center text-white mb-4">calculator</h2>
          <input
            type="text"
            value={input}
            readOnly
            className="w-full p-4 text-xl text-right bg-gray-100 rounded-lg border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="grid grid-cols-4 gap-6 mb-6">
            {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '.', '=', '/'].map((btn) => (
              <button
                key={btn}
                onClick={() => btn === '=' ? handleCalculate() : handleButtonClick(btn)}
                className="py-4 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
              >
                {btn}
              </button>
            ))}
            <button
              onClick={handleClear}
              className="col-span-4 py-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
            >
              C
            </button>
          </div>
          {result !== null && <div className="mt-4 text-center text-xl font-bold text-gray-800">result: {result}</div>}
        </div>
      )}

      {/* نمایش تایمر */}
      {showTimer && (
        <div>
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">تایمر معکوس</h2>
          <div className="flex justify-center space-x-6 mb-6">
            {[10, 30, 60].map((time) => (
              <button
                key={time}
                onClick={() => handleStartTimer(time)}
                className="py-3 px-6 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
              >
                {time} ثانیه
              </button>
            ))}
          </div>
          <div className="text-center text-xl mb-4">
            {isRunning ? (
              <span className="text-green-600">زمان باقی‌مانده: {timeLeft} ثانیه</span>
            ) : (
              <span className="text-red-600">تایمر متوقف است</span>
            )}
          </div>
          <div className="text-center">
            <button
              onClick={handleToggleTimer}
              className={`py-2 px-6 rounded-lg text-white ${
                isRunning ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
              } transition duration-300`}
            >
              {isRunning ? 'توقف' : 'شروع'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Time;
