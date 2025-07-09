import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 2rem;
`;

const ProductGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
`;

const ProductCard = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
`;

const ProductName = styled.h2`
  font-size: 1.2rem;
  margin: 1rem 0 0.5rem;
`;

const ProductPrice = styled.p`
  font-weight: bold;
  margin-bottom: 1rem;
`;

const AddButton = styled.button`
  background-color: black;
  color: #fff;
  border: none;
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 8px;
  transition: 0.3s;

  &:hover {
    background-color: #222;
  }
`;

export{
    AddButton,
    ProductPrice,
    ProductName,
    ProductImage,
    ProductCard,
    ProductGrid,
    HomeContainer
}