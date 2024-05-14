import React, { MutableRefObject } from "react";

export default function useIntersectionObserver(threshold:number):[boolean,MutableRefObject<null>,boolean]{
    const containerRef = React.useRef(null)
    const[isVisible,setIsVisible] = React.useState(false)
    
    const callBack = (entries:any) =>{
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
    }

    const options = {
        root: null,
        rootMargin:"0px",
        threshold: threshold
    }

    React.useEffect(()=>{
        const observer = new IntersectionObserver(callBack,options)
        let ref = null
        if (containerRef.current){
            observer.observe(containerRef.current)
            ref = containerRef.current
        } 
        
        return()=>{
            if (ref) observer.unobserve(ref)
        }
    },[containerRef,options])

    const [firstRun,setFirstRun] = React.useState(false)
    React.useEffect(()=>{
        if(isVisible){
            setFirstRun(true)
        }  
    },[isVisible])

    return [isVisible,containerRef,firstRun]
}