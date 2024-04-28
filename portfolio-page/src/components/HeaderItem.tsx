import React from "react";

interface propTypes {
    children: string;
}

export default function HeaderItem({children}:propTypes){
    console.log(children)
    return(
        <div className="header-item">
            {children}
        </div>
    )
}