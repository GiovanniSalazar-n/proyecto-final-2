import styled from 'styled-components';

 const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => isOpen ? '0' : '-100%'};
  width: 350px;
  height: 100vh;
  background: white;
  box-shadow: -2px 0 10px rgba(0,0,0,0.1);
  transition: right 0.3s ease-in-out;
  z-index: 1000;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

 const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  button {
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

 const SidebarContent = styled.div`
  flex: 1;
  overflow-y: auto;
`;

 const CartItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  img {
    margin-right: 1rem;
    border-radius: 8px;
  }
`;

 const ItemInfo = styled.div`
  flex: 1;
`;

 const RemoveButton = styled.button`
  background: crimson;
  color: white;
  border: none;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  cursor: pointer;
`;

 const ClearButton = styled.button`
  background: black;
  color: white;
  border: none;
  margin-top: 1rem;
  padding: 0.8rem;
  width: 100%;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
`;

export {
    ClearButton,
    RemoveButton,
    ItemInfo,
    CartItem,
    SidebarContent,
    SidebarHeader,
    SidebarContainer

}