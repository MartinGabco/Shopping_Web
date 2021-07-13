import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

//styles
import './styles/Navigation.css';

//import logo
import logo from '../src/images/Pngtree_eyelashes and eyebrows make up_5652261.png';

const Navigation = ({ products, forum, shopping_basket }) => {

    const quantityVariable = useSelector((state) => state.basket.addedProducts);
    const totalQuantityArray = quantityVariable.map(item => item.quantity);

    // Quantity sum
    let totalQuantitySum = 0;
    for (let i = 0; i < totalQuantityArray.length; i++) {
        totalQuantitySum += totalQuantityArray[i];
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link font-weight-light" to="/" exact><a>Produkty</a></NavLink>
                    <NavLink className="nav-item nav-link font-weight-light" to="/forum"><a>Fórum</a></NavLink>
                    <NavLink className="nav-item nav-link font-weight-light" to="/shopping_basket">
                        <div className="basketNavLinkWrapper">
                            <a>Košík</a>
                            <span className="badge badge-pill badge-primary">{totalQuantitySum}</span>
                        </div>
                    </NavLink>
                </div>
            </div>
            <div className="logo-box">
                <img className="eyebrow-logo" src={logo}/>
            </div>
        </nav>
    )
}
 
export default Navigation;