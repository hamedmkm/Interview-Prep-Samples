import React, { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // دریافت مقدار بازدیدکنندگان از localStorage
    const currentCount = parseInt(localStorage.getItem("visitorCount")) || 0;

    // افزایش مقدار بازدیدکنندگان
    const newCount = currentCount + 1;

    // ذخیره مقدار جدید در localStorage
    localStorage.setItem("visitorCount", newCount);

    // به‌روزرسانی state کامپوننت
    setVisitorCount(newCount);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-lg bg-gray-100 text-gray-800">
      <h1 className="text-2xl font-bold">تعداد بازدیدکنندگان:</h1>
      <p className="text-3xl font-extrabold text-blue-600 mt-2">
        {visitorCount}
      </p>
    </div>
  );
};

export default VisitorCounter;
