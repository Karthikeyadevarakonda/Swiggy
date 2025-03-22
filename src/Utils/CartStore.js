import { configureStore } from "@reduxjs/toolkit";
import CardReducer from "./CartSlice"

const CartStore = configureStore({
    reducer: {
        cart: CardReducer,
      },
})

export default CartStore;