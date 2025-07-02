import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginStart, loginSuccess, loginFailure } from '../../redux/authSlice';
import { 
  ErrorMessage, FormGroup, Label, LoginCard, LoginContainer, LoginFormStyled,
  Input, LoginButton, LoginFooter,FooterLink,FooterText,LoginTitle 
} from './style';

const Login = () => {
  const { users, loading, error } = useSelector((state) => state.auth);
  const [formData, setFormData] = React.useState({
    username: '',
    password: ''
  });



  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.username || !formData.password) {
      dispatch(loginFailure('Por favor completa todos los campos'));
      return;
    }

    dispatch(loginStart());
    

    if (formData.password.length < 6) {
      dispatch(loginFailure('La contraseña debe tener al menos 6 caracteres'));
      return;
    }
    

    const userExists = users.find(
      user => user.username === formData.username && user.password === formData.password
    );

    if (userExists || (formData.username === 'admin' && formData.password === 'admin123')) {
      dispatch(loginSuccess({
        username: formData.username,
        name: userExists?.name || 'Administrador',
        role: userExists?.role || 'admin'
      }));
      navigate('/store');
    } else {
      dispatch(loginFailure('Usuario o contraseña incorrectos'));
    }
  };

  return (
    <LoginContainer>
      <LoginCard>
        <LoginTitle>Iniciar Sesión</LoginTitle>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <LoginFormStyled onSubmit={handleSubmit}>
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
              autoComplete="username"
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
              autoComplete="current-password"
            />
          </FormGroup>
          <LoginButton type="submit" disabled={loading}>
            {loading ? 'Cargando...' : 'Ingresar'}
          </LoginButton>
          <LoginFooter>
            <FooterText>¿No tienes una cuenta?{' '}
              <FooterLink onClick={() => navigate('/register')}>Regístrate</FooterLink>
            </FooterText>
            <FooterText>
             
            </FooterText>
          </LoginFooter>
        </LoginFormStyled>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;