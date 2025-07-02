import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/authSlice';
import productReducer from '../redux/productSlice'
import cartReducer from '../redux/cartSlice'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    cart: cartReducer,
  }
});
export default store