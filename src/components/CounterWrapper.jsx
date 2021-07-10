import React, {Component} from 'react';
import { useDispatch } from 'react-redux';
import { basketActions } from '../store/basket.slice';

//styles
import '../styles/CounterWrapper.css';

const CounterWrapper = (props) => {
    const dispatch = useDispatch();

    const { id, image, title, price, product, value, onIncrement, onDecrement } = props;

    const addToBasketHandler = (product) => {
        dispatch(
            basketActions.addProductToBasket({
                id,
                image,
                title,
                price,
                quantity: 1,
                value
            })
        );
    };

    const removeProduct = (product) => {
        dispatch(
            basketActions.removeProductFromBasket()
        )
    }

    return (
        <div className="counter-wrapper">
            <button
                onClick={() => {addToBasketHandler(product); onIncrement(product)}}
                className="btn btn-danger btn-sm m-2"
            >
                Pridať do košíka
            </button>
        </div>
    );
}

export default CounterWrapper;