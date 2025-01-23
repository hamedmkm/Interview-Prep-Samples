import React, { useState } from 'react';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({}); // برای ذخیره خطاها

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // اعتبارسنجی نام
    if (!name) {
      newErrors.name = 'نام الزامی است.';
    }

    // اعتبارسنجی ایمیل
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email)) {
      newErrors.email = 'لطفاً یک ایمیل معتبر وارد کنید.';
    }

    // اعتبارسنجی رمز عبور
    if (!password) {
      newErrors.password = 'رمز عبور الزامی است.';
    } else if (password.length < 6) {
      newErrors.password = 'رمز عبور باید حداقل ۶ کاراکتر باشد.';
    }

    setErrors(newErrors);

    // اگر هیچ خطایی نباشد، اطلاعات را ارسال می‌کنیم
    if (Object.keys(newErrors).length === 0) {
      // ارسال فرم
      console.log('فرم ارسال شد:', { name, email, password });
    }
  };

  return (
    <div className="max-w-md mx-auto w-[95%] p-6 min-h-80 bg-white rounded-xl shadow-2xl mt-40">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">RegistrationForm </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-gray-700 text-lg">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-lg">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-lg">Password </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition duration-300"
        >
        Signup  
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
