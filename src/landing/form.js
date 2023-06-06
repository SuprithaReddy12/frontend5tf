import React from "react";
import Header from "../header/header";
import "./form.css"

const Form =()=>{
    async function handleSubmit(e){
        e.preventDefault();
        let formData = new FormData(e.target)
        await fetch('https://b-nzg7.onrender.com/posts',
        {
        method: 'POST',
        body: formData
      })
      .then((res) => 
        res.json()
        )
      .then(()=>{
        alert("posted successfully")
      })
    }
    return(
        <>
        <Header/>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input type="file" required
            placeholder="No file Chosen"
            name="image"/>

            <section className="section">
            <input type="text" required
            placeholder="Author"
            name="author"/>
            
            <input type="text" required
            placeholder="Location"
            name="location"/>
            </section>
            
            <input type="text" required
            placeholder="Description"
            name="description"/>

            <button type="submit"
            className="button">Post</button>
        </form>
        </>
    )
}

export default Form;