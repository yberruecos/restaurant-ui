import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Layout from "../components/layout/layout";
import FormDish from "../components/formDish/formDish";

const Router =()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}></Route>
                <Route path="/form/:dish" element={<FormDish/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router