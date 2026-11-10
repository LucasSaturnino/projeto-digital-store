import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Gallery from '../components/Gallery';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import BuyBox from '../components/BuyBox';
import ProductOptions from '../components/ProductOptions';
import { productsList } from '../data/products';
import { useCart } from '../contexts/CartContext';

const PageContainer = styled.div`
  padding: 40px 100px;
  background-color: var(--light-gray-3, #F9F8FE);

  @media (max-width: 768px) {
    padding: 20px 16px;
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

const ProductViewPage = () => {
  const { id } = useParams();

  const product = productsList.find((p) => String(p.id) === String(id)) || productsList[0];

  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '39');
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '#6FEEFF');

  const { addToCart } = useCart();

  const handleBuyClick = () => {
    addToCart(product, selectedSize, selectedColor, 1);
  };

  const galleryImages = product.images && product.images.length > 0
    ? product.images
    : [product.image];

  return (
    <PageContainer>
      <Breadcrumb>
        <a href="/">Home</a> / <a href="/produtos">Produtos</a> / <span className="active">{product.name}</span>
      </Breadcrumb>

      <ProductDetailsGrid>
        <Gallery 
          images={galleryImages} 
          showThumbs 
          width="700px" 
          height="570px" 
          radius="4px" 
        />

        <BuyBox
          name={product.name}
          reference={product.reference}
          stars={product.stars}
          rating={product.rating}
          price={product.price}
          priceDiscount={product.priceDiscount}
          description={product.description}
          onBuyClick={handleBuyClick}
        >
          {product.sizes && (
            <ProductOptions
              title="Tamanho"
              options={product.sizes}
              shape="square"
              type="text"
              selectedValue={selectedSize}
              onChange={setSelectedSize}
            />
          )}

          {product.colors && (
            <ProductOptions
              title="Cor"
              options={product.colors}
              shape="circle"
              type="color"
              selectedValue={selectedColor}
              onChange={setSelectedColor}
            />
          )}
        </BuyBox>
      </ProductDetailsGrid>

      <Section title="Produtos recomendados" link={{ text: 'Ver todos →', href: '/produtos' }}>
        <ProductListing products={productsList.slice(0, 4)} />
      </Section>
    </PageContainer>
  );
};

export default ProductViewPage;