// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push(action.payload);
        },
        // Add other actions like removeFromCart, updateCartItemQuantity, etc.
    },
});

export const { addToCart } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.cartItems;

export default cartSlice.reducer;
