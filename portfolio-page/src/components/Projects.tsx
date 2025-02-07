import React from 'react'
import ProjectItem from './ProjectItem'
import chatapp1 from "../photos/chatapp1.png"
import chatapp2 from "../photos/chatapp2.png"
import chatapp3 from "../photos/chatapp3.png"
import PRtracker1 from "../photos/PRtracker1.png"
import PRtracker2 from "../photos/PRtracker2.png"
import mail1 from "../photos/mail1.png"
import mail2 from "../photos/mail2.png"
import cvBuilder1 from "../photos/cv-builder1.png"
import cvBuilder2 from "../photos/cv-builder2.png"
import minigames1 from "../photos/minigames1.png"
import minigames2 from "../photos/minigames2.png"
import minigames3 from "../photos/minigames3.png"
import minigames4 from "../photos/minigames4.png"
import useIntersectionObserver from '../customHooks/useIntersectionObserver'


export default function Projects(){

    const projectInfo:{
        name:string,
        description:string,
        pictures:string[], 
        githubLink:string,
        technologiesUsed:string[],
        Link?:string
    }[] =[
        {name: 'Minigames App', description:"app containing some classic minigames", pictures:[minigames1,minigames2,minigames3,minigames4],githubLink:'https://github.com/JC33340/minigames',technologiesUsed:['HTML','react','typescript','tailwind'],Link:'https://minigames-mu.vercel.app/'},
        {name:"CV-Builder",description:"Converts user input into a downloadable PDF",pictures:[cvBuilder1,cvBuilder2],githubLink:"https://github.com/JC33340/CVbuilder2",technologiesUsed:["react","typescript","HTML","CSS",'tailwind'], Link:'https://cvbuilder2-q33qjdty3-jc33340s-projects.vercel.app/'},
        {name:"PR tracker",description:"Enter and keep track of PR progress in the gym",pictures:[PRtracker1,PRtracker2],githubLink:"https://github.com/code50/137620817/tree/ec2e1756914286afef16542258eeb663cd85a442/final_project",technologiesUsed:["flask","HTML","CSS","javascript"]},
        {name:"E-mail Replica",description:"A single page replica of an Email application",pictures:[mail1,mail2],githubLink:"https://github.com/JC33340/mail.git",technologiesUsed:["django","HTML","CSS","SQLite"]},
        {name:"Chat-App", description:"Websocket chat app",pictures:[chatapp1,chatapp2,chatapp3],githubLink:"https://github.com/JC33340/chat.git",technologiesUsed:["django","websocket","HTML","CSS"]},
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