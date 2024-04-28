import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="md:container mx-auto justify-between px-20 py-5 text-2xl items-center text-center text-white sm:flex sm:items-center sm:justify-between">
      <div className="font-bold text-4xl text-green-400">&lt;<span className="text-white ">Password Manager</span>/&gt;</div>
      <ul className="flex font-medium justify-center gap-8 items-center text-center mt-4">
        <li className="hover:font-bold">
          <Link to="/Password-Manager/">Home</Link>
        </li>
        <li className="hover:font-bold">
          <Link to="/Password-Manager/About">About</Link>
        </li>
        <li className="hover:font-bold">
          <Link to="/Password-Manager/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
