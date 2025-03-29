import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        restaurantData: null,
    },
    reducers: {
        addItems: (state, action) => {
            const { card, restaurant } = action.payload;
            const ExistedItem = state.items.find(item => item.card.info.id === card.info.id);

            if (ExistedItem) {
                ExistedItem.count += 1; 
            } else {
                state.items.push({ 
                    card, 
                    count: 1, 
                    restaurant
                });
            }

            state.restaurantData = restaurant;
        },

        decrementItems: (state, action) => {
            const ExistedItem = state.items.find(item => item.card.info.id === action.payload);

            if (ExistedItem) {
                if (ExistedItem.count > 1) {
                    ExistedItem.count -= 1;
                } else {
                    state.items = state.items.filter(item => item.card.info.id !== action.payload);
                }
            }
        },

        removeItems: (state, action) => {
            state.items = state.items.filter(item => item.card.info.id !== action.payload);
        },

        setRestaurantData: (state, action) => {
            state.restaurantData = action.payload;
        },

        clearCart: (state) => {
            state.items = [];
            state.restaurantData = null;
        }
    }
});

export const { addItems, decrementItems, removeItems, setRestaurantData, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
