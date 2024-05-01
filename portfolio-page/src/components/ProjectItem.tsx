import React from "react";
import {LogoJavascript,LogoReact,LogoCSS,LogoDjango,LogoFlask,LogoGithub,LogoHTML,LogoTypscript,LogoYoutube,LogoWebsocket,LogoSQLite} from "./Logos"

interface props{
    data:{
        name:string,
        description:string,
        pictures:string[], 
        youtubeLink:string|undefined,
        githubLink:string,
        technologiesUsed:string[]
    }
}

export default function ProjectItem({data}:props){

    const techDisplay:JSX.Element[] = data.technologiesUsed.map(item=>{
        if (item==="javascript") return <LogoJavascript />
        else if (item === "CSS") return <LogoCSS />
        else if (item === "HTML") return <LogoHTML />
        else if (item === "django") return <LogoDjango />
        else if (item === "flask") return <LogoFlask />
        else if (item === "react") return <LogoReact />
        else if (item === "typescript") return <LogoTypscript />
        else if (item === "websocket") return <LogoWebsocket />
        else if (item === "SQLite") return <LogoSQLite />
        else return (<></>)     
            
    })
    return(
        <div className="project-item">
            <img className="project-image" src={data.pictures[0]} />
            <div className="project-item-name-tech">
                <h2>{data.name}</h2>
                <div className="project-item-tech-container">
                    {techDisplay}
                </div>
            </div>
            <div>{data.description}</div>
            {data.youtubeLink && <a className="project-item-a" href={data.youtubeLink}>View Demo</a>}
            <a className="project-item-a" href={data.githubLink}>View Code</a>
        </div>
    )
}
