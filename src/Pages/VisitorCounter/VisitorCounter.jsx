import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const currentCount = parseInt(localStorage.getItem("visitorCount")) || 0;
    const newCount = currentCount + 1;
    localStorage.setItem("visitorCount", newCount);
    setVisitorCount(newCount);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen ">
      <motion.div
        className="flex flex-col items-center justify-center p-6 border-4 rounded-xl shadow-2xl bg-white text-gray-800 w-[90%] max-w-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <motion.h1
          className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500 bg-clip-text text-transparent"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          تعداد بازدیدکنندگان
        </motion.h1>
        <motion.p
          className="text-6xl font-black mb-4 drop-shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 120 }}
        >
          {visitorCount}
        </motion.p>
        <motion.div
          className="px-6 py-2 mt-4 text-lg font-semibold text-white bg-[#7e7979] rounded-full shadow-lg hover:text-black transition-all duration-500"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          از بازدید شما سپاسگزاریم!
        </motion.div>
      </motion.div>
    </div>
  );
};

export default VisitorCounter;
