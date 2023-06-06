import React, { useEffect, useState } from "react";
import like from "./like.jpg"
import "./style.css"
import { Link } from "react-router-dom";
import Header from "../header/header";

const Postview = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://b-nzg7.onrender.com/')
            .then(res=>{
                return res.json();
            })
            .then((res) => {
                setData(res)
            });
    }, [data])
    return (
        <>
        <Header/>
            {
                data.map((ele, i) => {
                    return (
                        <div className="box" key={i}>
                            <div className="top">
                                <section>
                                    <b>{ele.author}</b><br />
                                    {ele.location}
                                </section>
                                <img src="https://media.istockphoto.com/id/1396048367/vector/triple-dots-icon-vector-three-dots-as-a-symbol-of-menu-interface-or-more-options-3-ellipses.jpg?s=612x612&w=0&k=20&c=wCh-lsZlTRtE_AgnmqSmYRARZKfawhtObulGRV_FRd0="
                                    alt="three-dots" height="30px" width="50px"
                                    className="three-dots" />
                            </div>
                            <img src={ele.image}
                                alt="random" height="350px" width="400px" />
                            <div className="bottom">
                                <div>
                                    <img src={like}
                                        height="40px" width="70px"
                                        alt="like-share" />
                                    <br />{ele.likes} likes
                                </div>
                                <p>{ele.date}</p>
                            </div>
                            <p><b>{ele.description}</b></p>
                        </div>
                    )
                })
            }
        </>
    )
}


export default Postview;