import React from 'react'
import HeaderItem from './HeaderItem'
import ContactSidebar from './ContactSidebar'

export default function Header(){
    return(
        <div className="header header-animation">
            <div className='header-left'>
                <HeaderItem>About</HeaderItem>
                <HeaderItem>Education </HeaderItem>
                <HeaderItem>Projects</HeaderItem>
            </div>
            
            <ContactSidebar />
        </div>
    )
}