import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import FilterGroup from '../components/FilterGroup';
import ProductListing from '../components/ProductListing';
import { productsList } from '../data/products';

const PageContainer = styled.div`
  padding: 40px 100px;
  background-color: var(--light-gray-3, #F9F8FE);

  @media (max-width: 768px) {
    padding: 20px 16px;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  h2 {
    font-size: 16px;
    color: var(--dark-gray-2, #474747);
    font-weight: normal;

    strong {
      color: var(--dark-gray, #1F1F1F);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
`;

const OrderSelect = styled.select`
  height: 60px;
  padding: 0 20px;
  border: 1px solid var(--dark-gray-2, #474747);
  border-radius: 4px;
  font-size: 16px;
  color: var(--dark-gray-2, #474747);
  background-color: var(--white, #FFFFFF);
  cursor: pointer;
  outline: none;

  &:focus {
    border-color: var(--primary, #C92071);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ContentLayout = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.aside`
  width: 308px;
  background-color: var(--white, #FFFFFF);
  border-radius: 4px;
  padding: 30px;
  height: fit-content;
  flex-shrink: 0;

  .filter-title {
    font-size: 16px;
    font-weight: bold;
    color: var(--dark-gray-2, #474747);
    margin-bottom: 15px;
  }

  hr {
    border: none;
    border-top: 1px solid var(--light-gray-2, #CCCCCC);
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProductGridArea = styled.div`
  flex: 1;
`;

const ProductListingPage = () => {
  const [sortOrder, setSortOrder] = useState('relevantes');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [selectedState, setSelectedState] = useState('');

  // Opções de filtro especificadas no protótipo do Figma
  const brandOptions = [
    { text: 'Adidas', value: 'Adidas' },
    { text: 'Calenciaga', value: 'Calenciaga' },
    { text: 'K-Swiss', value: 'K-Swiss' },
    { text: 'Nike', value: 'Nike' },
    { text: 'Puma', value: 'Puma' },
  ];

  const categoryOptions = [
    { text: 'Esporte e lazer', value: 'Esporte e lazer' },
    { text: 'Casual', value: 'Casual' },
    { text: 'Utilitário', value: 'Utilitário' },
    { text: 'Corrida', value: 'Corrida' },
  ];

  const genderOptions = [
    { text: 'Masculino', value: 'Masculino' },
    { text: 'Feminino', value: 'Feminino' },
    { text: 'Unissex', value: 'Unissex' },
  ];

  const stateOptions = [
    { text: 'Novo', value: 'Novo' },
    { text: 'Usado', value: 'Usado' },
  ];

  // Manipulador genérico para checkbox e radio
  const handleFilterChange = (setter) => (value, checked, inputType) => {
    if (inputType === 'radio') {
      setter(value);
    } else {
      setter((prev) =>
        checked ? [...prev, value] : prev.filter((item) => item !== value)
      );
    }
  };

  // Filtragem e Ordenação dinâmica da lista de produtos
  const processedProducts = useMemo(() => {
    let result = [...productsList];

    // 1. Filtro por Marca
    if (selectedBrands.length > 0) {
      result = result.filter((p) =>
        selectedBrands.some((b) => p.name.toLowerCase().includes(b.toLowerCase()))
      );
    }

    // 2. Ordenação por preço
    if (sortOrder === 'menor') {
      result.sort(
        (a, b) => (a.priceDiscount || a.price) - (b.priceDiscount || b.price)
      );
    } else if (sortOrder === 'maior') {
      result.sort(
        (a, b) => (b.priceDiscount || b.price) - (a.priceDiscount || a.price)
      );
    }

    return result;
  }, [selectedBrands, sortOrder]);

  return (
    <PageContainer>
      <HeaderSection>
        <h2>
          <strong>Resultados para "Tênis"</strong> - {processedProducts.length} produtos
        </h2>
        <OrderSelect
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="relevantes">Ordenar por: mais relevantes</option>
          <option value="menor">Ordenar por: menor preço</option>
          <option value="maior">Ordenar por: maior preço</option>
        </OrderSelect>
      </HeaderSection>

      <ContentLayout>
        <Sidebar>
          <div className="filter-title">Filtrar por</div>
          <hr />

          <FilterGroup
            title="Marca"
            inputType="checkbox"
            options={brandOptions}
            selectedValues={selectedBrands}
            onChange={handleFilterChange(setSelectedBrands)}
          />

          <FilterGroup
            title="Categoria"
            inputType="checkbox"
            options={categoryOptions}
            selectedValues={selectedCategories}
            onChange={handleFilterChange(setSelectedCategories)}
          />

          <FilterGroup
            title="Gênero"
            inputType="checkbox"
            options={genderOptions}
            selectedValues={selectedGenders}
            onChange={handleFilterChange(setSelectedGenders)}
          />

          <FilterGroup
            title="Estado"
            inputType="radio"
            options={stateOptions}
            selectedValues={selectedState}
            onChange={handleFilterChange(setSelectedState)}
          />
        </Sidebar>

        <ProductGridArea>
          <ProductListing products={processedProducts} />
        </ProductGridArea>
      </ContentLayout>
    </PageContainer>
  );
};

export default ProductListingPage;