import React from 'react'
import ContactSidebar from './ContactSidebar'

export default function Header(){
    const[headerVisible,setHeaderVisible] = React.useState<boolean>(false)
    

    function handleScroll(e:any){
        const scrollTop:number = e.target.documentElement.scrollTop
        const header:HTMLElement|null = document.querySelector(".header")
        console.log(header?.offsetHeight)
        const transitionThreshold:number = header? (window.innerHeight - header.offsetHeight-30):window.innerHeight-80
        if (scrollTop > transitionThreshold){
            setHeaderVisible(true)
        }else{
            setHeaderVisible(false)
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
        <div className={`header ${headerVisible?"background-gray":""}`}>
            <div className={`header-name ${headerVisible?"header-name-visible":"header-name-hidden"}`}>Jason Chan
            </div>
            
            <ContactSidebar headerVisible={headerVisible} />
        </div>
    )
}