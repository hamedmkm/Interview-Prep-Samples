import React, { useState } from 'react';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = '2f13be9b448ab55dc6bdc8c15474bfac';

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      if (!response.ok) {
        throw new Error('شهر مورد نظر یافت نشد');
      }
      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    }
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    if (city) {
      fetchWeather();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-white p-4">
      <h2 className="text-4xl font-extrabold mb-8 animate-fade-in">
        وضعیت آب‌وهوا
      </h2>
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="نام شهر را وارد کنید"
          className="w-64 p-3 border border-gray-300 rounded-full shadow focus:outline-none focus:ring focus:ring-purple-400 transition-all duration-300"
        />
        <button
          onClick={handleSearch}
          className="bg-purple-600 text-white px-6 py-3 rounded-full shadow hover:bg-purple-700 hover:scale-105 active:scale-95 transition-transform duration-200"
        >
          جستجو
        </button>
      </div>
      {error && (
        <p className="text-red-500 text-lg font-medium mb-6 animate-shake">
          {error}
        </p>
      )}
      {weatherData && (
  <div className="relative  text-black rounded-lg shadow-xl p-8 w-full max-w-md text-center animate-bounce-in">
    {/* افکت محو شدن و نمایشی */}
    <div className="absolute top-0 left-0 w-full h-full  bg-opacity-10 rounded-lg backdrop-blur-sm pointer-events-none animate-fade-in"></div>
    <h3 className="text-3xl font-bold mb-4 drop-shadow-md animate-fade-in-up">
      {weatherData.name}
    </h3>
    <p className="text-2xl font-medium mb-4 drop-shadow-md animate-fade-in-up">
      دما: {weatherData.main.temp}°C
    </p>
    <p className="text-lg font-bold italic drop-shadow-md animate-fade-in-up">
    {weatherData.weather[0].description} :  وضعیت 
    </p>
    <div className="flex justify-center mt-6 animate-pulse">
      <div className="w-8 h-8 rounded-full bg-[#00fd2e] bg-opacity-20 animate-spin-slow"></div>
    </div>
  </div>
)}

    </div>
  );
};

export default Weather;
