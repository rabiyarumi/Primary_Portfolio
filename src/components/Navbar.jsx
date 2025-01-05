import React from "react";
import { NavLink } from "react-router-dom";
import pic from "../assets/portfolio_pic2.0.jpg"

const Navbar = () => {
  const links = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/skills"}>skills</NavLink>
      <NavLink to={"/my_jurny"}>Journey</NavLink>
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
        <a className="btn">Resume</a>
      </div>
    </div>
  );
};

export default Navbar;
