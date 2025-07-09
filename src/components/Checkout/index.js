import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, selectCartItems } from '../../redux/cartSlice';
import {
  Button,
  CheckoutContainer,
  Label,
  Section,
  StyledInput,
} from './style';

const Checkout = () => {
  const items = useSelector(selectCartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [address, setAddress] = useState({
    name: '',
    city: '',
    country: '',
    address: '',
  });

  const [paymentMethod, setPaymentMethod] = useState({
    cardNum: '',
    cardCode: '',
  });

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentMethod(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleConfirm = () => {
    if (
      !address.name || !address.city || !address.country || !address.address ||
      !paymentMethod.cardNum || !paymentMethod.cardCode
    ) {
      alert('Por favor completa todos los campos');
      return;
    }

    dispatch(clearCart());
    navigate('/succes');
  };

  return (
    <CheckoutContainer role="main" aria-label="Página de checkout">
      <h2>Confirmar Compra</h2>

      <Section>
        <h3>Productos en el carrito:</h3>
        {items.map(item => (
          <div key={item.id}>
            {item.name} × {item.quantity} — ${item.price * item.quantity}
          </div>
        ))}
      </Section>
      <form onSubmit={(e) => { e.preventDefault(); handleConfirm(); }}>
      <Section>
        <h3>Dirección de envío</h3>
        <Label htmlFor="name">Nombre</Label>
        <StyledInput id='name' name="name" value={address.name} onChange={handleAddressChange} />

        <Label htmlFor="city" >Ciudad</Label>
        <StyledInput id='city' name="city" value={address.city} onChange={handleAddressChange} />

        <Label htmlFor="country">País</Label>
        <StyledInput  id='country' name="country" value={address.country} onChange={handleAddressChange} />

        <Label htmlFor="address">Dirección</Label>
        <StyledInput  id='address'name="address" value={address.address} onChange={handleAddressChange} />
      </Section>

      <Section as="section" role="region" aria-label="Información de pago">
        <h3>Método de pago</h3>
        <Label htmlFor="cardNum">Número de tarjeta</Label>
        <StyledInput id='cardNum' name="cardNum" value={paymentMethod.cardNum} onChange={handlePaymentChange} />

        <Label htmlFor="cardCode">Código de seguridad</Label>
        <StyledInput id='cardCode' name="cardCode" value={paymentMethod.cardCode} onChange={handlePaymentChange} />
      </Section>

      <Button 
      type='submit'
      onClick={handleConfirm}
      aria-label='Confirma la compra de datos ingresados'>Confirmar Compra</Button>
      </form>
    </CheckoutContainer>
  );
};

export default Checkout;
