import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <div className="navigation">
            <nav className="navbar">
                <div className="navbarHome">
                    <NavLink className="navbarProfile" to="/">
                        Home
                    </NavLink>
                </div>
                <div className="navbarPages">
                    <div className="navbarPage">
                        <NavLink className="navbarProfile" to="/art">
                            Art
                        </NavLink>
                    </div>
                    <div className="navbarPage">
                        <NavLink className="navbarProfile" to="/projects">
                            Projects
                        </NavLink>
                    </div>
                    <div className="navbarPage">
                        <NavLink className="navbarProfile" to="/writings">
                            Writings
                        </NavLink>
                    </div>
                    <div className="navbarPage">
                        <NavLink className="navbarProfile" to="/movieCatalogue">
                            Movies
                        </NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation