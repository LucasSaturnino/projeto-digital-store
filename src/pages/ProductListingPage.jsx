import React, { useState } from 'react';
import FilterGroup from '../components/FilterGroup';
import ProductListing from '../components/ProductListing';
import styled from 'styled-components';

const Container = styled.div`
  padding: 40px 100px;
  background-color: var(--light-gray-3, #F5F5F5);

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ContentLayout = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;
`;

const Sidebar = styled.aside`
  width: 308px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    display: none; /* No mobile, o filtro pode ser colapsável */
  }
`;

const FilterCard = styled.div`
  background-color: var(--white, #FFFFFF);
  padding: 30px;
  border-radius: 4px;

  h3 {
    font-size: 16px;
    color: var(--dark-gray-2, #474747);
    margin-bottom: 15px;
  }

  hr {
    border: none;
    border-top: 1px solid var(--light-gray-2, #CCCCCC);
    margin-bottom: 20px;
  }
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  .results-count {
    font-size: 16px;
    font-weight: bold;
    color: var(--dark-gray-2, #474747);
  }

  .sort-select {
    height: 60px;
    padding: 0 15px;
    border: 1px solid var(--dark-gray-2, #474747);
    border-radius: 4px;
    font-size: 16px;
    color: var(--dark-gray-2, #474747);
    background-color: transparent;
    cursor: pointer;
  }
`;

const MainContent = styled.section`
  flex: 1;
`;

// Dados simulados de produtos
const sampleProducts = [
  {
    id: 1,
    name: 'K-Swiss V8 - Masculino',
    image: '[suspicious link removed]',
    price: 200,
    priceDiscount: 100
  },
  {
    id: 2,
    name: 'K-Swiss V8 - Masculino',
    image: '[suspicious link removed]',
    price: 200,
    priceDiscount: 100
  },
  {
    id: 3,
    name: 'K-Swiss V8 - Masculino',
    image: '[suspicious link removed]',
    price: 200,
    priceDiscount: 100
  },
  {
    id: 4,
    name: 'K-Swiss V8 - Masculino',
    image: '[suspicious link removed]',
    price: 200,
    priceDiscount: 100
  },
  {
    id: 5,
    name: 'K-Swiss V8 - Masculino',
    image: '[suspicious link removed]',
    price: 200,
    priceDiscount: 100
  },
  {
    id: 6,
    name: 'K-Swiss V8 - Masculino',
    image: '[suspicious link removed]',
    price: 200,
    priceDiscount: 100
  }
];

const ProductListingPage = () => {
  const [sortOrder, setSortOrder] = useState('relevant');

  return (
    <Container>
      <TopBar>
        <div className="results-count">
          Resultados para "Tênis" - {sampleProducts.length} produtos
        </div>
        <select
          className="sort-select"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="relevant">Ordenar por: mais relevantes</option>
          <option value="lowest">Ordenar por: Menor preço</option>
          <option value="highest">Ordenar por: Maior preço</option>
        </select>
      </TopBar>

      <ContentLayout>
        <Sidebar>
          <FilterCard>
            <h3>Filtrar por</h3>
            <hr />

            <FilterGroup
              title="Marca"
              inputType="checkbox"
              options={[
                { text: 'Adidas', value: 'adidas' },
                { text: 'Calenciaga', value: 'calenciaga' },
                { text: 'K-Swiss', value: 'kswiss' },
                { text: 'Nike', value: 'nike' },
                { text: 'Puma', value: 'puma' }
              ]}
            />

            <FilterGroup
              title="Categoria"
              inputType="checkbox"
              options={[
                { text: 'Esporte e lazer', value: 'esporte' },
                { text: 'Casual', value: 'casual' },
                { text: 'Utilitário', value: 'utilitario' },
                { text: 'Corrida', value: 'corrida' }
              ]}
            />

            <FilterGroup
              title="Gênero"
              inputType="checkbox"
              options={[
                { text: 'Masculino', value: 'masculino' },
                { text: 'Feminino', value: 'feminino' },
                { text: 'Unissex', value: 'unissex' }
              ]}
            />

            <FilterGroup
              title="Estado"
              inputType="radio"
              options={[
                { text: 'Novo', value: 'novo' },
                { text: 'Usado', value: 'usado' }
              ]}
            />
          </FilterCard>
        </Sidebar>

        <MainContent>
          <ProductListing products={sampleProducts} />
        </MainContent>
      </ContentLayout>
    </Container>
  );
};

export default ProductListingPage;