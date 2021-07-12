import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

// Import util components
import Quantity from './utils/Quantity';
import Delete from './utils/Delete';

// Styles
import './styles/Shopping_Basket.css';

// React Transition Group
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Shopping_Basket = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const basketItems = useSelector((state) => state.basket.addedProducts);

    const totalPriceArray = basketItems.map(item => item.totalPrice);

    // Sum of total dynamic prices
    let sumTotalPrice = 0;
    for (let i = 0; i < totalPriceArray.length; i++) {
        sumTotalPrice += totalPriceArray[i];
    }

    let basket_show = <p>Váš košík je prázdny.</p>

    if (basketItems.length > 0) {
        basket_show = <table>
            <thead>
                <tr>
                    <th className="name"><p>Názov</p></th>
                    <th className="image"><p>Obrázok</p></th>
                    <th className="numberCount"><p className="items-sum">Počet kusov</p></th>
                    <th className="price"><p>Cena</p></th>
                    <th></th>
                </tr>
            </thead>
            <TransitionGroup component='tbody' className="products-box">
                {basketItems.map(item => (
                    <CSSTransition timeout={500} classNames="row-wrapper">
                        <tr className="rendered-row"> 
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
                        </tr>
                    </CSSTransition>
                ))}
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="sum">
                            <b>Celková suma: {(sumTotalPrice).toFixed(2)}</b>
                        </td>
                    </tr>
                    <tr>
                        <td><Link to="/order" className="linkToOrder">Vytvoriť objednávku</Link></td>
                        <td><Link to="/" className="linkToProducts">Chcem pokračovať vo vyberaní produktov</Link></td>
                    </tr>
                </TransitionGroup>
            </table>
    }

    return (
        <div className="shopping_basket">
            <div className="select-box">
                <section className="statement">
                    <p>Uvedené údaje nereflektujú realitu, ale slúžia <b>výhradne</b> na môj osobný tréning programátorských skillov.</p>
                </section>
                <section className="basket">
                    <h2>NÁKUPNÝ KOŠÍK</h2>
                </section>
                <div className="basket_content">{basket_show}</div>
            </div>
        </div>            
    )
}

export default Shopping_Basket;
