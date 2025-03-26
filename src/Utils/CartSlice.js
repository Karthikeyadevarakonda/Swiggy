import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItems:(state,action)=>{
           const ExistedItem = state.items.find(item => item.card.info.id === action.payload.card.info.id)
           if(ExistedItem){
            ExistedItem.count = action.payload.count;
           }else{
            state.items.push({ ...action.payload, count: 1 })
           }
          
        },
        removeItems:(state,action)=>{

                state.items = state.items.filter(item => item.card.info.id !== action.payload)
        }
}
})

export const {addItems,removeItems} = CartSlice.actions;
export default CartSlice.reducer;