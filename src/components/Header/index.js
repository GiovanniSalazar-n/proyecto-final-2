import React, { useState } from "react";
import { HeaderContainer, IconButton, Logo, CartButton, Banner } from './style';
import menuIcon from '../../assets/menu.png';
import logo from '../../assets/logotipo.png';
import cartIcon from '../../assets/carrito.png';
import banner from '../../assets/banner.webp'
import Cart from './Cart';
import Menu from './Menu';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <HeaderContainer>
        <IconButton as="button" aria-label="Menú" onClick={() => setIsMenuOpen(true)}>
          <img src={menuIcon} alt="Menú" />
        </IconButton>

        <Logo>
          <img src={logo} alt="Logo de la tienda" />
        </Logo>

        <CartButton aria-label="Carrito" onClick={() => setIsCartOpen(true)}>
          <img src={cartIcon} alt="Carrito de compras" />
        </CartButton>
      </HeaderContainer>
      <Banner src={banner} alt="banner Adidas" />

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
