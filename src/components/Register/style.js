import styled from 'styled-components';


export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 1.25rem;
  background-color: #f5f5f5;

  @media (max-width: 30rem) {
    padding: 0.94rem;
  }
`;

export const RegisterCard = styled.div`
  background: ${({ theme }) => theme.colors.White};
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
  padding: 2.5rem;
  width: 100%;
  max-width: 30rem;
  
  @media (max-width: 30rem) {
    padding: 1.5rem;
  }
`;

export const RegisterTitle = styled.h2`
  color: ${({ theme }) => theme.colors.Text};
  font-family: ${({ theme }) => theme.fonts.headings};
  font-size: 1.88rem;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 600;

  @media (max-width: 30rem) {
    font-size: 1.5rem;
  }
`;

export const RegisterFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.Text};
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  font-family: ${({ theme }) => theme.fonts.base};
  font-size: 0.94rem;
  color: ${({ theme }) => theme.colors.Text};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.Primary};
  }

  &:disabled {
    background-color: #eee;
    cursor: not-allowed;
  }
`;

export const RegisterButton = styled.button`
  background-color: ${({ theme }) => theme.colors.Primary};
  color: ${({ theme }) => theme.colors.White};
  padding: 0.75rem;
  border: none;
  border-radius: 2.188rem;
  font-family: ${({ theme }) => theme.fonts.base};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 0.5rem;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.Text};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const RegisterFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  margin-top: 1rem;
`;

export const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.Text};
  font-size: 0.875rem;
  margin: 0;
`;

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.Primary};
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.ErrorRed};
  background-color: rgba(237, 1, 1, 0.1);
  padding: 0.75rem;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 0.875rem;
`;