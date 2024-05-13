import React from "react";

interface propTypes {
    children: string;
}

export default function HeaderItem({children}:propTypes){
    return(
        <a className="header-item" href = {`#${children}`}>
            {children}
        </a>
    )
}