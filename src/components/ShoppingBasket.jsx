import React from 'react';

import MainContent from './MainContent';

import '../styles/ShoppingBasket.css';


const ShoppingBasket = ({ totalCount }) => {

    return (
        <div className="basket">
            <i className="fa fa-shopping-cart size: fa-2x"></i>
            <p>{totalCount}</p>           
        </div>
    )
}

export default ShoppingBasket;