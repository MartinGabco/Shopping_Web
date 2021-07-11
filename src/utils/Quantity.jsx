import React from 'react';
import { useDispatch } from 'react-redux';
import { basketActions } from '../store/basket.slice';

const Quantity = (props) => {
    const dispatch = useDispatch();

    const { quantity_item, item } = props;

    const { id, image, title, price, totalPrice, quantity, value } = props.item;

    const addToBasketHandler = () => {
        dispatch(
            basketActions.addProductToBasket({
                id,
                image,
                title,
                price,
                totalPrice,
                quantity: 1,
                value      
            })
        );
    };

    const decreaseBasketHandler = () => {
        dispatch(basketActions.decreaseNumberOfProductInBasket(id));
    };

    const decreasePrice = () => {
        dispatch(
            basketActions.decreaseTotalPrice({
                id,
                image,
                title,
                price,
                totalPrice,
                quantity: 1,
                value      
            })
        );       
    }

    return ( 
        <React.Fragment>
            <button type="button" 
                    class="btn btn-primary" 
                    onClick={() => addToBasketHandler()}
            >
                +
            </button>
            <p>{quantity_item}</p>
            <button type="button" 
                    class="btn btn-danger" 
                    onClick={() => {decreaseBasketHandler(); decreasePrice()}}
                    disabled={item.quantity === 0 ? 'disabled' : ''}
            >
                -
            </button>            
        </React.Fragment>
    );
}
 
export default Quantity;