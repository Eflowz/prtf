import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiAngular, SiSolidity, SiVuedotjs, SiNodedotjs, SiPhpmyadmin } from "react-icons/si";


const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Graphics Designer.", "Video Editor.", "Frontend Developer"],
        Loop: true,
        typeSpeed: 20, 
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    return (
        <div className='w-full lgl:w-1/2 flex flex-col gap-20'>
        <div className='flex flex-col gap-5'>
            <h4 className=" text-lg font-normal">WELCOME</h4>
            <h1 className="text-6xl font-bold text-white">
                Hi, I'm {" "}
                <span className="text-designColor capitalize">Nze Ezekiel Onyekachi</span>
            </h1>
            <h2 className="text-4xl font-bold text-white">a <span>{text}</span>
            <Cursor 
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor="#ff0149" />
            </h2>
            <p className="text-base font-bodyFont xl:flex-row leading-6 gap-6 xl:gap-0 tracking-wide">
            A graduate of Hydrology delving into the tech field to make a difference by leveraging a deep understanding of social systems, analytical skills, and problem-solving to address real-world challenges. Passionate about creating innovative, human-centered solutions, I aim to bridge the gap between technology and society. With a focus on continuous learning and adaptability to emerging trends, I am committed to impacting lives on the go by driving meaningful change and fostering inclusive, technology-driven advancements that benefit diverse fields.
            </p>
        </div>
        <div className='flex flex-col lgl:flex-row justify-between'>
        <div>
                <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
            </h2>
            <div className="flex gap-4 mb-6">
            <a href="https://twitter.com/virus_xxy" target="_blank" rel="noopener noreferrer">
        <span className="bannerIcon">
            <FaTwitter />
        </span>
        </a>
            <a href="https://www.linkedin.com/in/nze-ezekiel-4bba13259/" target="_blank" rel="noopener noreferrer">
        <span className="bannerIcon">
            <FaLinkedinIn />
        </span>
        </a>
            <a href="https://github.com/Eflowz" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
            <FaGithub />
                </span>
        </a>    
            </div>
        </div>
        <div>
                <h2 className="text-base uppercase font-titleFont mb-4">
            Basic Skills in
            </h2>
            <div className="flex gap-4">
                <span className="bannerIcon">
                    <FaReact />
                </span>
                <span className="bannerIcon">
                    <SiNextdotjs />
                </span>
                <span className="bannerIcon">
                    <SiAngular />
                </span>
                <span className="bannerIcon">
                    <SiVuedotjs />
                </span>
                <span className="bannerIcon">
                    <SiSolidity />
                </span>
                <span className="bannerIcon">
                    <SiNodedotjs />
                </span>
                <span className="bannerIcon">
                    <SiPhpmyadmin />
                </span>
            </div>
        </div>
        </div>
    </div>
    )
}

export default LeftBanner;