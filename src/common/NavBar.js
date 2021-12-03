import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/logo.png"
function NavBar() {

    const navigate = useNavigate();

    const navigateToLogin = ()=> {
        navigate("/login");

    }
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
        <img src = {logo} style ={{width:"15rem",height:"3rem"}}/>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Flights</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Charters</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Business travel</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Airport taxis</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Activities</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Gift Cards</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Visa</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Offers</a>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <button class="btn btn-outline-success" type="submit" onClick = {()=>navigateToLogin()}>Login</button>
                    </form>
                </div>
            </div>
        </nav>
    )

}

export default NavBar;