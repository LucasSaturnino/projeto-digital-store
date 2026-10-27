import React from 'react';
import ProductCard from './ProductCard';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const ProductListing = ({ products = [] }) => {
  return (
    <Grid>
      {products.map((prod, index) => (
        <ProductCard
          key={prod.id || index}
          image={prod.image}
          name={prod.name}
          price={prod.price}
          priceDiscount={prod.priceDiscount}
        />
      ))}
    </Grid>
  );
};

export default ProductListing;