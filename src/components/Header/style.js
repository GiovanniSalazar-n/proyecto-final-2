import styled from 'styled-components';

 const HeaderContainer = styled.header`
  width: 100%;
  margin: 0 auto;
  padding: 1.25rem 3.13rem;
  background-color: ${({ theme }) => theme.colors.Primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.Text};

`;
 const IconButton = styled.button`
  width: 2.19rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  
  img {
    width: 100%;
    display: block;
  }
`;

 const Logo = styled.div`
  img {
    height: 4.19rem;
    transition: width 0.3s ease;
  }
`;

 const CartButton = styled(IconButton)`
  position: relative;
`;

 const CartBadge = styled.span`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  background: rgb(237, 1, 1);
  color: #fff;
  border-radius: 50%;
  padding: 0.2rem 0.5rem;
  font-size: 0.75rem;
  font-weight: bold;
`;
const Banner = styled.img`
  width: 100%;
  height: 11.8rem;
  display: block;
`;
export{
    CartBadge,
    CartButton,
    Logo,
    IconButton,
    HeaderContainer
    ,Banner
}