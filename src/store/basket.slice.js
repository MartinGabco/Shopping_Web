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
                    value: newAddedProduct.value
                });  
            } else {
                existingProduct.quantity++;
                existingProduct.value++;
            }
        },
        decreaseNumberOfProductInBasket(state, action) {
            const id = action.payload;
            const existingProduct = state.addedProducts.find((addedProduct) => addedProduct.id === id);
            if (existingProduct.quantity >= 1) {
                existingProduct.quantity--;
            }
        },
        removeProductFromBasket(state, action) {
            const id = action.payload;
            state.addedProducts = state.addedProducts.filter(addedProduct => addedProduct.id !== id);
        }
    },
});

export const basketActions = basketSlice.actions;

export default basketSlice;