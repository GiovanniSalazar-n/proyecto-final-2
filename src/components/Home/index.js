import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectProducts } from '../../redux/productSlice';
import { addToCart } from '../../redux/cartSlice';
import { AddButton, HomeContainer, ProductCard, ProductGrid, ProductImage, ProductName, ProductPrice } from './style';
const Home = () => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <HomeContainer>
      <h1 lang='en'> Adidas store</h1>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.alt} />
            <ProductName>{product.name}</ProductName>
            <ProductPrice>${product.price}</ProductPrice>
            <AddButton onClick={() => handleAddToCart(product)}>Agregar al carrito</AddButton>
          </ProductCard>
        ))}
      </ProductGrid>
    </HomeContainer>
  );
};

export default Home;