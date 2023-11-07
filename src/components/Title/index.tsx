import styled from 'styled-components';

interface TitleProps {
  $alignment: string
}

const Title = styled.h2<TitleProps>`
  color: #7b70e6;
  font-size: 32px;
  text-align: ${(props) => (props.$alignment ? props.$alignment : 'left')};
`;

export default Title;
