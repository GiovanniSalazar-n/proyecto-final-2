import react from "react";
import { CloseButton, Sidebar } from "./style";
const MenuSidebar = ({ isOpen, onClose }) => {
  return (
    <Sidebar isOpen={isOpen}>
      <CloseButton onClick={onClose}>✖</CloseButton>
      <ul>
        <li><a href="/store">Inicio</a></li>
        <li><a href="/checkout">Checkout</a></li>
        <li><a href="/">Log out</a></li>
      </ul>
    </Sidebar>
  );
};

export default MenuSidebar;