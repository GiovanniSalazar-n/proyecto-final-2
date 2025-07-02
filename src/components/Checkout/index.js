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
    <CheckoutContainer>
      <h2>Confirmar Compra</h2>

      <Section>
        <h3>Productos en el carrito:</h3>
        {items.map(item => (
          <div key={item.id}>
            {item.name} × {item.quantity} — ${item.price * item.quantity}
          </div>
        ))}
      </Section>

      <Section>
        <h3>Dirección de envío</h3>
        <Label htmlFor="name">Nombre</Label>
        <StyledInput  name="name" value={address.name} onChange={handleAddressChange} />

        <Label htmlFor="city">Ciudad</Label>
        <StyledInput  name="city" value={address.city} onChange={handleAddressChange} />

        <Label htmlFor="country">País</Label>
        <StyledInput  name="country" value={address.country} onChange={handleAddressChange} />

        <Label htmlFor="address">Dirección</Label>
        <StyledInput  name="address" value={address.address} onChange={handleAddressChange} />
      </Section>

      <Section>
        <h3>Método de pago</h3>
        <Label htmlFor="cardNum">Número de tarjeta</Label>
        <StyledInput  name="cardNum" value={paymentMethod.cardNum} onChange={handlePaymentChange} />

        <Label htmlFor="cardCode">Código de seguridad</Label>
        <StyledInput  name="cardCode" value={paymentMethod.cardCode} onChange={handlePaymentChange} />
      </Section>

      <Button onClick={handleConfirm}>Confirmar Compra</Button>
    </CheckoutContainer>
  );
};

export default Checkout;
