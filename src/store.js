import { configureStore } from '@reduxjs/toolkit';

/* you can give any name cartReducer or anything-> as default export */
import cartReducer from './features/cart/cartSlice';
import modalReducer from './features/modal/modalSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});

export default store;
