import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { 
  registerStart,
  registerSuccess,
  registerFailure ,
  selectAuth
} from '../../redux/authSlice';
import { 
  RegisterContainer,
  RegisterCard,
  RegisterTitle,
  RegisterFormStyled,
  FormGroup,
  Label,
  Input,
  RegisterButton,
  RegisterFooter,
  FooterText,
  FooterLink,
  ErrorMessage
} from './style';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  const dispatch = useDispatch();
  const { loading, error } = useSelector(selectAuth);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      dispatch(registerFailure('Las contraseñas no coinciden'));
      return;
    }

    if (formData.password.length < 6) {
      dispatch(registerFailure('La contraseña debe tener al menos 6 caracteres'));
      return;
    }

    dispatch(registerStart());
    

    setTimeout(() => {
      const newUser = {
        id: Date.now(),
        username: formData.username,
        
        createdAt: new Date().toISOString()
      };
      
      dispatch(registerSuccess(newUser));
      navigate('/'); 
    }, 1000);
  };

  const handleLoginRedirect = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <RegisterContainer>
      <RegisterCard>
        <RegisterTitle>Crear Cuenta</RegisterTitle>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <RegisterFormStyled onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="username">Nombre de usuario</Label>
            <Input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Contraseña</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </FormGroup>
          <RegisterButton type="submit" disabled={loading}>
            {loading ? 'Registrando...' : 'Registrarse'}
          </RegisterButton>
          <RegisterFooter>
            <FooterText>
              ¿Ya tienes una cuenta?{' '}
              <FooterLink onClick={handleLoginRedirect}>Iniciar Sesión</FooterLink>
            </FooterText>
          </RegisterFooter>
        </RegisterFormStyled>
      </RegisterCard>
    </RegisterContainer>
  );
};

export default Register;