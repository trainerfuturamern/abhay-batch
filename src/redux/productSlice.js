import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: JSON.parse(localStorage.getItem('products'))  || [],
}

const productSlice = createSlice({
    name:'productSlice',
    initialState,
    reducers:{
        addProduct:(state, action)=>{
            state.products.push(action.payload);
            localStorage.setItem('products', JSON.stringify(state.products));
        }
    }
});

export const {addProduct} = productSlice.actions;
export default productSlice.reducer;