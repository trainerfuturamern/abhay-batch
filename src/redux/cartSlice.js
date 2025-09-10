import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cartItems: JSON.parse(localStorage.getItem('cartItems'))  || [],
}

const cartSlice = createSlice({
    name:'cartSlice',
    initialState,
    reducers:{
        addToCart:(state, action)=>{
            const itemIndex = state.cartItems.findIndex((pr) => pr.id === action.payload.id);
            if(itemIndex === -1){
                state.cartItems.push({...action.payload, quantity:1});
            }else{
                state.cartItems[itemIndex].quantity++;
            }
            
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        removeCartItem: (state, action)=>{
            const updatedCartItems = [...state.cartItems];
            updatedCartItems.splice(action.payload, 1);
            state.cartItems = updatedCartItems;
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        }
    }
});

export const {addToCart, removeCartItem} = cartSlice.actions;
export default cartSlice.reducer;