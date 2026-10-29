import React from 'react';
import styled from 'styled-components';
import HomeSlider from '../components/HomeSlider';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import SpecialOffer from '../components/SpecialOffer';

// Importação das imagens do projeto (pasta src/assets)
import collection1 from '../assets/collection-1.png';
import collection2 from '../assets/collection-2.png';
import collection3 from '../assets/collection-3.png';
import TenisNikeemPassoDinamico from '../assets/TenisNikeemPassoDinamico.png';
import LifestanceEsporte from '../assets/LifestanceEsporte.png';

// Importação do catálogo central de produtos
import { productsList } from '../data/products';

// Banners do Carrossel Principal
const homeSlides = [
  {
    badge: 'Melhores ofertas personalizadas',
    title: 'Queima de estoque Nike 🔥',
    description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
    buttonText: 'Ver Ofertas',
    image: TenisNikeemPassoDinamico,
  },
  {
    badge: 'Oferta especial',
    title: 'Lifestance Esporte 🔥',
    description: 'Aproveite o máximo do desempenho esportivo com estilo incomparável e conforto supremo.',
    buttonText: 'Ver Ofertas',
    image: LifestanceEsporte,
  },
];

const MainContent = styled.div`
  padding: 40px 100px;

  @media (max-width: 768px) {
    padding: 20px 16px; /* Ajuste para o mobile ocupar a largura total com margem de 16px */
  }
`;

const CollectionsGrid = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const CollectionCard = styled.div`
  flex: 1;
  position: relative;
  background-color: #D8E3F2;
  border-radius: 8px;
  padding: 30px;
  overflow: hidden;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .card-content {
    position: relative;
    z-index: 2;
    max-width: 60%;
  }

  .discount-badge {
    background-color: #E7FF86;
    color: var(--dark-gray-2, #474747);
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: bold;
    display: inline-block;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 28px;
    color: var(--dark-gray, #1F1F1F);
    margin-bottom: 20px;
    line-height: 34px;

    @media (max-width: 768px) {
      font-size: 22px;
      line-height: 26px;
    }
  }

  button {
    background-color: var(--light-gray-3, #F5F5F5);
    color: var(--primary, #C92071);
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
  }

  img {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 100%;
    max-width: 100%;
    object-fit: contain;
    object-position: right bottom;
    z-index: 1;
    pointer-events: none;
  }
`;

const HomePage = () => {
  return (
    <div>
      {/* 1. Carrossel Principal com "Queima de estoque Nike" */}
      <HomeSlider slides={homeSlides} />

      <MainContent>
        {/* 2. Coleções em Destaque (SEM "Ver todos") */}
        <Section title="Coleções em destaque">
          <CollectionsGrid>
            <CollectionCard>
              <div className="card-content">
                <span className="discount-badge">30% OFF</span>
                <h3>Novo drop Supreme</h3>
                <button>Comprar</button>
              </div>
              <img src={collection1} alt="Coleção Supreme" />
            </CollectionCard>

            <CollectionCard style={{ backgroundColor: '#E4E0E7' }}>
              <div className="card-content">
                <span className="discount-badge">30% OFF</span>
                <h3>Coleção Adidas</h3>
                <button>Comprar</button>
              </div>
              <img src={collection2} alt="Coleção Adidas" />
            </CollectionCard>

            <CollectionCard style={{ backgroundColor: '#E0ECEC' }}>
              <div className="card-content">
                <span className="discount-badge">30% OFF</span>
                <h3>Novo Beats Bass</h3>
                <button>Comprar</button>
              </div>
              <img src={collection3} alt="Coleção Beats" />
            </CollectionCard>
          </CollectionsGrid>
        </Section>

        {/* 3. Produtos em Alta */}
        <Section
          title="Produtos em alta"
          link={{ text: 'Ver todos →', href: '/produtos' }}
        >
          <ProductListing products={productsList} />
        </Section>
      </MainContent>

      {/* 4. Banner Oferta Especial */}
      <SpecialOffer />
    </div>
  );
};

export default HomePage;