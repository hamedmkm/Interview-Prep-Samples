import { FaHandshake, FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
<div className="p-6 w-[90%]  text-slate-300 rounded-lg shadow-lg flex flex-col justify-center h-screen mx-auto">
<h1 className=" text-4xl font-semibold text-center p-10 text-neutral-200">hamednourzaie!</h1>
  <motion.h1
    className="text-3xl  font-extrabold mb-4 text-center"
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    transition={{ duration: 1 }}
  >
  
    خوش آمدید به صفحه اصلی
  </motion.h1>
  <motion.p
    className="text-lg text-center mb-6"
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    transition={{ duration: 1 }}
  >
    این صفحه برای آماده‌سازی شما برای مصاحبه‌های شغلی طراحی شده است. در اینجا مجموعه‌ای از نمونه‌ها و ابزارهای مفید وجود دارد که به شما در یادگیری و مرور مفاهیم کمک می‌کند.
  </motion.p>
  <div className="flex justify-center space-x-8">
    <div className="flex flex-col items-center">
      <FaHandshake size={50} className="mb-2 animate-pulse " />
      <p className=''>آمادگی برای مصاحبه</p>
    </div>
    <div className="flex flex-col items-center">
      <FaGraduationCap size={50} className="mb-2 animate-pulse" />
      <p>یادگیری مهارت‌ها</p>
    </div>
  </div>
  
</div>

</>
  );
};

export default Home;
