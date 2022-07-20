import React from "react";
import images from "../images/agus.jpeg";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Hero ({name, desc, medsos:{github, facebook, instagram, twitter, dribbble, email}}) {
    return (
        <>
       <div className="container items-center w-full mx-auto min-h-screen py-24">
            <div className="m-auto">
                <div>
                <img src={images} width="140px" className="border-solid border-2 border-slate-900 rounded-full m-auto"/>
                </div> 
                <div className="">
                <h1 className="text-center text-gray-800 font-bold text-4xl tracking-wider font-montserrat pb-[10px] pt-[20px]">Hey, I'm {name}</h1>
                <h2 className="text-center font-normal text-xl tracking-wider">{desc}</h2>
                </div>
                <div className="flex align-center justify-center mt-4">
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
              href={github}
            >
              <FaGithub />
              <span className="sr-only">Github</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
              href={facebook}
            >
              <FaFacebook />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
              href={instagram}
            >
              <FaInstagram />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-pink-600 hover:bg-pink-600 rounded-full hover:text-white transition-colors duration-300"
              href={dribbble}
            >
              <FaDribbble />
              <span className="sr-only">Dribble</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
              href={twitter}
            >
              <FaTwitter />
              <span className="sr-only">Twitter</span>
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300" 
            href={email} s>
              <FaRegEnvelope />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
    </div>
        </>
    );
}

export default Hero;