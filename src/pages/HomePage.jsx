import React from 'react';
import styled from 'styled-components';
import Gallery from '../components/Gallery';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import SpecialOffer from '../components/SpecialOffer';

// Importação das Coleções e Propaganda
import collection1 from '../assets/collection-1.png';
import collection2 from '../assets/collection-2.png';
import collection3 from '../assets/collection-3.png';
import LifestanceEsporte from '../assets/LifestanceEsporte.jpg';

// Importação do catálogo central de produtos
import { productsList } from '../data/products';

const homeSlides = [
  {
    badge: 'Melhores ofertas personalizadas',
    title: 'Lifestance Esporte 🔥',
    description: 'Aproveite o máximo do desempenho esporte com estilo incomparável.',
    image: LifestanceEsporte
  }
];

const CollectionsGrid = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CollectionCard = styled.div`
  flex: 1;
  position: relative;
  background-color: #D8E3F2;
  border-radius: 8px;
  padding: 30px;
  overflow: hidden;

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
    max-width: 180px;
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
    max-height: 180px;
    object-fit: contain;
  }
`;

const HomePage = () => {
  return (
    <div>
      {/* Banner de Destaque com Lifestance Esporte */}
      <Gallery slides={homeSlides} />

      <div style={{ padding: '40px 100px' }}>
        {/* Coleções em Destaque */}
        <Section title="Coleções em destaque">
          <CollectionsGrid>
            <CollectionCard>
              <span className="discount-badge">30% OFF</span>
              <h3>Novo drop Supreme</h3>
              <button>Comprar</button>
              <img src={collection1} alt="Coleção Supreme" />
            </CollectionCard>

            <CollectionCard style={{ backgroundColor: '#E4E0E7' }}>
              <span className="discount-badge">30% OFF</span>
              <h3>Coleção Adidas</h3>
              <button>Comprar</button>
              <img src={collection2} alt="Coleção Adidas" />
            </CollectionCard>

            <CollectionCard style={{ backgroundColor: '#E0ECEC' }}>
              <span className="discount-badge">30% OFF</span>
              <h3>Novo Beats Bass</h3>
              <button>Comprar</button>
              <img src={collection3} alt="Coleção Beats" />
            </CollectionCard>
          </CollectionsGrid>
        </Section>

        {/* Produtos em Alta */}
        <Section title="Produtos em alta" link={{ text: 'Ver todos →', href: '/produtos' }}>
          <ProductListing products={productsList} />
        </Section>
      </div>

      {/* Oferta Especial */}
      <SpecialOffer />
    </div>
  );
};

export default HomePage;