import React from "react";
import { Link } from "react-router-dom";
import "./header.css"

const Header=()=>{
    return(
        <>
         <div className="header">
            <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAlzzxlh8wfbMor09EF5da4NPaBmK-q1-91wVctpovpQ&s"
            className="icon"
            alt="img-icon" height="50px" width="40px"/>
            <h1 color="green" className="h1">Instaclone</h1>
            </div>
            <div className="camera-img">
            <Link to="/posts">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTO0LjYwbMkZhGj3wcG9tRtyYkvg_BnbjRiXKBPWA&s"
            alt="camera" height="50px" width="40px"/>
            </Link>
           </div>
        </div>
        <hr color="green"/>
        <br/>
        </>
    )
}

export default Header;