import React from "react";
import logo from "../../../assets/logo.png";

const Header = () => {
  return (
    <div className="navbar justify-around bg-transparent w-10/12 mx-auto">
      <div className="">
        <a className="btn btn-ghost normal-case text-xl">
          <img className="w-28" src={logo} alt="" />
        </a>
      </div>
      <div className="flex-none gap-8">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered rounded border-white w-[300px] bg-transparent"
          />
        </div>
        <ul className="menu menu-horizontal px-1 space-x-6">
          <li>
            <a>News</a>
          </li>
          <li>
            <a>Destination</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <button className="btn btn-warning px-8 py-1">Login</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
