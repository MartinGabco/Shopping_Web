import React from 'react';
import { useSelector } from 'react-redux';

// Styles
import './styles/Shopping_Basket.css';

const Shopping_Basket = () => {
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
                        <th>Hodnota</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {basketItems.map(item => (<tr>
                        <td>{item.title}</td>
                        <td><img src={item.image} alt="image" width="100px" height="100px"/></td>
                        <td>{item.quantity}</td>
                        <td>{item.price}</td>
                        <td><i className="fa fa-times"></i></td>
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
