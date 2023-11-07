import styled from 'styled-components';
import tags from './tags.json';

const CampoTags = styled.section`
  display: flex;
  align-items: center;
  margin: 56px 10px 39px 0;
`;

const TituloEstilizado = styled.p`
  font-size: 24px;
  color: ${'#D9D9D9'};
  margin-right: 40px;
  font-family: 'GandhiSansRegular';
`;

const TagsEstilizadas = styled.button`
  font-family: 'GandhiSansRegular';
  font-size: 24px;
  font-weight: 400;
  color: ${'#FFF'};
  background: rgba(217, 217, 217, 0.3);
  border-radius: 5px;
  padding: 12;
  margin-right: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #c98cf1;
  }
`;

const Tags = () => {
  return (
    <CampoTags>
      <TituloEstilizado>Busque por tags:</TituloEstilizado>
      {tags.map((tag) => (
        <TagsEstilizadas key={tag.id}>{tag.titulo}</TagsEstilizadas>
      ))}
    </CampoTags>
  );
};

export default Tags;
