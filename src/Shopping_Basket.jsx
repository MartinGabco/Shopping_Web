import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import './styles/Shopping_Basket.css';

const Shopping_Basket = () => {

    const incrementHandler = () => {
        dispatch({ type: 'increment' });
    }

    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)

    return (
        <div className="shopping_basket">
           <div className="select-box">
               <div className="div">{counter}</div>
               <button onClick={incrementHandler}>Increment</button>
           </div>
        </div>
    )
}

export default Shopping_Basket;
