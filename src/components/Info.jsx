import React from "react"
import pp from "../images/Rectangle 90.png"
import MAIL from "../images/Icon.png"
import LKD from "../images/Vector.png"
export default function Info(){
    
    return(
        <div className="info">
            <img src={pp}  className="info__img" />
            <h1 className="info__name">Laura Smith</h1>
            <p className="info__sub">Frontend Developer</p>
            <a className="info__web" href="">laurasmith.website</a>
            <div className="btn__container">
                    <button className="info--btn btn-mail"><img className="icon-btn" src={MAIL} />Email</button>
                     <button className="info--btn btn-lkdn"><img className="icon-btn" src={LKD} />LinkedIn</button>
            </div>
        </div>
    )
}