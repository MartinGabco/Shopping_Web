import React, { Component } from 'react'
import Like from '../utils/Like';
import CounterWrapper from './CounterWrapper';
import ShoppingBasket from './ShoppingBasket';

//styles
import '../styles/MainContent.css';

const MainContent = props => {
    const { products, onDelete, onLike, onSort, onIncrement, onDecrement } = props;

    return (
    <React.Fragment>
        <ShoppingBasket 
            totalCount={products.filter(p => p.value > 0).length} 
        />
        <div className="container">      
            <ul className="products-box">
                {products.map(product => (
                    <li key={product._id} className="item">
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
                                key={product._id}
                                onIncrement={onIncrement}
                                onDecrement={onDecrement}
                                product={product}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </React.Fragment>
    );
}
 
export default MainContent;