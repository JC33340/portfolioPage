import React from "react";

interface propTypes{
    school: string;
    location:string;
    duration:string;
    skillsLearned:string[];
}

export default function EducationItem({school,location,duration,skillsLearned}:propTypes){
    const containerRef = React.useRef(null)
    const[isVisible,setIsVisible] = React.useState(false)
    
    const callBack = (entries:any) =>{
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
    }

    const options = {
        root: null,
        rootMargin:"0px",
        threshold: 0.9
    }

    React.useEffect(()=>{
        const observer = new IntersectionObserver(callBack,options)
        if (containerRef.current) observer.observe(containerRef.current)
        
        return()=>{
            if (containerRef.current) observer.unobserve(containerRef.current)
        }
    },[containerRef,options])


    const skillsList:JSX.Element[] = skillsLearned.map(item=><li key = {item}>{item}</li>)

    return(
        <div className="education-item" style={{animationPlayState:isVisible?"running":"paused"}} ref={containerRef}>
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