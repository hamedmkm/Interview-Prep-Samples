import React, { useState } from 'react';

function TodoList() {
  const [items, setItems] = useState([]); 
  const [inputValue, setInputValue] = useState(''); 

 
  const addItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue(''); 
    }
  };


  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className="min-h-screen flex items-center justify-center  p-6">
      <div className=" shadow-lg bg-white rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl  font-bold text-gray-800 mb-4 text-center">
Todo List        </h1>
        <div className="flex mb-4">
        <button
            onClick={addItem}
            className="p-2 bg-blue-500 text-white rounded-l-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            add
          </button>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} 
            placeholder="write new todos   "
            className="flex-1 p-2 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
         
        </div>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-2 bg-gray-50 rounded-lg hover:bg-gray-200"
            >
              <span className="text-gray-700">{item}</span>
              <button
                onClick={() => removeItem(index)}
                className="text-red-500 hover:text-red-700 focus:outline-none"
              >
                remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
