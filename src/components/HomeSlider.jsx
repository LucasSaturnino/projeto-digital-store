import React, { useState } from 'react';
import styled from 'styled-components';

const BannerContainer = styled.section`
  background-color: var(--light-gray-3, #F5F5F5);
  padding: 60px 100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 480px;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 30px 16px 50px;
    min-height: auto;
    text-align: left;
  }
`;

const ContentBox = styled.div`
  max-width: 520px;
  z-index: 2;

  .badge {
    color: var(--warning, #F6AA1C);
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 0.75px;
    margin-bottom: 12px;
    display: inline-block;
  }

  h1 {
    font-size: 48px;
    color: var(--dark-gray, #1F1F1F);
    line-height: 54px;
    margin-bottom: 20px;
    font-weight: 800;

    @media (max-width: 768px) {
      font-size: 32px;
      line-height: 38px;
    }
  }

  p {
    font-size: 16px;
    color: var(--dark-gray-2, #474747);
    line-height: 28px;
    margin-bottom: 30px;
  }

  button {
    background-color: var(--primary, #C92071);
    color: var(--white, #FFFFFF);
    border: none;
    padding: 12px 40px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #991956;
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

const ImageBox = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 360px;
    object-fit: contain;
    z-index: 2;

    @media (max-width: 768px) {
      max-height: 240px;
      margin-bottom: 20px;
    }
  }
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 3;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => (props.$active ? 'var(--primary, #C92071)' : 'var(--light-gray-2, #CCCCCC)')};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--primary, #C92071);
  }
`;

const HomeSlider = ({ slides = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!slides || slides.length === 0) return null;

  const slide = slides[currentSlide];

  return (
    <BannerContainer>
      <ContentBox>
        <span className="badge">{slide.badge || 'Melhores ofertas personalizadas'}</span>
        <h1>{slide.title}</h1>
        <p>{slide.description}</p>
        <button>{slide.buttonText || 'Ver Ofertas'}</button>
      </ContentBox>

      <ImageBox>
        <img src={slide.image} alt={slide.title} />
      </ImageBox>

      <DotsContainer>
        {slides.map((_, index) => (
          <Dot
            key={index}
            $active={currentSlide === index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Ir para o slide ${index + 1}`}
          />
        ))}
      </DotsContainer>
    </BannerContainer>
  );
};

export default HomeSlider;