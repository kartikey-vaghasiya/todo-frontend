import React from "react"
import "./css/feature.css"

export default function Feature(props){
    return (
        <div className="sidebar--item">
            <img src={`images/icons/${props.name}.png`} alt={props.name} />
            <span>{props.name}</span>
        </div>
    )
}