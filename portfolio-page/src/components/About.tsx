import React from "react";
import face from "../photos/face.png"
import { LogoLinkedin,LogoGithub,LogoGmail,LogoDownload} from "./Logos";
import CV from "../photos/Ho Wa Chan CV.png"

export default function About(){
    
    const[clipboardText,setClipboardText] = React.useState("Copy to clipboard")

    function onClick():void{
        navigator.clipboard.writeText("jasonchanhw0531@gmail.com")
        setClipboardText("Email copied")
    }

    function onmouseover(){
        setClipboardText("Copy to clipboard")
    }

    return(
        <div className="about" id ="About">
            <div className="about-item about-left-side">
                <div className="centered-flex-item name">Hi, I'm Jason</div>
                <div className="centered-flex-item about-text">
                    Recent Msci Pharmacology graduate from UCL. 
                    Self-taught in coding, namely Python (Django, Flask) and JavaScript (React, TypeScript) as well as HTML, CSS. 
                    Currently producing personal projects to expand and develop my knowledge. 
                    Highly motivated, adaptable, and dedicated to personal and professional development. 
                </div>
                <div className="about-svg">
                    <a href="https://www.linkedin.com/in/ho-wa-chan-b207a0213" target="_blank">
                        <LogoLinkedin />
                    </a>
                    <a href="https://www.github.com/JC33340" target="_blank">
                        <LogoGithub />
                    </a>
                    <div className="about-svg-item">
                        <LogoGmail onclick = {onClick} onmouseover={onmouseover} />
                        <div>{clipboardText}</div>
                    </div>
                    <div className="about-svg-item">
                        <a href = {CV} download className="logo-download">
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
            
        </div>
    )
}