import React from "react";
import face from "../photos/face.png"
import { LogoLinkedin,LogoGithub,LogoGmail,LogoDownload} from "./Logos";
import CV from "../photos/Ho Wa Chan CV.pdf"
import useDownloadClipboard from "../customHooks/useDownloadClipboard";

export default function About(){
    const [clipboardText,onClick,onMouseOver] = useDownloadClipboard()

    function scrollTo(){
        const projectPosition = document.querySelector("#Projects")?.getBoundingClientRect()
        const header = document.querySelector<HTMLElement>(".header")?.offsetHeight
        console.log(projectPosition?.top)
        if(projectPosition&&header) window.scrollBy(0,projectPosition?.top-header)
    }
    return(
        <div className="about" id ="About">
            <div className="about-item about-left-side">
                <div className="centered-flex-item name">
                    Hi, I'm Jason
                    
                    </div>
                <div className="centered-flex-item about-text">
                    Software engineer
                    
                </div>
                <div className="about-svg">
                    <a href="https://www.linkedin.com/in/ho-wa-chan-b207a0213" target="_blank">
                        <LogoLinkedin />
                    </a>
                    <a href="https://www.github.com/JC33340" target="_blank">
                        <LogoGithub />
                    </a>
                    <div className="about-svg-item" onClick={onClick} onMouseOver={onMouseOver}>
                        <LogoGmail/>
                        <div>{clipboardText}</div>
                    </div>
                    <div className="about-svg-item">
                        <a href = {CV} download="Ho Wa Chan CV" className="logo-download">
                            <LogoDownload />
                        </a>
                        <div>Download CV</div>
                    </div>
                    
                </div>
            </div>
            <div className="about-item">
                <div className="centered-flex-item">
                    <img src={face} className="about-photo"/>
                </div>
                
            </div>
            
            <div className="arrow-container" onClick={scrollTo}>
                <a className="arrow-link link--arrowed">
                    <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <g fill="none" stroke="#fff" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                            <circle className="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                            <path className="arrow-icon--arrow"  d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                        </g>
                    </svg>
                    
                </a>
            </div>
            
            
        </div>
    )
}