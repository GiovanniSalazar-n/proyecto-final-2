import { createSlice } from '@reduxjs/toolkit';
import product1 from '../assets/producto1.jpg';
import product2 from '../assets/producto2.webp';
import product3 from '../assets/Producto3.webp';
import product4 from '../assets/producto4.webp';
import product5 from '../assets/producto5.webp';
import product6 from '../assets/producto6.webp';


const initialState = {
  products: [
    {
      id: 1,
      name: 'Adidas Ultraboost',
      price: 2500,
      image: product1,
    },
    {
      id: 2,
      name: 'Adidas Superstar',
      price: 1900,
      image: product2,
    },
    {
      id: 3,
      name: 'Adidas Forum',
      price: 2100,
      image: product3,
    },
        {
      id: 4,
      name: ' Adidas Grand Court Lifestyle',
      price: 1350,
      image: product4,
    },
    {
      id: 5,
      name: 'Adidas Grand Court negros ',
      price: 1550,
      image: product5,
    },
    {
      id: 6,
      name: ' Adidas grand court blancos',
      price: 1250,
      image: product6,
    },
  ],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
   
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});


export const { setProducts } = productSlice.actions;
export const selectProducts = (state) => state.products.products;
export default productSlice.reducer;
