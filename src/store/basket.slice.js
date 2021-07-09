import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice ({
    name: 'basket',
    initialState: {
        addedProducts: [],
        total_quantity: 0,
    },
    reducers: {
        addProductToBasket(state, action) {
            const newAddedProduct = action.payload;
            const existingProduct = state.addedProducts.find((addedProduct) => addedProduct.id === newAddedProduct.id);
            if (!existingProduct) {
                state.addedProducts.push({
                    id: newAddedProduct.id,
                    image: newAddedProduct.image,
                    title: newAddedProduct.title,
                    quantity: 1,
                });  
            } else {
                existingProduct.quantity++;
            }
        }
    },
});

export const basketActions = basketSlice.actions;

export default basketSlice;