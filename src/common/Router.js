import React from 'react'
import { Routes,Route } from "react-router-dom";
import Login from "../components/login/Login";
import { SearchForm } from "../container/search-form/search-form";

function Router() {

    return (
        <Routes>
            <Route path ="/" element = {<SearchForm />}/>
            <Route path ="/login" element = {<Login />}/>
        </Routes>
    )

}

export default Router;