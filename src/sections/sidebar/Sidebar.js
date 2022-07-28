import React from "react";
import {bool} from "prop-types";

const SideBar = ({open}) => {
  return (
    <>
      <div open={open} className="flex flex-col justify-center bg-gray-800 h-screen text-left p-8 fixed top-0 left-0 transition-transfrom duration-100 ease-in-out mobile:w-full">
        <a className="text-2xl px-8 py-5 font-bold text-center tracking-wide text-white transition-colors duration-100 ease-linear mobile:text-lg mobile:text-center"
        href="#">
          Home
        </a>
        <a className="text-2xl px-8 py-5 font-bold text-center tracking-wide text-white transition-colors duration-100 ease-linear mobile:text-lg mobile:text-center"
        href="#">
          Skills
        </a>
        <a className="text-2xl px-8 py-5 font-bold text-center tracking-wide text-white transition-colors duration-100 ease-linear mobile:text-lg mobile:text-center"
        href="#">
          Education
        </a>
        <a className="text-2xl px-8 py-5 font-bold text-center tracking-wide text-white transition-colors duration-100 ease-linear mobile:text-lg mobile:text-center"
        href="#">
          Experience
        </a>
        <a className="text-2xl px-8 py-5 font-bold text-center tracking-wide text-white transition-colors duration-100 ease-linear mobile:text-lg mobile:text-center"
        href="#">
          Projects
        </a>
        <a className="text-2xl px-8 py-5 font-bold text-center tracking-wide text-white transition-colors duration-100 ease-linear mobile:text-lg mobile:text-center"
        href="#">
          Testimonials
        </a>
        <a className="text-2xl px-8 py-5 font-bold text-center tracking-wide text-white transition-colors duration-100 ease-linear mobile:text-lg mobile:text-center"
        href="#">
          Contact
        </a>

      </div>
    </>
  );
}


export default SideBar;