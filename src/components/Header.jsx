import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: var(--white);
  padding: 20px 100px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`;

const TopHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
`;

const SearchBox = styled.div`
  position: relative;
  flex: 1;
  max-width: 550px;

  input {
    width: 100%;
    height: 60px;
    background-color: var(--light-gray-3);
    border: none;
    border-radius: 8px;
    padding: 0 50px 0 20px;
    font-size: 16px;
    color: var(--dark-gray-2);
    outline: none;
  }

  i {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 26px;
    color: var(--light-gray);
    cursor: pointer;
  }
`;

const UserArea = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  .cadastre-se {
    font-size: 16px;
    color: var(--dark-gray-2);
    text-decoration: underline;
  }

  .btn-entrar {
    width: 120px;
    height: 40px;
    background-color: var(--primary);
    color: var(--white);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 14px;
  }

  .cart-icon {
    font-size: 28px;
    color: var(--primary);
    cursor: pointer;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;

  a {
    font-size: 16px;
    color: var(--dark-gray-2);
    position: relative;
    padding-bottom: 5px;

    &.active {
      color: var(--primary);
      font-weight: bold;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: var(--primary);
      }
    }
  }
`;

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Redireciona para /produtos?filter=termo ao buscar
  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/produtos?filter=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <HeaderContainer>
      <TopHeader>
        {/* 1. Componente Logo (253x44px) */}
        <Logo />

        {/* 2. Campo de busca com ícone de lupa */}
        <SearchBox>
          <input
            type="text"
            placeholder="Buscar produto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <i className="pi pi-search" onClick={handleSearch} />
        </SearchBox>

        {/* 3. Área de Redirecionamento (Cadastre-se / Entrar) e Carrinho */}
        <UserArea>
          <Link to="/cadastre-se" className="cadastre-se">Cadastre-se</Link>
          <Link to="/login" className="btn-entrar">Entrar</Link>
          <div className="cart-icon">
            <i className="pi pi-shopping-cart" />
          </div>
        </UserArea>
      </TopHeader>

      {/* 4. Navegação Principal com links ativos */}
      <Nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/produtos">Produtos</NavLink>
        <NavLink to="/categorias">Categorias</NavLink>
        <NavLink to="/meus-pedidos">Meus Pedidos</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;