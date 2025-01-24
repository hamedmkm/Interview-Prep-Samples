import React, { useState, useEffect } from 'react';
import moment from 'moment-jalaali'; // کتابخانه تبدیل تاریخ شمسی

const CurrentTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [isJalali, setIsJalali] = useState(false); // وضعیت برای تغییر تاریخ

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // پاک کردن تایمر هنگام خارج شدن کامپوننت
    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentDateTime.toLocaleTimeString();

  // فرمت کردن تاریخ به میلادی یا شمسی
  const formattedDate = isJalali
    ? moment(currentDateTime).format('jYYYY/jMM/jDD') // تاریخ شمسی
    : currentDateTime.toLocaleDateString(); // تاریخ میلادی

  // تابع تغییر وضعیت تاریخ
  const toggleDateFormat = () => {
    setIsJalali(!isJalali);
  };

  // فرمت کردن تاریخ به صورت جداگانه برای روز، ماه و سال
  const formattedDay = isJalali
    ? moment(currentDateTime).format('jD') // روز شمسی
    : currentDateTime.toLocaleDateString('en-US', { day: '2-digit' }); // روز میلادی

  const formattedMonth = isJalali
    ? moment(currentDateTime).format('jMMMM') // ماه شمسی
    : currentDateTime.toLocaleDateString('en-US', { month: 'long' }); // ماه میلادی

  const formattedYear = isJalali
    ? moment(currentDateTime).format('jYYYY') // سال شمسی
    : currentDateTime.getFullYear(); // سال میلادی

  return (
    <div className="flex flex-col  items-center justify-center min-h-screen  p-6 rounded-lg shadow-2xl ">
              <button
        onClick={toggleDateFormat}
        className="mt-4 bg-gray-500 text-white px-6 py-3 rounded-full shadow mb-10 hover:bg-gray-600 transition duration-300"
      >
        نمایش تاریخ {isJalali ? 'میلادی' : 'شمسی'}
      </button>
      <h2 className="text-4xl text-black mb-4 animate-fade-in-up font-extrabold">تاریخ و زمان جاری</h2>

      <p className="text-4xl font-bold text-white animate-bounce-in">{formattedTime}</p>
      {/* جدول تاریخ با حاشیه‌های گریدینت */}
      <table className="mt-6 table-auto text-white border-4 border-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gradient-to-r from-gary-500 via-gray-400 to-gray-500">
            <th className="px-6 py-3 text-xl">روز</th>
            <th className="px-6 py-3 text-xl">ماه</th>
            <th className="px-6 py-3 text-xl">سال</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-zinc-700 hover:bg-zinc-600">
            <td className="px-6 py-3 text-lg">{formattedDay}</td>
            <td className="px-6 py-3 text-lg">{formattedMonth}</td>
            <td className="px-6 py-3 text-lg">{formattedYear}</td>
          </tr>
        </tbody>
      </table>

    
      
      <p className="text-xl text-white mb-2 animate-fade-in-up">{formattedDate}</p>
 

    </div>
  );
};

export default CurrentTime;
