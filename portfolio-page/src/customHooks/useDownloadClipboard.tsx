import React from "react"

export default function useDownloadClipboard():[string,()=>void,()=>void]{ 
    const[clipboardText,setClipboardText] = React.useState("Copy to clipboard")

    function onClick(){
        navigator.clipboard.writeText("jasonchanhw0531@gmail.com")
        setClipboardText("Email copied")
    }

    function onMouseOver(){
        setClipboardText("Copy to clipboard")
    }

    return[clipboardText,onClick,onMouseOver]
}