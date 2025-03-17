import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Extramarks_Logo.jpg";
import AuthButton from "../Buttons/AuthButton";

const Navbar = () => {
  return (
    <nav className="h-20 bg-orange-600 flex justify-between items-center">
      <div className="ml-56 h-full flex">
        <Link to="/" className="h-full inline-block p-2">
          <img
            src={Logo}
            alt="Extramarks_Logo"
            className="h-full w-auto object-contain"
          />
        </Link>
        <ul className="list-none flex gap-15 items-center ml-10">
          <li>
            <NavLink
              to="/schools"
              className={({ isActive }) =>
                `text-sm font-bold px-4 py-2 rounded ${
                  isActive
                    ? "bg-white text-black"
                    : "text-white hover:bg-orange-700"
                }`
              }
            >
              Schools
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/teachers"
              className={({ isActive }) =>
                `text-sm font-bold px-4 py-2 rounded ${
                  isActive
                    ? "bg-white text-black"
                    : "text-white hover:bg-orange-700"
                }`
              }
            >
              Teachers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/students"
              className={({ isActive }) =>
                `text-sm font-bold px-4 py-2 rounded ${
                  isActive
                    ? "bg-white text-black"
                    : "text-white hover:bg-orange-700"
                }`
              }
            >
              Students
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="h-full flex-1 flex gap-5 items-center justify-end pr-40">
        <AuthButton onClick={() => {}} text={"Login"} />
        <AuthButton onClick={() => {}} text={"Sign Up"} />
      </div>
    </nav>
  );
};

export default Navbar;
