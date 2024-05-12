import React from "react";
import face from "../photos/face.png"
import { LogoLinkedin,LogoGithub,LogoGmail,LogoDownload} from "./Logos";
import CV from "../photos/Ho Wa Chan CV.png"
import useDownloadClipboard from "../customHooks/useDownloadClipboard";

export default function About(){
    const [clipboardText,onClick,onMouseOver] = useDownloadClipboard()
    return(
        <div className="about" id ="About">
            <div className="about-item about-left-side">
                <div className="centered-flex-item name">Hi, I'm Jason</div>
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