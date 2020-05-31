import React from "react"
import {Link} from "react-router-dom"

function Nav(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/newportfolio">Sergio Bracamontes</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
            aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to ={"/newportfolio"} className="nav-link active" >About Me</Link>
                </li>
                <li className="nav-item">
                    <Link to= {"/newportfolio/contact"} className="nav-link active">Contact</Link>
                </li>
                <li className="nav-item">
                    <Link to= {"/newportfolio/portfolio"} className="nav-link active">Portfolio</Link>
                </li>

            </ul>

        </div>
    </nav>
    )
}


export default Nav