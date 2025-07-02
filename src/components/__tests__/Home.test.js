import { render, screen } from '@testing-library/react';
import Home from '../Home';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../../App/store';
import { setProducts } from '../../redux/productSlice';
describe('Home component', () => { 
it('should render products', () => {
  const mockProducts = [
    { id: 1, name: 'Producto 1', price: 100, image: '/images/p1.jpg' },
    { id: 2, name: 'Producto 2', price: 200, image: '/images/p2.jpg' }
  ];

  store.dispatch(setProducts(mockProducts)); 

  render(
    <Provider store={store}>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </Provider>
  );

  expect(screen.getByText(/producto 1/i)).toBeInTheDocument();
  expect(screen.getByText(/producto 2/i)).toBeInTheDocument();
});
 })
