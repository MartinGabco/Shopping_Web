import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice ({
    name: 'basket',
    initialState: {
        addedProducts: [],
        total_price: 0,
    },
    reducers: {
        addProductToBasket(state, action) {
            const newAddedProduct = action.payload;
                state.addedProducts.push({
                    key: newAddedProduct.key,
                    image: newAddedProduct.image,
                    title: newAddedProduct.title,
                    price: newAddedProduct.price,
                    quantity: 1,
                })                
            }
        },
});

export const basketActions = basketSlice.actions;

export default basketSlice;