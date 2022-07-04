import React from "react"
import LOC from "../images/Fill 219.png"




export default function Card(props){
    
    
    return(
        <>
        <div className="card__container">
            <div className="img__container">
                <img className="card__img" src={props.elem.imageUrl} alt="" />
            </div>    
            <div className="description__container">
                <div className="location__container">
                    <img className="location__img" src={LOC} alt="" />
                    <p className="location">{props.elem.location}</p>
                    <a className="maps__link" href={props.elem.googleMapsUrl}>View on Google Maps</a>
                </div>
                <div className="card__title">{props.elem.title}</div>
                <p className="date">{props.elem.startDate} - {props.elem.endDate}</p>
                <p className="card__para">{props.elem.description}</p>
            </div>
        </div>
        </>
    )
}







