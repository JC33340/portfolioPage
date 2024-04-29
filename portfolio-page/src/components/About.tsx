import React from "react";
import face from "../photos/face.png"

export default function About(){
    return(
        <div className="about">
            <div className="about-item">
                <div className="centered-flex-item name">Hi, I'm Jason</div>
                <div className="centered-flex-item about-text">
                    Recent Msci Pharmacology graduate from UCL. 
                    Self-taught in coding, namely Python (Django, Flask) and JavaScript (React, TypeScript) as well as HTML, CSS. 
                    Currently producing personal projects to expand and develop my knowledge. 
                    Highly motivated, adaptable, and dedicated to personal and professional development. 
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