import React from 'react';

const NavBar = ({totalCounters}) =>{
    
        return (
            <nav className="navbar navbar-light bg-light">
                <a className = "navbar-brand" href="#">
                NavBar{" "}
                <span className="badge badge-pill bagde-secondary">
                {totalCounters}</span>

                </a>
            </nav>
        );
};
 
export default NavBar;  