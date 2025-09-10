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
        },
        editProduct:(state, action)=>{

            const productIndex = state.products.findIndex((pr) => pr.id === action.payload.id);

            if(productIndex !== -1){
                
                state.products[productIndex] = action.payload;
                localStorage.setItem('products', JSON.stringify(state.products));
                
            }
            
            
        },
        deleteProduct:(state, action)=>{

            const productIndex = state.products.findIndex((pr) => pr.id === action.payload);

            if(productIndex !== -1){
                const updatedProducts = [...state.products];
                updatedProducts.splice(productIndex,1);
                state.products = updatedProducts;
                localStorage.setItem('products', JSON.stringify(state.products));
                
            }
            
            
        }
    }
});

export const {addProduct, editProduct, deleteProduct} = productSlice.actions;
export default productSlice.reducer;