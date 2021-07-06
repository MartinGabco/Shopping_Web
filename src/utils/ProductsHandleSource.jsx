import React, { Component } from 'react';
import _ from 'lodash';

class ProductsSource extends Component {
    state={
        products: {},
        brands: {},
        currentPage: {},     
        pageSize: {},
        searchQuery: {},
        selectedBrand: {},
        sortColumn: {}
    }

        //handling events

    handleLike = product => {
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] = {...products[index]};
        products[index].liked = !products[index].liked;
        this.setState({ products });
    };
    
    handleDelete = product => {
        const products = this.state.products.filter(p => p._id !== product._id);
        this.setState({ products })
    }
        
    handlePageChange = page => {
        this.setState({ currentPage: page });
    }
    
    handleBrandSelect = brand => {
        this.setState({ selectedBrand: brand, searchQuery: "", currentPage: 1 });
    }
    
    handleSearch = query => {
        this.setState({ searchQuery: query, selectedBrand: null, currentPage: 1 })
    }
    
    handleSort = path => {
        this.setState({ sortColumn: { path, order: 'asc' } });
    }

    
    handleDecrement = product => {
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] = { ...product };
        products[index].value--;
        this.setState({ products });
    };
}

export default ProductsSource
