import React from "react";
import useIntersectionObserver from "../customHooks/useIntersectionObserver";

interface propTypes{
    school: string;
    location:string;
    duration:string;
    skillsLearned:string[];
}

export default function EducationItem({school,location,duration,skillsLearned}:propTypes){

    const [isVisible,containerRef,firstRun] = useIntersectionObserver(0.5)
    

    const skillsList:JSX.Element[] = skillsLearned.map(item=><li key = {item}>{item}</li>)

    return(
        <div className={`education-item ${firstRun?"scroll-show":"scroll-hidden"}`} ref={containerRef}>
            <div className="education-item-top">
                <h3>{school}</h3>
                <p className="education-item-duration italic">({duration})</p>
            </div>
            <div className="education-item-location italic">{location}</div>
            <div>
                Skills Learned:
                <ul className="skills-learned-list">
                    {skillsList}
                </ul>
            </div>
        </div>
    )
}