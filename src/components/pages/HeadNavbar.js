import React, { useState } from "react";
import imglogo from "../assets/headlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const HeadNavbar = ({amountInCart}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to={"/"} className="flex items-center">
            <img src={imglogo} className="h-8  mr-1" alt="Adornare Logo" />
            <span className="self-center sm:text-[40px] font-semibold whitespace-nowrap dark:text-white">
              dornare Luxury
            </span>
          </Link>
          <button
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className="hidden w-full sm:block sm:w-auto md:text-2xl"
            id="navbar-default"
          >
            <ul className="flex items-center md:space-x-6  sm:dark:bg-gray-900 sm:dark:hover:text-white ">
              <li>
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className="block py-2 pl-2 pr-2 text-gray-700 rounded sm:text-blue-700  hover:bg-gray-100 sm:dark:text-blue-500  hover:text-blue-800"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  onClick={closeMobileMenu}
                  className="block py-2 pl-2 pr-2 text-gray-700 rounded hover:bg-gray-100 hover:text-blue-700 sm:dark:text-blue-500"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={closeMobileMenu}
                  className="block py-2 pl-2 pr-2 text-gray-700 hover:text-blue-700 rounded hover:bg-gray-100 sm:dark:text-blue-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/shopping-cart"
                  onClick={closeMobileMenu}
                  className="block py-2 pl-2 pr-2 text-gray-700 rounded hover:text-blue-700 hover:bg-gray-100 sm:dark:text-blue-500"
                >
                  <FontAwesomeIcon icon={faCartShopping} />
                  {amountInCart > 0 && <p>{amountInCart}</p>}
                  {amountInCart >= 100 && <p>{"++"}</p>}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden absolute w-64 h-full top-0 overflow-hidden bg-black transform translate-z-0 z-50"
            onClick={closeMobileMenu}
          >
            <Link to={"/"} className="bg-gray-900 w-full py-3 px-4 flex">
              <img src={imglogo} className="h-8" alt="Adornare Logo" />
              <span className="self-center font-semibold whitespace-nowrap text-white dark:text-white">
                Adornare Luxury
              </span>
            </Link>
            <ul className="text-center">
              <li>
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className="block text-white text-opacity-90 text-sm px-4 py-3 relative bg-black bg-opacity-90 transition-all duration-600 ease-in-out sm:dark:text-blue-500 hover:text-blue-700 hover:bg-gray-900"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  onClick={closeMobileMenu}
                  className="block text-white text-opacity-90 text-sm px-4 py-3 relative bg-black bg-opacity-90 transition-all duration-600 ease-in-out hover:text-blue-700 hover:bg-gray-900 sm:dark:text-blue-500"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={closeMobileMenu}
                  className=" hover:text-blue-700 block text-white text-opacity-90 text-sm px-4 py-3 relative bg-black bg-opacity-90 transition-all duration-600 ease-in-out hover:bg-gray-900 sm:dark:text-blue-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/shopping-cartF"
                  onClick={closeMobileMenu}
                  className="block text-white text-opacity-90 text-sm px-4 py-3 relative bg-black bg-opacity-90 transition-all duration-600 ease-in-out hover:bg-gray-900 hover:text-blue-700"
                >
                  <FontAwesomeIcon icon={faCartShopping} />
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* Mobile */}
      </nav>
    </div>
  );
};

export default HeadNavbar;
