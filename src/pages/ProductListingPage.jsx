import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import FilterGroup from '../components/FilterGroup';
import ProductListing from '../components/ProductListing';
import { productsList } from '../data/products';
import { useSearchParams } from 'react-router-dom';

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
    width: 100%;
  }
`;

const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const MobileFilterButton = styled.button`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background-color: var(--primary, #C92071);
    color: var(--white, #FFFFFF);
    border: none;
    border-radius: 4px;
    font-size: 20px;
    cursor: pointer;
    flex-shrink: 0;
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
    flex: 1;
    height: 60px;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .close-filter {
    display: none;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: var(--dark-gray, #1F1F1F);
  }

  hr {
    border: none;
    border-top: 1px solid var(--light-gray-2, #CCCCCC);
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: ${(props) => (props.$isOpen ? '0' : '-100%')};
    width: 80%;
    max-width: 300px;
    height: 100vh;
    z-index: 1000;
    box-shadow: 4px 0 15px rgba(0, 0, 0, 0.2);
    transition: left 0.3s ease-in-out;
    overflow-y: auto;

    .close-filter {
      display: block;
    }
  }
`;

const Overlay = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: ${(props) => (props.$isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
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
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search')?.toLowerCase() || '';

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

  const handleFilterChange = (setter) => (value, checked, inputType) => {
    if (inputType === 'radio') {
      setter(value);
    } else {
      setter((prev) =>
        checked ? [...prev, value] : prev.filter((item) => item !== value)
      );
    }
  };

  const processedProducts = useMemo(() => {
    let result = [...productsList];

    // 1. Filtro por Termo de Pesquisa (URL)
    if (searchQuery) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(searchQuery) ||
        p.category.toLowerCase().includes(searchQuery) ||
        (p.description && p.description.toLowerCase().includes(searchQuery))
      );
    }

    // 2. Filtro por Marca
    if (selectedBrands.length > 0) {
      result = result.filter((p) =>
        selectedBrands.some((b) => p.name.toLowerCase().includes(b.toLowerCase()))
      );
    }

    // 3. Ordenação por preço
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
  }, [selectedBrands, sortOrder, searchQuery]);

  return (
    <PageContainer>
      <HeaderSection>
        <h2>
          <strong>{searchQuery ? `Busca: "${searchQuery}"` : 'Resultados para "Tênis"'}</strong> - {processedProducts.length} produtos
        </h2>
        <ControlsWrapper>
          <OrderSelect
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="relevantes">Ordenar por: mais relevantes</option>
            <option value="menor">Ordenar por: menor preço</option>
            <option value="maior">Ordenar por: maior preço</option>
          </OrderSelect>

          <MobileFilterButton onClick={() => setIsFilterOpen(true)}>
            <i className="pi pi-filter" />
          </MobileFilterButton>
        </ControlsWrapper>
      </HeaderSection>

      <Overlay $isOpen={isFilterOpen} onClick={() => setIsFilterOpen(false)} />

      <ContentLayout>
        <Sidebar $isOpen={isFilterOpen}>
          <div className="filter-title">
            Filtrar por
            <button className="close-filter" onClick={() => setIsFilterOpen(false)}>✕</button>
          </div>
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