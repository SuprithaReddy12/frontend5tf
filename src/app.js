import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Landing from "./landing/landing";
import Postview from "./postview/postview";
import Form from "./landing/form";

function App(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/all" element={<Postview/>}/>
            <Route path="/posts" element={<Form/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default App;