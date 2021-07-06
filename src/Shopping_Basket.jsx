import React from 'react';
import { useSelector } from 'react-redux';

// Styles
import './styles/Shopping_Basket.css';

const Shopping_Basket = () => {
    const basketItems = useSelector((state) => state.basket.addedProducts);
    console.log(basketItems);

    return (
        <div className="shopping_basket">
            <div className="select-box">
                {basketItems.map(item => <img src={item.image} alt="image" width="160px" height="160px"/>)}
            </div>
        </div>            
    )
}

export default Shopping_Basket;
