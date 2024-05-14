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
        const ref = containerRef
        if (ref.current) observer.observe(ref.current)
        
        return()=>{
            if (ref.current) observer.unobserve(ref.current)
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