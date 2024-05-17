import React from "react";
import { LogoGithub,LogoGmail,LogoLinkedin,LogoDownload } from "./Logos";
import CV from "../photos/Ho Wa Chan CV.pdf"
import useDownloadClipboard from "../customHooks/useDownloadClipboard";

export default function ContactSidebar({headerVisible}: {headerVisible:boolean}){

    const [clipboardText,onClick,onMouseOver] = useDownloadClipboard()

    
    return(
        <div className={`contact-bar ${headerVisible?"contact-bar-visible":"contact-bar-hidden"}`}>
            <a href="https://www.linkedin.com/in/ho-wa-chan-b207a0213"   target="_blank">
                <LogoLinkedin />
            </a>
            <a href="https://www.github.com/JC33340" target="_blank">
                <LogoGithub />
            </a>
            <div className={`contact-bar-hover-item `} onClick={onClick} onMouseOver={onMouseOver}>
                <LogoGmail />
                <span>{clipboardText}</span>
            </div>
            <div className={`contact-bar-hover-item`}>
                <a href = {CV} download="Ho Wa Chan CV" className="logo-download">
                    <LogoDownload />
                </a>
                <span>Download CV</span>
            </div>
        </div>
    )
}