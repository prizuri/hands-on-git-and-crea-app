import React from "react"
export default function Gif(props){
    return(
        <div className="bigger">
            <h3>{props.title}</h3>
            <img src={props.url}/>
        </div>
    )
}