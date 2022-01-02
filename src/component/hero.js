import React from "react"
import I2 from "./images/Screenshot (87).png"
export default function Hero(){
    return(
        <div className="hero">
        <img src={I2}alt="grid"className="hero-icon"></img>
        <h1 className="H1">Online Experiences</h1>
        <p className="hero-p">Join unique interactive activities led by one-of-the-kind hosts <br/>all-without leaving home.</p>
    </div>
    )
}