import styled from 'styled-components';
import Title from '../Title';
import Popular from './Popular';
import Tags from './Tags';
import Image from './Image';
import React from 'react';

const ContainerGallery = styled.div`
  display: flex;
  gap: 24px;
`;

const FluidSection = styled.section`
  flex-grow: 1;
`;


const ImagesContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;

interface PhotosProps{
  id: number;
}

const Gallery = ({ fotos = [], aoFotoSelecionada, aoAlternarFavorito }) => {
  return (
    <>
      <Tags />
      <ContainerGallery>
        <FluidSection>
          <Title>Navegue pela galeria</Title>
          <ImagesContainer>
            {fotos.map((foto: PhotosProps) => (
              <Image
                aoZoomSolicitado={aoFotoSelecionada}
                aoAlternarFavorito={aoAlternarFavorito}
                key={foto.id}
                foto={foto}
              />
            ))}
          </ImagesContainer>
        </FluidSection>
        <Popular />
      </ContainerGallery>
    </>
  );
};

export default Gallery;
