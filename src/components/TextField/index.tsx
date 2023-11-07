import { styled } from 'styled-components';
import React from 'react';

const StylizedContainer = styled.div`
  position: relative;
  display: inline-block;
`;

interface StylizedTextFieldProps {
  props: string
}

const StylizedTextField = styled.input<StylizedTextFieldProps>`
  height: 56px;
  padding: 12px 16px;
  border-radius: 10px;
  border: 2px solid;
  border-color: #c98cf1;
  background: transparent;
  box-sizing: border-box;
  width: 566px;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
`;



const MagnifierIcon = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
`;

const TextField = (props) => {
  return (
    <StylizedContainer>
      <StylizedTextField placeholder="O que você procura?" {...props} />
      <MagnifierIcon src={'../public/imagens/search.png'} alt="Ícone de lupa" />
    </StylizedContainer>
  );
};

export default TextField;
