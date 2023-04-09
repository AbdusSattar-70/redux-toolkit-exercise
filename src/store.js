import { configureStore } from '@reduxjs/toolkit';

/* you can give any name cartReducer or anything-> as default export */
import cartReducer from './features/cart/cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
