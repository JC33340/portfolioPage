import React from "react";
import {LogoTailwind, LogoLink,LogoJavascript,LogoReact,LogoCSS,LogoDjango,LogoFlask,LogoGithub,LogoHTML,LogoTypscript,LogoYoutube,LogoWebsocket,LogoSQLite} from "./Logos"
import useIntersectionObserver from "../customHooks/useIntersectionObserver";
import {ArrowLeft, ArrowRight} from "./Logos"

interface props{
    data:{
        name:string,
        description:string,
        pictures:string[], 
        youtubeLink:string|undefined,
        githubLink:string,
        technologiesUsed:string[],
        Link?:string
    }
    id:string
}

export default function ProjectItem({data,id}:props){

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
        else if(item === "tailwind") return <LogoTailwind />
        else return (<></>)     
            
    })

    const [isVisible,containerRef,firstRun] = useIntersectionObserver(0.1)
    const [steps,setSteps] = React.useState<number>(0)
    const [slideCount,setSlideCount] = React.useState<number>(0)

    const slider = document.querySelector<HTMLElement>(`#${id}`)
    function handleClick(type:"next"|"prev"){
        setSteps(prev=>{
            if(slider){
                if(type === "next"){
                    setSlideCount(prev=>prev+1)
                    return prev-slider.offsetWidth -10
                } else{
                    setSlideCount(prev=>prev-1)
                    return prev+slider.offsetWidth +10
                }
                
            }    
            else { return prev}
        }) 
    }
    React.useEffect(()=>{
        if(slider){
            slider.style.transform = `translateX(${steps}px)`
        }
    },[steps])

    return(
        <div ref={containerRef} className="project-item" style={{animationPlayState:`${firstRun?"running":"paused"}`}}>
            {data.pictures.length === 1?

            <img src={data.pictures[0]} style={{height:`${document.querySelector<HTMLElement> (".project-image-slider")?.offsetHeight}px`}} className="project-image" />:

            <div className="project-image-slider">
                <div className="project-image-slides" id={id} >
                    {data.pictures.map(pic=>{
                        return(<img className="project-image" src={pic}/>)
                    })}
                    
                </div>
                {slideCount != (data.pictures.length-1) && <div className="arrow-next" onClick={()=>handleClick("next")}><ArrowRight /></div>}
                {slideCount != 0 && <div className="arrow-prev" onClick={()=>handleClick("prev")}><ArrowLeft /></div>}
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
                <div className="anchor-div"><LogoGithub /><a style={{marginLeft:"3px"}} target="_blank" className="project-item-a" href={data.githubLink}>Repo</a></div>
                {data.Link ? <div className="anchor-div"><LogoLink /><a style={{marginLeft:"3px"}} target="_blank" className="project-item-a" href={data.Link}>Link</a></div>:<></>}
            </div>
            
        </div>
    )
}
