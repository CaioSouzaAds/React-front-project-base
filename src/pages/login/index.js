import React from 'react';
import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
  return (
    <Container>
      <Title>
        Login
        <small>Oi</small>
      </Title>
      <Paragrafo>Teste 123 continue</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
