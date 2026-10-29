import React from 'react';
import styled from 'styled-components';

import AirJordanNikeToe from '../assets/AirJordanNikeToe.png';

const Container = styled.section`
  display: flex;
  align-items: center;
  gap: 60px;
  padding: 60px 100px;
  background-color: var(--white, #FFFFFF);
  margin-top: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px 20px;
    gap: 30px;
  }
`;

const ImageBox = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Círculo com gradiente de fundo conforme o Figma */
  &::before {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    background: linear-gradient(180deg, rgba(66, 0, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%);
    border-radius: 50%;

    @media (max-width: 768px) {
      width: 250px;
      height: 250px;
    }
  }

  img {
    position: relative;
    max-width: 100%;
    max-height: 380px;
    object-fit: contain;
    z-index: 1;
  }
`;

const DetailsBox = styled.div`
  flex: 1;

  .tag {
    color: var(--primary, #C92071);
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 48px;
    color: var(--dark-gray-2, #474747);
    line-height: 52px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 28px;
      line-height: 32px;
    }
  }

  p {
    font-size: 16px;
    color: var(--dark-gray-2, #474747);
    line-height: 28px;
    margin-bottom: 30px;
  }

  button {
    padding: 12px 40px;
    background-color: var(--primary, #C92071);
    color: var(--white, #FFFFFF);
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }
`;

const SpecialOffer = () => {
  return (
    <Container>
      <ImageBox>
        <img src={AirJordanNikeToe} alt="Air Jordan Nike Toe - Edição Especial" />
      </ImageBox>
      <DetailsBox>
        <div className="tag">Oferta especial</div>
        <h2>Air Jordan Nike Toe Edição de Colecionador</h2>
        <p>
          Conforto e estilo lendários com materiais premium e design exclusivo para colecionadores exigentes.
        </p>
        <button>Ver Oferta</button>
      </DetailsBox>
    </Container>
  );
};

export default SpecialOffer;