import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItems:(state,action)=>{
           state.items.push(action.payload)
        },
        removeItems:(state)=>{
            state.items.pop()
        }
    }
})

export const {addItems,removeItems} = CartSlice.actions;
export default CartSlice.reducer;