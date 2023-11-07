import styled from 'styled-components';
import Title from '../../Title';
import fotos from './fotos-populares.json';
import React from 'react';

const PhotosColumn = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Image = styled.img`
  max-width: 212px;
  border-radius: 20px;
`;

const Button = styled.button`
  background-color: transparent;
  color: #fff;
  border: 2px solid;
  border-color: #c98cf1;
  padding: 12px 20px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  margin-top: 16px;
`;

const Popular = () => {
  return (
    <section>
      <Title $alignment="center">Populares</Title>
      <PhotosColumn>
        {fotos.map((foto) => (
          <Image key={foto.id} src={foto.path} alt={foto.alt} />
        ))}
      </PhotosColumn>
      <Button>Ver mais</Button>
    </section>
  );
};

export default Popular;
