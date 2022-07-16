import React from "react";
import images from "../images/agus.jpeg";
import arrow from "../images/arrowdown.png";

function Hero ({name}) {
    return (
        <>
       <div className="container items-center min-h-screen w-full mx-auto flex items-center justify-center py-24">
            <div className="m-auto">
                <div>
                <img src={images} width="200px" className="border-solid border-2 border-slate-900 rounded-full m-auto"/>
                </div> 
                <div className="">
                <h1 className="text-center text-slate-900 font-bold text-5xl tracking-wider font-montserrat py-5">Hey I'm {name}</h1>
                <h2 className="text-center font-normal text-4xl tracking-wider">Web Designer | Front-end <br />Developer | UI & UX <br />Designer</h2>
                </div>
                <div className="h-64 -mb-40 mt-16 flex">
                    <a href="#about" className="m-auto motion-safe:animate-bounce">
                    <img src={arrow} width="60px" className=""/>
                    </a>
                </div>
            </div>
       </div>
        </>
    );
}

export default Hero;