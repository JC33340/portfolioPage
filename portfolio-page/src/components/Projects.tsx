import React from 'react'
import ProjectItem from './ProjectItem'
import chatapp1 from "../photos/chatapp1.png"
import chatapp2 from "../photos/chatapp2.png"
import chatapp3 from "../photos/chatapp3.png"
import PRtracker1 from "../photos/PRtracker1.png"
import PRtracker2 from "../photos/PRtracker2.png"
import mail1 from "../photos/mail1.png"
import mail2 from "../photos/mail2.png"
import calculator1 from "../photos/calculator1.png"
import cvBuilder1 from "../photos/cv-builder1.png"
import cvBuilder2 from "../photos/cv-builder2.png"
import useIntersectionObserver from '../customHooks/useIntersectionObserver'


export default function Projects(){

    const projectInfo:{
        name:string,
        description:string,
        pictures:string[], 
        youtubeLink:string|undefined,
        githubLink:string,
        technologiesUsed:string[],
        Link?:string
    }[] =[
        {name:"CV-Builder",description:"Converts user input into a downloadable PDF",pictures:[cvBuilder1,cvBuilder2],youtubeLink:undefined,githubLink:"https://github.com/JC33340/CVbuilder.git",technologiesUsed:["react","typescript","HTML","CSS",'tailwind'], Link:'https://cvbuilder2-q33qjdty3-jc33340s-projects.vercel.app/'},
        {name:"Calculator",description:"Basic calculator app",pictures:[calculator1],youtubeLink:undefined,githubLink:"https://github.com/JC33340/CalculatorApp.git",technologiesUsed:["react","typescript","HTML","CSS"],Link:'https://calculatorapp-cwq.pages.dev'},
        {name:"PR tracker",description:"Enter and keep track of PR progress in the gym",pictures:[PRtracker1,PRtracker2],youtubeLink:"https://youtu.be/PSEs7yLWNes",githubLink:"https://github.com/code50/137620817/tree/ec2e1756914286afef16542258eeb663cd85a442/final_project",technologiesUsed:["flask","HTML","CSS","javascript"]},
        {name:"E-mail Replica",description:"A single page replica of an Email application",pictures:[mail1,mail2],youtubeLink:"https://youtu.be/gNSodzbtWhM",githubLink:"https://github.com/JC33340/mail.git",technologiesUsed:["django","HTML","CSS","SQLite"]},
        {name:"Chat-App", description:"Websocket chat app",pictures:[chatapp1,chatapp2,chatapp3],youtubeLink:"https://youtu.be/IUKFniJzdYs",githubLink:"https://github.com/JC33340/chat.git",technologiesUsed:["django","websocket","HTML","CSS"]},
    ] 

    const display: JSX.Element[] = projectInfo.map((item,i)=>{
        return(
            <ProjectItem key={item.name} id = {`projectItem${i}`} data={item}/>
        )
    })

    const [isVisible,containerRef,firstRun] = useIntersectionObserver(0.5)

    return(
        <div className="projects" id = "Projects">
            <h1 ref = {containerRef} style={{animationPlayState:`${firstRun?"running":"paused"}`}}>Projects</h1>
            <div className='project-item-container'>
                {display}
            </div>
            
        </div>
    )
}