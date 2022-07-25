import React from "react";
import ImageLogo from "./image";

const iconSet = "text-5xl mx-auto inline-block w-[60px]";
const data = {
    hero : {
        name: "Agus Wibawa",
        desc: "Web Designer | UI & UX Designer",
        resume: "https://www.gmail.com",
        contact: "#contact",
        social: {
            facebook: "https://facebook.com/aguswibawas/",
            instagram: "https://instagram.com/justadynamicnerds/",
            twitter: "https://twitter.com/justdynamicnerd",
            dribbble: "https://dribbble.com/jesuschrist",
            github: "https://github.com/wibawasuyadnya",
            email: "https://mail.google.com/mail/?view=cm&fs=1&to="
        }
    },
    about : {
        desc: "Hey I’m Agus, I’m Bali based Web Designer,UI/UX Designer. I enjoy designing and building a simple, innovative, and minimalist Interface design with the latest technology, and my experience. I can maintain and helping existing site for upgrade, I’m open for remote or full-time work and can easily adapt with your workflow and collaborative with team. Contact me for more info :3 "
    },
    tools : {
        title: "Tech that I use",
        skills: [
            {
                skillName:"Adobe",
                skillLink:"https://www.adobe.com/",
                skillIcon: <img src={ImageLogo.logoAdobe} className={iconSet}/>
            },
            {
                skillName:"CSS",
                skillLink:"https://developer.mozilla.org/en-US/docs/Web/CSS",
                skillIcon: <img src={ImageLogo.logoCss} className={iconSet}/>
            },
            {
                skillName:"Figma",
                skillLink:"https://www.figma.com/",
                skillIcon: <img src={ImageLogo.logoFigma} className={iconSet}/>
            },
            {
                skillName:"Html",
                skillLink:"https://developer.mozilla.org/en-US/docs/Web/HTML",
                skillIcon: <img src={ImageLogo.logoHtml5} className={iconSet}/>
            },
            {
                skillName:"Js",
                skillLink:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                skillIcon: <img src={ImageLogo.logoJs} className={iconSet}/>
            },
            {
                skillName:"Npm",
                skillLink:"npmjs.com",
                skillIcon: <img src={ImageLogo.logoNpm} className={iconSet}/>
            },
            {
                skillName:"React",
                skillLink:"https://reactjs.org/",
                skillIcon: <img src={ImageLogo.logoReact} className={iconSet}/>
            },
            {
                skillName:"Git",
                skillLink:"https://git-scm.com/",
                skillIcon: <img src={ImageLogo.logoGit} className={iconSet}/>
            },
        ],
    },
};


export default data;

