import React from 'react';
import { useDispatch } from 'react-redux';
import { basketActions } from '../store/basket.slice';

const DeleteProduct = (props) => {
    const dispatch = useDispatch();

    const { quantity_item, item } = props;

    const { id, image, title, quantity, value } = props.item;

    const removeBasketHandler = () => {
        dispatch(basketActions.removeProductFromBasket(id));        
    }

    return (<i className="fa fa-times" onClick={() => removeBasketHandler()} style={{ 'cursor': 'pointer' }}></i>);
}
 
export default DeleteProduct;