import React, { useState } from 'react';
import styled from 'styled-components';
import Gallery from '../components/Gallery';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';

import NikeAirMaxSneakersRunning from '../assets/NikeAirMaxSneakersRunning.png';
import NikeAirMaxRed from '../assets/NikeAirMaxRed.png';
import TenisNikeAirMax from '../assets/TenisNikeAirMax.png';
import AirJordanNikeToe from '../assets/AirJordanNikeToe.png';
import AdidasSuperstar from '../assets/AdidasSuperstar.png';
import KSwissSneakersTennis from '../assets/K-SwissSneakersTennis.png';
import ChuckTaylorAllStars from '../assets/ChuckTaylorAll-Stars.png';
import NewBalanceShoe from '../assets/NewBalanceShoe.png';

const PageContainer = styled.div`
  padding: 40px 100px;
  background-color: var(--light-gray-3, #F9F8FE);

  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`;

const Breadcrumb = styled.nav`
  font-size: 14px;
  color: var(--dark-gray-2, #474747);
  margin-bottom: 30px;

  span.active {
    font-weight: bold;
    color: var(--dark-gray-2, #474747);
  }

  a {
    color: var(--dark-gray-2, #474747);
    text-decoration: none;
    &:hover {
      color: var(--primary, #C92071);
    }
  }
`;

const ProductDetailsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 80px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const InfoBox = styled.div`
  h1 {
    font-size: 32px;
    color: var(--dark-gray, #1F1F1F);
    margin-bottom: 10px;
    line-height: 38px;
  }

  .reference {
    font-size: 12px;
    color: var(--light-gray-2, #8F8F8F);
    margin-bottom: 15px;
  }

  .rating-box {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;

    .stars {
      background-color: var(--warning, #F6AA1C);
      color: var(--white, #FFFFFF);
      padding: 4px 10px;
      border-radius: 4px;
      font-weight: bold;
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .reviews {
      font-size: 14px;
      color: var(--light-gray-2, #8F8F8F);
    }
  }

  .price-box {
    display: flex;
    align-items: baseline;
    gap: 10px;
    margin-bottom: 20px;

    .currency {
      font-size: 16px;
      color: var(--dark-gray-2, #474747);
      font-weight: bold;
    }

    .current-price {
      font-size: 32px;
      font-weight: bold;
      color: var(--dark-gray-2, #474747);
    }

    .old-price {
      font-size: 16px;
      color: var(--light-gray-2, #CCCCCC);
      text-decoration: line-through;
    }
  }

  .description {
    font-size: 14px;
    color: var(--dark-gray-2, #474747);
    line-height: 22px;
    margin-bottom: 30px;
  }
`;

const OptionSection = styled.div`
  margin-bottom: 25px;

  label {
    display: block;
    font-size: 14px;
    font-weight: bold;
    color: var(--light-gray-2, #8F8F8F);
    margin-bottom: 10px;
  }
`;

const SizeGrid = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const SizeButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 4px;
  border: 1px solid ${(props) => (props.$active ? 'var(--primary, #C92071)' : 'var(--light-gray, #CCCCCC)')};
  background-color: ${(props) => (props.$active ? 'var(--primary, #C92071)' : 'var(--white, #FFFFFF)')};
  color: ${(props) => (props.$active ? 'var(--white, #FFFFFF)' : 'var(--dark-gray-2, #474747)')};
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--primary, #C92071);
  }
`;

const ColorGrid = styled.div`
  display: flex;
  gap: 12px;
`;

const ColorButton = styled.button`
  width: 31px;
  height: 31px;
  border-radius: 50%;
  border: 2px solid ${(props) => (props.$active ? 'var(--primary, #C92071)' : 'transparent')};
  background-color: ${(props) => props.$color};
  cursor: pointer;
  padding: 2px;
  box-sizing: border-box;

  &:hover {
    transform: scale(1.1);
  }
`;

const BuyButton = styled.button`
  width: 100%;
  max-width: 340px;
  height: 48px;
  background-color: var(--warning, #F6AA1C);
  color: var(--white, #FFFFFF);
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.75px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #E09612;
  }
`;

const ProductViewPage = () => {
  const [selectedSize, setSelectedSize] = useState('39');
  const [selectedColor, setSelectedColor] = useState('#6FEEFF');

  // Fotos para a galeria do produto principal
  const galleryImages = [
    NikeAirMaxSneakersRunning,
    NikeAirMaxRed,
    TenisNikeAirMax,
    AirJordanNikeToe,
    AdidasSuperstar
  ];

  const galleryBgColors = ['#E2E8F0', '#FFE8E8', '#EAF6FF', '#FFEAE0', '#F5F5F5'];

  const sizes = ['39', '40', '41', '42', '43'];

  const colors = [
    { name: 'Azul Claro', hex: '#6FEEFF' },
    { name: 'Rosa/Vermelho', hex: '#FF6969' },
    { name: 'Cinza Escuro', hex: '#5E5E5E' },
    { name: 'Roxo', hex: '#6D5200' }
  ];

  const recommendedProducts = [
    { id: 1, name: 'K-Swiss Sneakers Tennis', category: 'Tênis', image: KSwissSneakersTennis, price: 200, priceDiscount: 100 },
    { id: 2, name: 'Adidas Superstar', category: 'Tênis', image: AdidasSuperstar, price: 300, priceDiscount: 210 },
    { id: 3, name: 'Chuck Taylor All-Stars', category: 'Tênis', image: ChuckTaylorAllStars, price: 250, priceDiscount: 180 },
    { id: 4, name: 'New Balance Shoe', category: 'Tênis', image: NewBalanceShoe, price: 350, priceDiscount: 240 }
  ];

  return (
    <PageContainer>
      {/* Navegação Breadcrumb */}
      <Breadcrumb>
        <a href="/">Home</a> / <a href="/produtos">Produtos</a> / <a href="/produtos?categoria=tenis">Tênis</a> / <a href="/produtos?marca=nike">Nike</a> / <span className="active">Nike Air Max Sneakers Running</span>
      </Breadcrumb>

      <ProductDetailsGrid>
        {/* Lado Esquerdo: Galeria com Miniaturas */}
        <Gallery images={galleryImages} bgColors={galleryBgColors} />

        {/* Lado Direito: Informações e Opções do Produto */}
        <InfoBox>
          <h1>Nike Air Max Sneakers Running</h1>
          <div className="reference">Casual | Nike | REF:38416711</div>

          <div className="rating-box">
            <span className="stars">
              4.7 <i className="pi pi-star-fill" style={{ fontSize: '12px' }} />
            </span>
            <span className="reviews">(90 avaliações)</span>
          </div>

          <div className="price-box">
            <span className="currency">R$</span>
            <span className="current-price">299,00</span>
            <span className="old-price">R$ 400,00</span>
          </div>

          <div className="description">
            Descrição do produto: Tênis Nike Air Max de alta performance e máximo conforto para corrida e uso casual no dia a dia. Cabedal em mesh respirável e amortecimento Air Max clássico.
          </div>

          {/* Seleção de Tamanho */}
          <OptionSection>
            <label>Tamanho</label>
            <SizeGrid>
              {sizes.map((size) => (
                <SizeButton
                  key={size}
                  $active={selectedSize === size}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </SizeButton>
              ))}
            </SizeGrid>
          </OptionSection>

          {/* Seleção de Cor */}
          <OptionSection>
            <label>Cor</label>
            <ColorGrid>
              {colors.map((color) => (
                <ColorButton
                  key={color.hex}
                  $color={color.hex}
                  $active={selectedColor === color.hex}
                  onClick={() => setSelectedColor(color.hex)}
                  title={color.name}
                />
              ))}
            </ColorGrid>
          </OptionSection>

          {/* Botão de Comprar */}
          <BuyButton>Comprar</BuyButton>
        </InfoBox>
      </ProductDetailsGrid>

      {/* Seção de Produtos Recomendados */}
      <Section title="Produtos recomendados" link={{ text: 'Ver todos →', href: '/produtos' }}>
        <ProductListing products={recommendedProducts} />
      </Section>
    </PageContainer>
  );
};

export default ProductViewPage;