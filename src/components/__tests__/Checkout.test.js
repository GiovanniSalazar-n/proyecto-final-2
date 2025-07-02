import { render, screen, fireEvent } from '@testing-library/react';
import Checkout from '../Checkout';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../../App/store';
import react from 'react';
describe('Checkout component', () => {  
test('Should render when uncompelte forms', () => {
  window.alert = jest.fn(); 

  render(
    <Provider store={store}>
      <MemoryRouter>
        <Checkout />
      </MemoryRouter>
    </Provider>
  );

  const button = screen.getByRole('button', { name: /confirmar compra/i });
  fireEvent.click(button);

  expect(window.alert).toHaveBeenCalledWith('Por favor completa todos los campos');
});
})