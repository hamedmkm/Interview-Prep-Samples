import React, { useState, useEffect } from 'react';
import Loader from '../Loader/Loader'; 

const UsersList = () => {
  const [loading, setLoading] = useState(true); 
  const [users, setUsers] = useState([]);       
  const [error, setError] = useState(null);    


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('مشکلی در دریافت داده‌ها پیش آمده است!');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);        
        setLoading(false);      
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);       
      });
  }, []); 

  if (loading) {
    return <Loader />;
  }


  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-lg text-red-500 font-semibold">خطا: {error}</p>
      </div>
    );
  }


  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-xl mt-6">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">User List</h2>
      <ul className="space-y-4">
        {users.map((user) => (
          <li key={user.id} className="p-4 border rounded-lg shadow-md hover:bg-gray-100">
            <p className="text-xl font-semibold text-gray-800">{user.name}</p>
            <p className="text-gray-600">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
