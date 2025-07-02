import styled from 'styled-components';
const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  margin-bottom: 1rem;
`;
const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-300px')};
  width: 300px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.White};
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  padding: 1rem;
  transition: left 0.3s ease;
  z-index: 999;
`;
export{
    Sidebar,
    CloseButton
}