import React from "react";

interface propTypes {
    children: string;
}

export default function HeaderItem({children}:propTypes){
    console.log(children)
    return(
        <a className="header-item" href = {`#${children}`}>
            {children}
        </a>
    )
}