import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="shadow-2xl p-6 text-white relative">
      {/* Desktop Menu */}
      <ul className="flex gap-8 justify-center items-center hidden lg:flex">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-white font-semibold text-lg px-4 py-2 rounded-lg transition duration-300 ease-in-out transform ${
                isActive
                  ? "text-yellow-400 scale-105 border-r-2"
                  : "hover:text-yellow-400 hover:scale-105 border-r-2"
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
                  ? "text-yellow-400 scale-105 border-r-2"
                  : "hover:text-yellow-400 hover:scale-105 border-r-2"
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
                  ? "text-yellow-400 scale-105 border-r-2"
                  : "hover:text-yellow-400 hover:scale-105 border-r-2"
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
                  ? "text-yellow-400 scale-105 border-r-2"
                  : "hover:text-yellow-400 hover:scale-105 border-r-2"
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
                  ? "text-yellow-400 scale-105 border-r-2"
                  : "hover:text-yellow-400 hover:scale-105 border-r-2"
              }`
            }
          >
            Tabs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Loader"
            className={({ isActive }) =>
              `text-white font-semibold text-lg px-4 py-2 rounded-lg transition duration-300 ease-in-out transform ${
                isActive
                  ? "text-yellow-400 scale-105 border-r-2"
                  : "hover:text-yellow-400 hover:scale-105 border-r-2"
              }`
            }
          >
            Loader
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/UsersList"
            className={({ isActive }) =>
              `text-white font-semibold text-lg px-4 py-2 rounded-lg transition duration-300 ease-in-out transform ${
                isActive
                  ? "text-yellow-400 scale-105 border-r-2"
                  : "hover:text-yellow-400 hover:scale-105 border-r-2"
              }`
            }
          >
            UsersList
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/RegistrationForm"
            className={({ isActive }) =>
              `text-white font-semibold text-lg px-4 py-2 rounded-lg transition duration-300 ease-in-out transform ${
                isActive
                  ? "text-yellow-400 scale-105 border-r-2"
                  : "hover:text-yellow-400 hover:scale-105 border-r-2"
              }`
            }
          >
            RegistrationForm
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ImageGallery"
            onClick={closeMenu}
            className={({ isActive }) =>
              `text-white font-semibold text-lg px-4 py-2 block transition duration-300 ease-in-out transform ${
                isActive
                  ? "text-yellow-400 scale-105 border-r-2"
                  : "hover:text-yellow-400 hover:scale-105 border-r-2"
              }`
            }
          >
            Gallery
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

        {/* Backdrop */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={closeMenu}
          ></div>
        )}

        {isOpen && (
          <ul className="absolute bg-black top-14 left-0 w-full text-center p-4 z-20">
            <li>
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-white font-semibold text-lg px-4 py-2 block transition duration-300 ease-in-out transform ${
                    isActive
                      ? "text-yellow-400 scale-105 border-r-2"
                      : "hover:text-yellow-400 hover:scale-105 border-r-2"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/NameFilter"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-white font-semibold text-lg px-4 py-2 block transition duration-300 ease-in-out transform ${
                    isActive
                      ? "text-yellow-400 scale-105 border-r-2"
                      : "hover:text-yellow-400 hover:scale-105 border-r-2"
                  }`
                }
              >
                NameFilter
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/TodoList"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-white font-semibold text-lg px-4 py-2 block transition duration-300 ease-in-out transform ${
                    isActive
                      ? "text-yellow-400 scale-105 border-r-2"
                      : "hover:text-yellow-400 hover:scale-105 border-r-2"
                  }`
                }
              >
                TodoList
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/SumNumberComponent"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-white font-semibold text-lg px-4 py-2 block transition duration-300 ease-in-out transform ${
                    isActive
                      ? "text-yellow-400 scale-105 border-r-2"
                      : "hover:text-yellow-400 hover:scale-105 border-r-2"
                  }`
                }
              >
                SumNumber
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Tabs"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-white font-semibold text-lg px-4 py-2 block transition duration-300 ease-in-out transform ${
                    isActive
                      ? "text-yellow-400 scale-105 border-r-2"
                      : "hover:text-yellow-400 hover:scale-105 border-r-2"
                  }`
                }
              >
                Tabs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Loader"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-white font-semibold text-lg px-4 py-2 block transition duration-300 ease-in-out transform ${
                    isActive
                      ? "text-yellow-400 scale-105 border-r-2"
                      : "hover:text-yellow-400 hover:scale-105 border-r-2"
                  }`
                }
              >
                Loader
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/UsersList"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-white font-semibold text-lg px-4 py-2 block transition duration-300 ease-in-out transform ${
                    isActive
                      ? "text-yellow-400 scale-105 border-r-2"
                      : "hover:text-yellow-400 hover:scale-105 border-r-2"
                  }`
                }
              >
                UsersList
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/RegistrationForm"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-white font-semibold text-lg px-4 py-2 block transition duration-300 ease-in-out transform ${
                    isActive
                      ? "text-yellow-400 scale-105 border-r-2"
                      : "hover:text-yellow-400 hover:scale-105 border-r-2"
                  }`
                }
              >
                RegistrationForm
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ImageGallery"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-white font-semibold text-lg px-4 py-2 block transition duration-300 ease-in-out transform ${
                    isActive
                      ? "text-yellow-400 scale-105 border-r-2"
                      : "hover:text-yellow-400 hover:scale-105 border-r-2"
                  }`
                }
              >
                ImageGallery
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
