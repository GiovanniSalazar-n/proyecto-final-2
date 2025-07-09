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
      alt:'Zapatillas modelo Adidas Ultraboost azules de deporte',
      price: 2500,
      image: product1,
    },
    {
      id: 2,
      name: 'Adidas Superstar',
      alt:'Zapatillas modelo Adidas Superstar blancos con negro ',
      price: 1900,
      image: product2,
    },
    {
      id: 3,
      name: 'Adidas Forum',
      alt:'Zapatillas modelo Adidas Forum negros  de deporte',
      price: 2100,
      image: product3,
    },
        {
      id: 4,
      name: ' Adidas Grand Court Lifestyle',
      alt:'Zapatillas modelo Adidas Grand Court Lifestyle negros con franjas blancas casualesz',
      price: 1350,
      image: product4,
    },
    {
      id: 5,
      name: 'Adidas Grand Court negros ',
      alt:'Zapatillas modelo Adidas Grand Court negros casuales',
      price: 1550,
      image: product5,
    },
    {
      id: 6,
      name: ' Adidas grand court blancos',
      alt:'Zapatillas modelo Adidas grand court blancos con franjas negras causales',
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
