import React, {Component} from 'react';
import { useDispatch } from 'react-redux';
import { basketActions } from '../store/basket.slice';

//styles
import '../styles/CounterWrapper.css';

const CounterWrapper = (props) => {
    const dispatch = useDispatch();

    const { key, image, title, price, product, onIncrement, onDecrement } = props;

    console.log(title);

    const addToBasketHandler = (product) => {
        dispatch(
            basketActions.addProductToBasket({
                key,
                image,
                title,
                price
            })
        );
    };

    return (
        <div className="counter-wrapper">
                <button
                    onClick={() => addToBasketHandler(product)}
                    className="btn btn-danger btn-sm m-2"
                >
                    Pridať do košíka
                </button>
        </div>
    );
}

export default CounterWrapper;