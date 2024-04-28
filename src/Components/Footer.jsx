import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=''>
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-2xl flex items-center space-x-3 rtl:space-x-reverse text-green-400 justify-center text-center">
            &lt;
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Password Manager
            </span>
            /&gt;
          </div>
          <ul className="text-1xl flex flex-wrap items-center mb-6 font-semibold text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="/" className="hover:underline me-4 md:me-6">
                Home
              </Link>
            </li>
            <li>
              <Link to="/About" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 Password Manager™. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
