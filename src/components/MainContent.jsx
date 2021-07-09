import React, { Component } from 'react';
import CounterWrapper from './CounterWrapper';
import Like from '../utils/Like';
import ShoppingBasket from './ShoppingBasket';

//styles
import '../styles/MainContent.css';
import '../styles/CounterWrapper.css';

// React Transition Group
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const MainContent = props => {

    const { products, onDelete, onLike, onSort, onIncrement, onDecrement } = props;

    return (
        <React.Fragment>
            <div className="container">   
                <ul className="products-box">
                    {products.map(product => (
                        <TransitionGroup 
                            transitionName="itemTrans" 
                            transitionEnterTimeout={500} 
                            transitionLeaveTimeout={600}
                            conponent="li"
                            li key={product._id} 
                            className="item">
                            <div className="product-header">
                                <div className="product-delete">
                                    <i onClick={() => onDelete(product)} className="fa fa-times"></i>
                                </div> 
                                <div class="like-box"><Like liked={product.liked} onClick={() => onLike(product)}/></div>
                            </div>
                            <div className="main">
                                <span className="image-box"><img src={product.image} alt="image" width="160px" height="160px"/></span>
                                <span className="name-box">
                                    <span className="brand">{product.brand.name}</span>
                                    <span className="name"><strong>{product.title}</strong></span>
                                    <span className="description">{product.description}</span>   
                                </span>
                            </div>
                            <div className="price">
                                <span className="price-wrap"><strong>{product.price}{product.price_sign}</strong></span>
                            </div>
                            <div className="counter-box">
                                <CounterWrapper
                                    product={product}
                                    key={product.id} 
                                    image={product.image}
                                    title={product.title}
                                    price={product.price} 
                                    onIncrement={onIncrement}
                                />
                            </div>
                        </TransitionGroup>
                    ))}
                </ul>
            </div>
        </React.Fragment>
    );
}
 
export default MainContent;