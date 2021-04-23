import React, {Component} from 'react';

//styles
import '../styles/CounterWrapper.css';

class counterWrapper extends Component {
    render() {
        return (
            <div className="counter-wrapper">
                <h5>
                    <span className={this.getBadgeClasses()}>
                        {this.productsCount()}
                    </span>
                </h5>
                    <button
                        onClick={() => this.props.onIncrement(this.props.product)}
                        className="btn btn-danger btn-sm m-2"
                    >
                        Pridať do košíka
                    </button>
                    <button
                        onClick={() => this.props.onDecrement(this.props.product)}
                        className="btn btn-light btn-sm m-1.5"
                        disabled={this.props.product.value === 0 ? 'disabled' : ''}
                    >
                        Odobrať z košíka
                    </button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "";
        classes += this.props.product.value === 0 ? "badge badge-warning" : "badge badge-success";
        return classes;
    }    

    productsCount() {
        return this.props.product.value === 0 ? "Žiadny produkt!" : this.props.product.value;
    }
}

export default counterWrapper
