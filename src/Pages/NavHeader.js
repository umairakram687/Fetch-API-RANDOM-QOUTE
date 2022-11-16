import React from "react";
import { Link } from "react-router-dom";
const NavHeader = () => {
  return (
    <>
      <div>
        <ul
          className="flex gap-2 py-2 text-xs border
         border-slate-300 ml-2 rounded-xl bg-purple-500 w-52 pl-3 uppercase text-white sm:ml-12 sm:text-sm sm:w-60 sm:gap-4"
        >
          <Link to="/randomqoute" className="">
            RandomQoute
          </Link>
          <Link to="/contactus" className=" ">
            ContactUs
          </Link>
          <Link
            to="/contact"
            className="display inline text-black  hover:bg-sky-500 py-2"
          ></Link>
        </ul>
      </div>
    </>
  );
};

export default NavHeader;
