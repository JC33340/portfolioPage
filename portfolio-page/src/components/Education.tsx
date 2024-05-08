import React from "react"
import EducationItem from "./EducationItem"
import useIntersectionObserver from "../customHooks/useIntersectionObserver"

export default function Education(){
    const educationContent:{
        school:string,
        location:string,
        skillsLearned:string[],
        duration:string
    }[] = [
        {school:"UCL", location:"London",skillsLearned:["Python","Microsoft"],duration:"2019-2023"},
        {school:"CS50", location:"Online",skillsLearned:["Python(flask)","HTML","CSS"],duration:"2023"},
        {school:"CS50W", location:"Online",skillsLearned:["Python(Django)","HTML","CSS","Git","JavaScript"],duration:"2023"},
        {school:"Scrimba", location:"Online",skillsLearned:["React","TypeScript"],duration:"2023"},
    ]

    const display:JSX.Element[] = educationContent.map(item=>{
        return(
            <EducationItem key = {item.school} school={item.school} location={item.location} skillsLearned={item.skillsLearned} duration={item.duration} />
        )
    })

    const [isVisible,containerRef] = useIntersectionObserver(0.5)

    return(
        <div className="education-section" id ="Education">
            <h1 ref={containerRef} className={`${isVisible?"scroll-show":"scroll-hidden"}`}>Education</h1>
            <div className="education-item-container">
                {display}
            </div>
        </div>
    )
}