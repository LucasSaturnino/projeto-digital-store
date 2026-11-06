import React from 'react';
import styled from 'styled-components';
import { useCart } from '../contexts/CartContext';

const CartContainer = styled.div`
  padding: 40px 100px;
  background-color: var(--light-gray-3, #F9F8FE);
  min-height: 80vh;

  @media (max-width: 768px) {
    padding: 20px 16px;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: var(--dark-gray-2, #474747);
  margin-bottom: 30px;
`;

const CartContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CartItemCard = styled.div`
  display: flex;
  align-items: center;
  background: var(--white, #FFFFFF);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  gap: 20px;

  img {
    width: 90px;
    height: 90px;
    object-fit: contain;
    background-color: #E2E3FF;
    border-radius: 4px;
  }

  .details {
    flex: 1;
    h3 {
      font-size: 16px;
      color: var(--dark-gray-2, #474747);
      margin-bottom: 6px;
    }
    p {
      font-size: 12px;
      color: var(--dark-gray-3, #666666);
      margin-bottom: 4px;
    }
  }

  .quantity-controls {
    display: flex;
    align-items: center;
    gap: 10px;
    button {
      background: var(--light-gray-3, #F9F8FE);
      border: 1px solid var(--light-gray-2, #CCCCCC);
      width: 30px;
      height: 30px;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
    }
    span {
      font-size: 16px;
      font-weight: bold;
    }
  }

  .price {
    font-size: 18px;
    font-weight: bold;
    color: var(--dark-gray-2, #474747);
  }

  .remove-btn {
    background: none;
    border: none;
    color: var(--error, #EE4266);
    cursor: pointer;
    font-size: 14px;
    text-decoration: underline;
  }
`;

const SummaryBox = styled.div`
  background: var(--white, #FFFFFF);
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  height: fit-content;

  h2 {
    font-size: 20px;
    margin-bottom: 20px;
    color: var(--dark-gray-2, #474747);
    border-bottom: 1px solid var(--light-gray-3, #F9F8FE);
    padding-bottom: 10px;
  }

  .summary-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    font-size: 16px;
    color: var(--dark-gray-3, #666666);

    &.total {
      font-size: 20px;
      font-weight: bold;
      color: var(--primary, #C92071);
      border-top: 1px solid var(--light-gray-3, #F9F8FE);
      padding-top: 15px;
    }
  }

  button {
    width: 100%;
    background-color: var(--warning, #F6AA1C);
    color: var(--white, #FFFFFF);
    border: none;
    border-radius: 8px;
    height: 48px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 20px;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.92);
    }
  }
`;

const CartPage = () => {
    const { cartItems, updateQuantity, removeFromCart, subtotal } = useCart();
    const shipping = cartItems.length > 0 ? 15.00 : 0.00;
    const total = subtotal + shipping;

    if (cartItems.length === 0) {
        return (
            <CartContainer>
                <Title>Meu Carrinho</Title>
                <p>Seu carrinho está vazio.</p>
            </CartContainer>
        );
    }

    return (
        <CartContainer>
            <Title>Meu Carrinho</Title>
            <CartContent>
                <ItemsList>
                    {cartItems.map((item, index) => (
                        <CartItemCard key={`${item.id}-${item.size}-${item.color}-${index}`}>
                            <img src={item.image} alt={item.name} />
                            <div className="details">
                                <h3>{item.name}</h3>
                                <p>Tamanho: {item.size} | Cor: <span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: item.color, borderRadius: '50%' }}></span></p>
                                <button className="remove-btn" onClick={() => removeFromCart(item.id, item.size, item.color)}>
                                    Remover
                                </button>
                            </div>
                            <div className="quantity-controls">
                                <button onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}>+</button>
                            </div>
                            <div className="price">
                                R$ {((item.priceDiscount || item.price) * item.quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                            </div>
                        </CartItemCard>
                    ))}
                </ItemsList>

                <SummaryBox>
                    <h2>Resumo</h2>
                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>R$ {subtotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                    </div>
                    <div className="summary-row">
                        <span>Frete</span>
                        <span>R$ {shipping.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                    </div>
                    <div className="summary-row total">
                        <span>Total</span>
                        <span>R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                    </div>
                    <button onClick={() => alert('Indo para o checkout!')}>Continuar para o Checkout</button>
                </SummaryBox>
            </CartContent>
        </CartContainer>
    );
};

export default CartPage;