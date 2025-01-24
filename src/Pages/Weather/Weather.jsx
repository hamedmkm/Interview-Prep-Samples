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
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-800 p-4">
      <h2 className="text-2xl font-bold mb-6 text-white">وضعیت آب‌وهوا</h2>
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="نام شهر را وارد کنید"
          className="w-64 p-2 border border-gray-300 rounded shadow focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
        >
          جستجو
        </button>
      </div>
      {error && (
        <p className="text-red-500 text-sm font-medium mb-4">{error}</p>
      )}
      {weatherData && (
        <div className="bg-white rounded shadow p-4 w-full max-w-md text-center">
          <h3 className="text-xl font-semibold text-white">
            {weatherData.name}
          </h3>
          <p className="text-lg mt-2">دما: {weatherData.main.temp}°C</p>
          <p className="text-gray-600 mt-1">
            وضعیت: {weatherData.weather[0].description}
          </p>
        </div>
      )}
    </div>
  );
};

export default Weather;
