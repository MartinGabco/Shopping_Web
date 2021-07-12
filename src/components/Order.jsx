import React from 'react';
import {Link} from 'react-router-dom';

// Redux-store
import { useDispatch } from 'react-redux';
import { inputsActions } from '../store/inputs-slice';

// styles
import '../styles/Order.css';

const Order = (props) => {

    const dispatch = useDispatch();

    const handleChange = (e) => {
      dispatch()
    }

    return ( 
        <div className="shopping_order">
            <div className="order-box">
                <Link to="/shopping_basket" className="linkToShopping_Basket">Návrat do košíka</Link>
                <h1>Tvoja Objednávka</h1>
                <form className="form-about">
                    <input type="text" 
                           onChange={handleChange}
                           className="first-name"
                           placeholder="First name"
                    />
                    <input type="text"
                           onChange={handleChange}
                           className="last-name"
                           placeholder="Last name"
                    />
                    <input type="email"
                           onChange={handleChange}
                           className="your-email"
                           placeholder="Your email"
                    />
                </form>
            </div>
        </div>  
    );
}
 
export default Order;