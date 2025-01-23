import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" shadow-2xl p-6 text-white">
      {/* Desktop Menu */}
      <ul className="flex gap-8 justify-center items-center hidden lg:flex">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-white font-semibold text-lg px-4 py-2 rounded-lg transition duration-300 ease-in-out transform ${
                isActive
                  ? "text-yellow-400 scale-105"
                  : "hover:text-yellow-400 hover:scale-105"
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/NameFilter"
            className={({ isActive }) =>
              `text-white font-semibold text-lg px-4 py-2 rounded-lg transition duration-300 ease-in-out transform ${
                isActive
                  ? "text-yellow-400 scale-105"
                  : "hover:text-yellow-400 hover:scale-105"
              }`
            }
          >
            NameFilter
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/TodoList"
            className={({ isActive }) =>
              `text-white font-semibold text-lg px-4 py-2 rounded-lg transition duration-300 ease-in-out transform ${
                isActive
                  ? "text-yellow-400 scale-105"
                  : "hover:text-yellow-400 hover:scale-105"
              }`
            }
          >
            TodoList
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/SumNumberComponent"
            className={({ isActive }) =>
              `text-white font-semibold text-lg px-4 py-2 rounded-lg transition duration-300 ease-in-out transform ${
                isActive
                  ? "text-yellow-400 scale-105"
                  : "hover:text-yellow-400 hover:scale-105"
              }`
            }
          >
            SumNumber
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Tabs"
            className={({ isActive }) =>
              `text-white font-semibold text-lg px-4 py-2 rounded-lg transition duration-300 ease-in-out transform ${
                isActive
                  ? "text-yellow-400 scale-105"
                  : "hover:text-yellow-400 hover:scale-105"
              }`
            }
          >
            Tabs
          </NavLink>
        </li>
      </ul>

      {/* Mobile Menu */}
      <div className="lg:hidden flex items-center justify-between">
        <button
          onClick={toggleMenu}
          className="text-white text-2xl focus:outline-none"
        >
          {isOpen ? "×" : "☰"}
        </button>

        {isOpen && (
          <ul className="absolute top-13 left-0 w-full text-center p-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-white font-semibold text-lg px-4 py-2 block transition duration-300 ease-in-out transform ${
                    isActive
                      ? "text-yellow-400 scale-105"
                      : "hover:text-yellow-400 hover:scale-105"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
          <NavLink
            to="/TodoList"
            className={({ isActive }) =>
              `text-white font-semibold text-lg px-4 py-2 rounded-lg transition duration-300 ease-in-out transform ${
                isActive
                  ? "text-yellow-400 scale-105"
                  : "hover:text-yellow-400 hover:scale-105"
              }`
            }
          >
            TodoList
          </NavLink>
        </li>
            <li>
              <NavLink
                to="/SumNumberComponent"
                className={({ isActive }) =>
                  `text-white font-semibold text-lg px-4 py-2 block transition duration-300 ease-in-out transform ${
                    isActive
                      ? "text-yellow-400 scale-105"
                      : "hover:text-yellow-400 hover:scale-105"
                  }`
                }
              >
                SumNumber
              </NavLink>
            </li>
            <li>
          <NavLink
            to="/NameFilter"
            className={({ isActive }) =>
              `text-white font-semibold text-lg px-4 py-2 rounded-lg transition duration-300 ease-in-out transform ${
                isActive
                  ? "text-yellow-400 scale-105"
                  : "hover:text-yellow-400 hover:scale-105"
              }`
            }
          >
            NameFilter
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Tabs"
            className={({ isActive }) =>
              `text-white font-semibold text-lg px-4 py-2 rounded-lg transition duration-300 ease-in-out transform ${
                isActive
                  ? "text-yellow-400 scale-105"
                  : "hover:text-yellow-400 hover:scale-105"
              }`
            }
          >
            Tabs
          </NavLink>
        </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
