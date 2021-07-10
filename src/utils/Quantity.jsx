import React from 'react';
import { useDispatch } from 'react-redux';
import { basketActions } from '../store/basket.slice';

const Quantity = (props) => {
    const dispatch = useDispatch();

    const { quantity_item, item } = props;

    const { id, image, title, quantity, value } = props.item;

    const addToBasketHandler = () => {
        dispatch(
            basketActions.addProductToBasket({
                id,
                quantity            
            })
        );
    };

    const decreaseBasketHandler = () => {
        dispatch(basketActions.decreaseNumberOfProductInBasket(id));
    };

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
                    onClick={() => decreaseBasketHandler()}
                    disabled={item.quantity === 0 ? 'disabled' : ''}
            >
                -
            </button>            
        </React.Fragment>
    );
}
 
export default Quantity;