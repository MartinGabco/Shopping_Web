import React from 'react';
import { Link, NavLink } from 'react-router-dom';

//styles
import './styles/Navigation.css';

const Navigation = ({ products, forum }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link font-weight-light" to="/" exact><a>Produkty</a></NavLink>
                    <NavLink className="nav-item nav-link font-weight-light" to="/forum"><a>Fórum</a></NavLink>
                </div>
            </div>
        </nav>
    )
}
 
export default Navigation;