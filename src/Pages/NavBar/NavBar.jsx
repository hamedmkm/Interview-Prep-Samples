import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollContainerRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/NameFilter", name: "NameFilter" },
    { path: "/TodoList", name: "TodoList" },
    { path: "/SumNumberComponent", name: "SumNumber" },
    { path: "/Tabs", name: "Tabs" },
    { path: "/Loader", name: "Loader" },
    { path: "/UsersList", name: "UsersList" },
    { path: "/RegistrationForm", name: "RegistrationForm" },
    { path: "/ImageGallery", name: "Gallery" },
    { path: "/Time", name: "Timer" },
    { path: "/Weather", name: "Weather" },
    { path: "/RandomQuote", name: "RandomQuote" },
    { path: "/VisitorCounter", name: "VisitorCounter" },
    { path: "/CurrentTime", name: "Time" },
    { path: "/poll", name: "poll" },
    { path: "/MusicPlayer", name: "MusicPlayer" },
    { path: "/YouTubeSearch", name: "YouTubeSearch" },
    { path: "/MyGoogleMap", name: "google map" },
  ];

  const navLinkClasses = ({ isActive }) =>
    `text-white font-semibold text-lg px-4 py-2 rounded-lg transition-all duration-500 ease-in-out transform ${
      isActive
        ? "text-yellow-400 scale-110 shadow-lg"
        : "hover:text-yellow-400 hover:scale-110"
    }`;

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <nav className="shadow-2xl p-6 text-white relative bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800">
      {/* منوی دسکتاپ با اسکرول */}
      <div className="hidden lg:flex items-center gap-2 relative">
     
        <ul
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto pb-5 no-scrollbar items-center"
          style={{ scrollBehavior: "smooth" }}
        >
          {navItems.map((item) => (
            <li
              key={item.path}
              className="transition-transform whitespace-nowrap duration-500 ease-in-out hover:scale-110"
            >
              <NavLink to={item.path} className={navLinkClasses}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
       
    
      </div>

      {/* منوی موبایل */}
      <div className="lg:hidden flex items-center justify-between">
        <button
          onClick={toggleMenu}
          className="text-white text-2xl focus:outline-none"
        >
          {isOpen ? "×" : "☰"}
        </button>

        {/* پس‌زمینه تاریک */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={closeMenu}
          ></div>
        )}

        {isOpen && (
          <ul className="absolute whitespace-nowrap bg-black top-14 left-0 w-full text-center p-4 z-20">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={closeMenu}
                  className={navLinkClasses}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
