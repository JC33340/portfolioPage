import React from 'react'
import HeaderItem from './HeaderItem'

export default function Header(){
    return(
        <div className="header">
            <HeaderItem>About</HeaderItem>
            <HeaderItem>Education </HeaderItem>
            <HeaderItem>Projects/Experience</HeaderItem>
        </div>
    )
}