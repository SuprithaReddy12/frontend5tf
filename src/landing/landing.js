import React from "react";
import {Link} from "react-router-dom"
import land from "./landing(1).jpg"
import "./landing.css"

const Landing=()=>{
    return(
        <div className="landing">
        <img src={land} 
        className="land"
        alt="landing"
        height="550px"/>
        <section className="context">
            <h1 className="context-1">10X Team 04</h1>
            <Link to="/all"><div className="enter"><b>Enter</b></div></Link>
        </section>
        </div>
    )
}

export default Landing;