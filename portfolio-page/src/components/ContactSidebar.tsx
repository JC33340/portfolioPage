import React from "react";
import { LogoGithub,LogoGmail,LogoLinkedin,LogoDownload } from "./Logos";
import CV from "../photos/Ho Wa Chan CV.png"
import useDownloadClipboard from "../customHooks/useDownloadClipboard";

export default function ContactSidebar(){

    const [clipboardText,onClick,onMouseOver] = useDownloadClipboard()
    const [containerRef,setContinerRef] = React.useState<Element|null>()

    React.useEffect(()=>{
        setContinerRef(document.querySelector(".about-svg"))
    },[])

    const[isVisible,setIsVisible] = React.useState(true)

    
    const callBack = (entries:any) =>{
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
    }

    const options = {
        root: null,
        rootMargin:"0px",
        threshold: 0.1
    }

    React.useEffect(()=>{
        const observer = new IntersectionObserver(callBack,options)
        if (containerRef) observer.observe(containerRef)
        
        return()=>{
            if (containerRef) observer.unobserve(containerRef)
        }
    },[containerRef,options])
    
    return(
        <div className={`contact-bar`}>
            <a href="https://www.linkedin.com/in/ho-wa-chan-b207a0213" className={`contact-item ${isVisible?"contact-bar-hidden":"contact-bar-visible"}`}  target="_blank">
                <LogoLinkedin />
            </a>
            <a href="https://www.github.com/JC33340" className={`contact-item ${isVisible?"contact-bar-hidden":"contact-bar-visible"}`} target="_blank">
                <LogoGithub />
            </a>
            <div className={`contact-bar-hover-item contact-item ${isVisible?"contact-bar-hidden":"contact-bar-visible"}`} onClick={onClick} onMouseOver={onMouseOver}>
                <LogoGmail />
                <span>{clipboardText}</span>
            </div>
            <div className={`contact-bar-hover-item contact-item ${isVisible?"contact-bar-hidden":"contact-bar-visible"}`}>
                <a href = {CV} download className="logo-download">
                    <LogoDownload />
                </a>
                <span>Download CV</span>
            </div>
        </div>
    )
}