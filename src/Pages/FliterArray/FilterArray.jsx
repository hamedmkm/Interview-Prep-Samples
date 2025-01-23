import React, { useState } from 'react';

function NameFilter() {
  const names = ['Ali', 'Sara', 'Reza', 'Mina', 'Amir', 'Niloofar', 'Hassan', 'Leila', 'Mohammad', 'Fatemeh', 
  'Peyman', 'Shirin', 'Omid', 'Negin', 'Hossein', 'Zahra', 'Kian', 'Shahla', 'Mohsen', 'Mahsa', 
  'Farid', 'Ariana', 'Sina', 'Yasmin', 'Vahid', 'Samira', 'Ehsan', 'Marjan', 'Arash', 'Niloofar', 
  'Navid', 'Mitra', 'Kourosh', 'Taraneh', 'Morteza', 'Sahar', 'Siavash', 'Diana', 'Reyhaneh', 'Kaveh', 
  'Elham', 'Khadijeh', 'Mehrdad', 'Sima', 'Vera', 'Bita', 'Hamideh', 'Bijan', 'Parvaneh', 'Siamak', 
  'Shahram', 'Marzieh', 'Alireza', 'Faezeh', 'Nader', 'Sina', 'Mahan', 'Azadeh', 'Yalda', 'Armin', 
  'Tahereh', 'Mina', 'Sami', 'Mahnaz', 'Bahar', 'Behzad', 'Tahmineh', 'Kiana', 'Masoud', 'Vila', 
  'Saeed', 'Zeinab', 'Pouyan', 'Feryal', 'Ehsan', 'Mohammadali', 'Fatima', 'Sahar', 'Aliya', 'Tina', 
  'Ramin', 'Maral', 'Mohammadreza', 'Elina', 'Ghazal', 'Asghar', 'Zeynab', 'Alborz', 'Shadi', 'Omid', 
  'Simin', 'Nashit', 'Kiana', 'Farzan', 'Reza', 'Ladan', 'Yasmin', 'Hassan', 'Mehdi', 'Roya', 'Mahan', 
  'Amin', 'Shaghayegh', 'Saed', 'Mojtaba', 'Sanaz', 'Fariba', 'Parham', 'Shahrzad', 'Javad', 'Amirhossein'
  ]; 
  const [searchTerm, setSearchTerm] = useState(''); 


  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex items-center justify-center  p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          filter name
        </h1>
        <input
          type="text"
          placeholder="search   "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
       <ul className="space-y-2 max-h-60 overflow-y-auto">
  {filteredNames.map((name, index) => (
    <li
      key={index}
      className="p-2 bg-gray-50 rounded-lg text-gray-700 hover:bg-gray-200"
    >
      {name}
    </li>
  ))}
</ul>

      </div>
    </div>
  );
}

export default NameFilter;
