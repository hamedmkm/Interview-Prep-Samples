import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('home'); // مدیریت تب فعال

  // محتوای هر تب
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <p>Welcome to the Home page!</p>;
      case 'about':
        return <p>This is the About page!</p>;
      case 'contact':
        return <p>Here is the Contact page!</p>;
      default:
        return null;
    }
  };

  return (
    <div className="tabs-container">
      {/* تب‌ها */}
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => setActiveTab('home')}
        >
          Home
        </button>
        <button
          className={`tab ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => setActiveTab('about')}
        >
          About
        </button>
        <button
          className={`tab ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => setActiveTab('contact')}
        >
          Contact
        </button>
      </div>

      {/* نمایش محتوای تب فعال */}
      <div className="tab-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Tabs;
