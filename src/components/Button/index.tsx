import React from 'react';
import { Container, ButtonText } from './styles';

/* Esse children, no caso é o Texto dentro do botão. */
const Button: React.FC = ({ children }) => (
  <Container>
    <ButtonText>{children}</ButtonText>
  </Container>
);

export default Button;
