import React from "react"

import GLOBE from "../images/Path.png"



export default function Header(){
    
    return(
        <div className="header__container">
            <img className="header__img" src={GLOBE} />
            <p className="header__title">my travel journal.</p>
        </div>
    )
}