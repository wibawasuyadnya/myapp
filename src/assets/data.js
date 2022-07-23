import React from "react";
import ImageLogo from "./image";

const iconSet = "text-5xl mx-auto inline-block";
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
                skillIcon: <img src={ImageLogo.logoAdobe} className={iconSet}/>
            },
            {
                skillName:"Angular",
                skillIcon: <img src={ImageLogo.logoAngular} className={iconSet}/>
            },
            {
                skillName:"CSS",
                skillIcon: <img src={ImageLogo.logoCss} className={iconSet}/>
            },
            {
                skillName:"Figma",
                skillIcon: <img src={ImageLogo.logoFigma} className={iconSet}/>
            },
            {
                skillName:"Html",
                skillIcon: <img src={ImageLogo.logoHtml5} className={iconSet}/>
            },
            {
                skillName:"Js",
                skillIcon: <img src={ImageLogo.logoJs} className={iconSet}/>
            },
            {
                skillName:"Nodejs",
                skillIcon: <img src={ImageLogo.logoNode} className={iconSet}/>
            },
            {
                skillName:"Npm",
                skillIcon: <img src={ImageLogo.logoNpm} className={iconSet}/>
            },
            {
                skillName:"React",
                skillIcon: <img src={ImageLogo.logoReact} className={iconSet}/>
            },
            {
                skillName:"Tailwindcss",
                skillIcon: <img src={ImageLogo.logoTailwind} className={iconSet}/>
            },
            {
                skillName:"Wordpress",
                skillIcon: <img src={ImageLogo.logoWp} className={iconSet}/>
            },
            {
                skillName:"jQuery",
                skillIcon: <img src={ImageLogo.logoJquery} className={iconSet}/>
            },
            {
                skillName:"Elementor",
                skillIcon: <img src={ImageLogo.logoElementor} className={iconSet}/>
            },
            {
                skillName:"Git",
                skillIcon: <img src={ImageLogo.logoGit} className={iconSet}/>
            },
            {
                skillName:"Webflow",
                skillIcon: <img src={ImageLogo.logoWebflow} className={iconSet}/>
            },
        ],
    },
};


export default data;

