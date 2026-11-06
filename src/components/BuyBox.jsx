import React from 'react';

import styled from 'styled-components';

import starIcon from '../assets/star-icon.svg'; // Ou SVG inline/ícone equivalente



const Container = styled.div`

  display: flex;

  flex-direction: column;

  max-width: 480px;

  width: 100%;

`;



const ProductName = styled.h1`

  font-size: 32px;

  font-weight: bold;

  color: var(--dark-gray, #1F1F1F);

  line-height: 38px;

  margin-bottom: 8px;

`;



const ProductReference = styled.p`

  font-size: 12px;

  color: var(--dark-gray-3, #666666);

  margin-bottom: 12px;

`;



const RatingContainer = styled.div`

  display: flex;

  align-items: center;

  gap: 10px;

  margin-bottom: 20px;

`;



const StarsBadge = styled.div`

  display: inline-flex;

  align-items: center;

  gap: 4px;

  background-color: var(--warning, #F6AA1C);

  color: var(--white, #FFFFFF);

  font-size: 14px;

  font-weight: bold;

  padding: 4px 8px;

  border-radius: 4px;



  img {

    width: 14px;

    height: 14px;

  }

`;



const RatingText = styled.span`

  font-size: 14px;

  color: var(--light-gray, #8F8F8F);

`;



const PriceContainer = styled.div`

  display: flex;

  align-items: baseline;

  gap: 10px;

  margin-bottom: 20px;

`;



const CurrentPrice = styled.span`

  font-size: 32px;

  font-weight: bold;

  color: var(--dark-gray-2, #474747);



  span {

    font-size: 16px;

    font-weight: normal;

  }

`;



const OldPrice = styled.span`

  font-size: 16px;

  color: var(--light-gray-2, #CCCCCC);

  text-decoration: line-through;

`;



const Description = styled.p`

  font-size: 14px;

  color: var(--dark-gray-2, #474747);

  line-height: 22px;

  margin-bottom: 24px;

`;



const OptionsBox = styled.div`

  display: flex;

  flex-direction: column;

  gap: 16px;

  margin-bottom: 30px;

`;



const BuyButton = styled.button`

  background-color: var(--warning, #F6AA1C);

  color: var(--white, #FFFFFF);

  border: none;

  border-radius: 8px;

  height: 48px;

  font-size: 16px;

  font-weight: bold;

  letter-spacing: 0.75px;

  cursor: pointer;

  width: 220px;

  transition: filter 0.2s ease;



  &:hover {

    filter: brightness(0.92);

  }



  @media (max-width: 768px) {

    width: 100%;

  }

`;



const BuyBox = ({

  name,

  reference,

  stars,

  rating,

  price,

  priceDiscount,

  description,

  children,

  onBuyClick,

}) => {

  return (

    <Container>

      {/* 1. Nome do Produto */}

      {name && <ProductName>{name}</ProductName>}



      {/* 2. Código / Referência */}

      {reference && <ProductReference>{reference}</ProductReference>}



      {/* 3. Avaliações (Estrelas + Quantidade) */}

      {(stars !== undefined || rating) && (

        <RatingContainer>

          {stars !== undefined && (

            <StarsBadge>

              <span>{stars}</span>

              <img src={starIcon} alt="Estrela" />

            </StarsBadge>

          )}

          {rating && <RatingText>({rating} avaliações)</RatingText>}

        </RatingContainer>

      )}



      {/* 4. Exibição de Preços */}

      <PriceContainer>

        {priceDiscount ? (

          <>

            <CurrentPrice>

              <span>R$ </span>

              {priceDiscount.toLocaleString('pt-BR', {

                minimumFractionDigits: 2,

              })}

            </CurrentPrice>

            <OldPrice>

              R$ {price?.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}

            </OldPrice>

          </>

        ) : (

          <CurrentPrice>

            <span>R$ </span>

            {price?.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}

          </CurrentPrice>

        )}

      </PriceContainer>



      {/* 5. Descrição do Produto */}

      {description && <Description>{description}</Description>}



      {/* 6. Opções (Tamanho / Cor passados via children com <ProductOptions />) */}

      {children && <OptionsBox>{children}</OptionsBox>}



      {/* 7. Botão COMPRAR */}

      <BuyButton onClick={onBuyClick}>COMPRAR</BuyButton>

    </Container>

  );

};



export default BuyBox; 