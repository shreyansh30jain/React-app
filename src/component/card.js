import React from "react"
/*import I3 from "./images/c8986f46-0521-4a14-a4e3-4bf2622a3aa5.jpg"*/
export default function Card(props){
    console.log(props)
    return(
        <div className="card">
            <img src={props.img} alt="katie zeferes" className="card-image-top"></img>
            <div className="card-stats">
                <span>{props.rating} </span>
                <span> {props.review}• </span>
                <span>{props.country}</span>
            </div>
            <div className="card--body">
                <p className="card--text">{props.title}</p>
                <p className="card-text2">From {props.price} / person</p>
            </div>
        </div>
    )
}