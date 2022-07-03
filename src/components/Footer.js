import React from "react"

import FB from "../images/Facebook Icon.png"
import GH from "../images/GitHub Icon.png"
import INST from "../images/Instagram Icon.png"
import LKD from "../images/Linkedin Icon.png"
import TWT from "../images/Twitter Icon.png"

export default function Footer(){
    
    return(
        <div className="footer">
            <img className="footer__icon" src={FB}/>
            <img className="footer__icon" src={GH}/>
            <img className="footer__icon" src={INST}/>
            <img className="footer__icon" src={LKD}/>
            <img className="footer__icon" src={TWT}/>
        </div>
    )
}