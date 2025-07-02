import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, removeFromCart } from '../../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import {
  SidebarContainer,
  SidebarHeader,
  SidebarContent,
  CartItem,
  ItemInfo,
  RemoveButton,
  ClearButton
} from './style';

const Cart = ({ isOpen, onClose }) => {
  const items = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const navigate= useNavigate();

  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarHeader>
        <h2>Tu Carrito</h2>
        <button onClick={onClose}>✕</button>
      </SidebarHeader>
      <SidebarContent>
        {items.length === 0 ? (
          <p>Tu carrito está vacío</p>
        ) : (
          items.map(item => (
            <CartItem key={item.id}>
              <img src={item.image} alt={item.name} width="60" />
              <ItemInfo>
                <p>{item.name}</p>
                <p>${item.price} x {item.quantity}</p>
              </ItemInfo>
              <RemoveButton onClick={() => dispatch(removeFromCart(item.id))}>Eliminar</RemoveButton>
            </CartItem>
          ))
        )}
        {items.length > 0 && (
          <ClearButton onClick={() => {
            onClose();           
            navigate('/checkout'); 
          }}>
            Ir al Checkout
          </ClearButton>
        )}

      </SidebarContent>
    </SidebarContainer>
  );
};

export default Cart;
