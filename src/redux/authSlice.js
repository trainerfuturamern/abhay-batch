import {createSlice} from "@reduxjs/toolkit";

const initialState = {
        user:null,
        isAuthenticated:false,
        users:JSON.parse(localStorage.getItem('users')) || [],
    }

const authSlice = createSlice({
    name:'authSlice',
    initialState,
    reducers:{
        registerUser:(state, action)=>{ // action = {payload:{}}
            state.users = [...state.users, {...action.payload}];
            localStorage.setItem('users', JSON.stringify(state.users));
        },
        userLogin:(state, action)=>{

        },
        userLogout:(state)=>{

        },
        getAllUsers:(state)=>{

        }
    }
});

export const {registerUser, userLogin, userLogout, getAllUsers} = authSlice.actions;

export default authSlice.reducer;
