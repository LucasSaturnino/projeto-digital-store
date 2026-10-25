import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: var(--white, #FFFFFF);
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);

  .img-box {
    width: 100%;
    height: 321px;
    background-color: #E2E3FF;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }

  .title {
    font-size: 24px;
    color: var(--dark-gray-2, #474747);
    margin: 12px 0 8px 0;
  }

  .price-box {
    display: flex;
    align-items: center;
    gap: 10px;

    .old-price {
      font-size: 24px;
      color: var(--light-gray, #8F8F8F);
      text-decoration: line-through;
    }

    .current-price {
      font-size: 24px;
      font-weight: bold;
      color: var(--dark-gray, #1F1F1F);
    }
  }
`;

const ProductCard = ({ name, image, price, priceDiscount }) => {
  return (
    <Card>
      <div className="img-box">
        <img src={image} alt={name} />
      </div>
      <div className="title">{name}</div>
      <div className="price-box">
        {priceDiscount ? (
          <>
            <span className="old-price">${price}</span>
            <span className="current-price">${priceDiscount}</span>
          </>
        ) : (
          <span className="current-price">${price}</span>
        )}
      </div>
    </Card>
  );
};

export default ProductCard;