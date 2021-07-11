import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

// Import util components
import Quantity from './utils/Quantity';
import Delete from './utils/Delete';

// Styles
import './styles/Shopping_Basket.css';

const Shopping_Basket = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const basketItems = useSelector((state) => state.basket.addedProducts);

    console.log(basketItems);

    let basket_show = <p>Vaš košík je prázdny.</p>

    if (basketItems.length > 0) {
        basket_show = <table>
            <thead>
                <tr>
                    <th>Názov</th>
                    <th>Obrázok</th>
                    <th>Počet kusov</th>
                    <th>Cena</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {basketItems.map(item => (<tr>
                    <td>{item.title}</td>
                    <td><img src={item.image} alt="image" width="100px" height="100px"/></td>
                        <td className="quantityWrapper">
                        <Quantity
                            quantity_item = {item.quantity}
                            price = {item.price}
                            totalPrice = {item.totalPrice}
                            item = {item}
                        />
                    </td>
                    <td>{(item.totalPrice).toFixed(2).replace(/^-0$/, '0')}</td>
                    <td><Delete
                        quantity_item = {item.quantity}
                        item = {item}
                    /></td>
                </tr>))}
                <tr>
                    <td className="sum"></td>
                </tr>
            </tbody>
        </table>
    }

    return (
        <div className="shopping_basket">
            <div className="select-box">
                {basket_show}
            </div>
        </div>            
    )
}

export default Shopping_Basket;
