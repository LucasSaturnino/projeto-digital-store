import React, { useState } from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 700px;
`;

const MainImageContainer = styled.div`
  width: 100%;
  height: 480px;
  background-color: ${(props) => props.$bgColor || '#E2E8F0'};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: background-color 0.3s ease;

  img {
    max-width: 85%;
    max-height: 85%;
    object-fit: contain;
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const ThumbnailsGrid = styled.div`
  display: flex;
  gap: 15px;
  overflow-x: auto;
  padding-bottom: 5px;

  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--light-gray, #CCCCCC);
    border-radius: 4px;
  }
`;

const ThumbnailBox = styled.div`
  width: 117px;
  height: 95px;
  border-radius: 8px;
  background-color: ${(props) => props.$bgColor || '#E2E8F0'};
  border: 2px solid ${(props) => (props.$selected ? 'var(--primary, #C92071)' : 'transparent')};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--primary, #C92071);
  }

  img {
    max-width: 80%;
    max-height: 80%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 70px;
  }
`;

const Gallery = ({ images = [], bgColors = [] }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <GalleryContainer>
      {/* Imagem Principal */}
      <MainImageContainer $bgColor={bgColors[selectedIndex] || '#E2E8F0'}>
        <img
          src={images[selectedIndex]}
          alt={`Visualização do Produto ${selectedIndex + 1}`}
        />
      </MainImageContainer>

      {/* Grade de Miniaturas */}
      <ThumbnailsGrid>
        {images.map((img, index) => (
          <ThumbnailBox
            key={index}
            $selected={selectedIndex === index}
            $bgColor={bgColors[index] || '#E2E8F0'}
            onClick={() => setSelectedIndex(index)}
          >
            <img src={img} alt={`Miniatura ${index + 1}`} />
          </ThumbnailBox>
        ))}
      </ThumbnailsGrid>
    </GalleryContainer>
  );
};

export default Gallery;