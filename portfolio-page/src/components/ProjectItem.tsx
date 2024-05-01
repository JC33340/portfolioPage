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
            {data.pictures.length === 1?
            <img src={data.pictures[0]} className="project-image" /> :

            <div className="project-image-slider">
                <div className="project-image-slides">
                    {data.pictures.map(pic=>{
                        return(<img className="project-image" src={pic}/>)
                    })}
                </div>
            </div>
            }
            
            
            <div className="project-item-name-tech">
                <div>
                    <h2 className="project-item-h2">{data.name}</h2>
                    <div>{data.description}</div>
                </div>
                <div className="project-item-tech-container">
                    {techDisplay}
                </div>
            </div>
            <div className="anchor-container">
                {data.youtubeLink && <div className="anchor-div"><LogoYoutube /> <a target = "_blank" className="project-item-a" href={data.youtubeLink}>Demo</a></div> }
                <div className="anchor-div"><LogoGithub /><a target="_blank" className="project-item-a" href={data.githubLink}>Code</a></div>
            </div>
            
        </div>
    )
}
