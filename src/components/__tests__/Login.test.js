import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from '../Login';
import { Provider } from 'react-redux';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Theme from '../../theme'
import store from '../../App/store';
import { click } from '@testing-library/user-event/dist/click';

describe('Login component', () => {  
it('Should show error message when uncompleat form', () => {
  render(
      <Provider store={store}>
        <ThemeProvider theme={Theme}>
          <MemoryRouter>
            <Login />
          </MemoryRouter>
        </ThemeProvider>
      </Provider>
  );

  const button = screen.getByRole('button', { name: /ingresar/i });
  fireEvent.click(button);

  expect(screen.getByText(/por favor completa todos los campos/i)).toBeInTheDocument();
});
it('should redirect to main part', async () => { 
      render(
    <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/store" element={<div>Página principal</div>} />
        </Routes>
      </MemoryRouter>
      </ThemeProvider>
    </Provider>
  );


    const name=screen.getByLabelText(/nombre de usuario/i)
    const password=screen.getByLabelText(/contraseña/i)
    const btn=screen.getByRole('button', { name: /ingresar/i });
  
    fireEvent.change(name,{target: {value: 'admin'}})
    fireEvent.change(password,{target:{value:'admin123'}})
    fireEvent,click(btn)
    await waitFor(() => {
    expect(screen.getByText(/página principal/i)).toBeInTheDocument();
  });
 })

 
})
