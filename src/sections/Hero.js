import React from "react";
import images from "../images/agus.jpeg";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Hero ({name, desc, resume, contact, medsos:{github, facebook, instagram, twitter, dribbble, email}}) {
    return (
        <>
       <div className="container items-center w-full mx-auto min-h-fit py-24">
            <div className="m-auto">
                <div>
                <img src={images} width="140px" className="border-solid border-2 border-slate-900 rounded-full m-auto"/>
                </div> 
                <div className="">
                <h1 className="text-center text-gray-800 font-extrabold text-5xl tracking-wider pb-[10px] pt-[20px]">Hey, I'm {name}</h1>
                <h2 className="text-center font-normal font-bold text-2xl tracking-wider">{desc}</h2>
                <div className="flex align-center justify-center mt-4">
                    <a className="text-xl m-2 border-solid text-gray-800 font-medium border-2 border-gray-600 py-1.5 px-2 rounded-md hover:bg-gray-800 hover:text-white hover:border-gray-800" href={resume}>Resume</a>
                    <a className="text-xl m-2 border-solid text-gray-800 font-medium border-2 border-gray-600 py-1.5 px-2 rounded-md hover:bg-gray-800 hover:text-white hover:border-gray-800" href={contact}>Contact</a>
                </div>
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
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
              href={dribbble}
            >
              <FaDribbble />
              <span className="sr-only">Dribbble</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
              href={twitter}
            >
              <FaTwitter />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
              href={email}
            >
              <FaEnvelope />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
    </div>
        </>
    );
}

export default Hero;