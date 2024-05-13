import React from 'react'
import HeaderItem from './HeaderItem'
import ContactSidebar from './ContactSidebar'

export default function Header(){
    
    

    function handleScroll(e:any){
        const scrollTop:number = e.target.documentElement.scrollTop
        const header:HTMLElement|null = document.querySelector(".header")
        const transitionThreshold:number = header? (window.innerHeight - header.offsetHeight-10):window.innerHeight-70
        console.log(scrollTop, transitionThreshold)
        if (scrollTop > transitionThreshold && header){
            header.classList.add("background-gray")
        }else{
            header?.classList.remove("background-gray")
        }

    }

    React.useEffect(()=>{

        if (document){
            document.addEventListener("scroll",handleScroll)
        }
        return()=>{
            if (document){
                document.removeEventListener("scroll",handleScroll)
            }
        }
    },[])

    return(
        <div className="header header-animation">
            <div className='header-left'>
                <HeaderItem>About</HeaderItem>
                <HeaderItem>Projects</HeaderItem>
            </div>
            
            <ContactSidebar />
        </div>
    )
}