import { styled } from 'styled-components';
import TextField from '../TextField';
import React from 'react';

const HeaderEstilizado = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 212px;
  }
`;

const HeaderR = () => {
  return (
    <HeaderEstilizado>
      <img src="imagens/logo.png" />
      <TextField />
    </HeaderEstilizado>
  );
};

export default HeaderR;
