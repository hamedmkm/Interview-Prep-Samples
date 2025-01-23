import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [loading, setLoading] = useState(true);  
  const [message, setMessage] = useState('در حال بارگذاری...');  

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
      setMessage('داده‌ها دریافت شدند!');  
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg w-80">
        <div className="flex justify-center items-center mb-4">
          {loading ? (
            <div className="animate-spin rounded-full border-t-4 border-blue-500 w-12 h-12"></div>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
        <p className="text-xl font-semibold text-gray-700">{message}</p>
      </div>
    </div>
  );
};

export default Loader;
