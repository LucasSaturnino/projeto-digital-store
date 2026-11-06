import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled(Link)`
  position: relative;
  background-color: var(--white, #FFFFFF);
  border-radius: 8px;
  padding: 12px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);

  .discount-badge {
    position: absolute;
    top: 24px;
    left: 24px;
    background-color: var(--primary-light, #E7FF86);
    color: var(--dark-gray, #1F1F1F);
    font-size: 12px;
    font-weight: bold;
    padding: 4px 12px;
    border-radius: 29px;
    z-index: 2;
  }

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

  .name {
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

const ProductCard = ({ id, image, name, price, priceDiscount }) => {
  return (
    <Card to={`/product/${id}`}>
      {priceDiscount && <span className="discount-badge">30% OFF</span>}

      <div className="img-box">
        <img src={image} alt={name} />
      </div>
      <div className="name">{name}</div>
      <div className="price-box">
        {priceDiscount ? (
          <>
            <span className="old-price">R$ {price}</span>
            <span className="current-price">R$ {priceDiscount}</span>
          </>
        ) : (
          <span className="current-price">R$ {price}</span>
        )}
      </div>
    </Card>
  );
};

export default ProductCard;