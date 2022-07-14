import React from "react";
import images from "../images/about.jpeg";


function About({desc}) {
    return (
        <>  
        <div id="about" className="container mx-auto w-full">
            <div>
                <h2 className="text-center text-5xl font-bold tracking-wide font-montserrat">Welcome</h2>
                <div className="w-9/12 flex m-auto mt-20 pt-14">
                    <img src={images} width="350px" height="200px" className="border-solid border-2 border-slate-900 ml-[55px] rounded-xl"/>
                    <h2 className="text-2xl pl-[50px] flex items-center tracking-wide font-montserrat">{desc}</h2>
                </div>
            </div>
        </div>
        </>
    );
}

export default About;