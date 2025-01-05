import React from "react";
import { NavLink } from "react-router-dom";
import pic from "../assets/portfolio_pic2.0.jpg"

const Navbar = () => {
  const links = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/"}>skills</NavLink>
      <NavLink to={"/"}>Projects</NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      {/* nav-start */}
      <div className="navbar-start">
        <div className="dropdown ">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={pic}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-3 md:hidden"
          >
            {links}
          </ul>
        </div>
      </div>

      {/* nav-center */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-6">{links}</ul>
      </div>

      {/* nav-end */}
      <div className="navbar-end">
        <a href="https://docs.google.com/document/d/1iyG9Ce7-W0zmcp_6V9Sues5Xp8Ib9je0HCMn3ake3UY/edit?tab=t.0" target="_blank" className="btn btn-primary">Resume</a>
      </div>
    </div>
  );
};

export default Navbar;
