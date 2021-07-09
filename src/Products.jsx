import React, { Component } from 'react';

//components
import Pagination from './components/Pagination';
import ListGroup from './components/ListGroup';
import SearchBox from './components/SearchBox';
import MainContent from './components/MainContent';
import Carousel from './utils/Carousel';

//reusable component
import ProductsHandleSource from './utils/ProductsHandleSource';

//functions
import { paginate } from './utils/Paginate';

//services
import { getProducts } from './services/exerciseProductService';
import { getBrands } from './services/exerciseBrandService';

import _ from 'lodash';

//css
import './styles/Products.css';
// React Transition Group
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Promo_Image from './images/Pngtree_eyelashes and eyebrows make up_5652261.png'
class Products extends ProductsHandleSource {
    state = {
        products: [],
        brands: [],
        currentPage: 1,     
        pageSize: 6,
        searchQuery: "",
        selectedBrand: null,
        sortColumn: { path: 'title', order: 'asc'}
    }

    //componentDidMount
    componentDidMount() {
        const brands = [{name:'Všetky značky'},...getBrands()];
        this.setState({ _id: "", products: getProducts(), brands });
    }

    // common method for paginating and filtering
    getPagedData = () => {
        const { 
            pageSize, 
            currentPage, 
            sortColumn,
            selectedBrand,  
            searchQuery,
            products: allProducts,
        } = this.state;

        let filtered = allProducts;
        if(searchQuery) 
            filtered = allProducts.filter(p => 
                p.title.toLowerCase().startsWith(searchQuery.toLowerCase()) 
            );
        else if(selectedBrand && selectedBrand._id) 
            filtered = allProducts.filter(p => 
                p.brand._id === selectedBrand._id);

        const sorted =_.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const products = paginate(sorted, currentPage, pageSize); 

        return { totalCount: filtered.length, data: products}
    };

    render() {
        const { length: count } = this.state.products;
        const { pageSize, currentPage, searchQuery } = this.state;

        const { totalCount, data: products } = this.getPagedData();

        const { data } = this.context;
          
        return (
            <div className="products-content">
                <div className="preview">   
                    <Carousel />
                </div>
                <div className="user-area">
                    <div className="list-group-box">
                        <ListGroup 
                            items={this.state.brands}
                            onItemSelect={this.handleBrandSelect}
                            selectedItem={this.state.selectedBrand}
                        />                            
                    </div>
                    <div className="shop-content">
                        <header className="shop-header">
                            <SearchBox 
                                value={searchQuery} 
                                onChange={this.handleSearch}   
                            />
                        </header>
                        <main className="shop-main" id="sale_button">
                            <p className="number_products w-25">Počet produktov v databáze: {totalCount}</p>
                            <MainContent 
                                products={products}
                                onDelete={this.handleDelete}
                                onLike={this.handleLike}
                                onSort={this.handleSort}
                                onIncrement={this.handleIncrement}
                                onDecrement={this.handleDecrement}
                            />
                            <div className="pagin">
                                <Pagination                    
                                    itemsCount={totalCount} 
                                    pageSize={pageSize}                 
                                    currentPage={currentPage}                
                                    onPageSize={this.handlePageSize}
                                    onPageChange={this.handlePageChange}
                                />                                
                            </div>
                        </main>
                    </div>
                </div>         
            </div>
        )
    }
}

export default Products;