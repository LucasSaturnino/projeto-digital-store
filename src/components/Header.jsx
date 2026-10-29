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

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 24px 1fr auto; /* Hambúrguer | Logo Centralizada | Ícones Direita */
    align-items: center;
    gap: 15px;
  }
`;


const MenuIconButton = styled.button`
  display: none;
  background: none;
  border: none;
  width: 24px;
  height: 24px;
  padding: 0;
  font-size: 24px;
  color: var(--dark-gray-2);
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

/* Container da Logo Centralizada no Mobile (138x24px) */
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;

    svg, img {
      width: 138px !important;
      height: 24px !important;
    }
  }

  svg, img {
    width: 253px;
    height: 44px;
  }
`;

/* Busca exclusiva para Desktop (Totalmente oculta em telas <= 768px) */
const DesktopSearchContainer = styled.div`
  position: relative;
  flex: 1;
  max-width: 550px;

  @media (max-width: 768px) {
    display: none !important;
  }

  input {
    width: 100%;
    height: 60px;
    background-color: var(--light-gray-3);
    border: none;
    border-radius: 8px;
    padding: 0 55px 0 20px;
    font-size: 16px;
    color: var(--dark-gray-2);
    outline: none;

    &::placeholder {
      color: var(--light-gray);
    }
  }

  .search-icon-inside {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 24px;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--light-gray);
    cursor: pointer;
  }
`;

/* Busca exclusiva para Mobile (Invisível no desktop, só aparece no mobile se acionada) */
const MobileSearchContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${(props) => (props.$open ? 'block' : 'none')};
    width: 315px;
    max-width: 100%;
    margin: 15px auto 0 auto;
    position: relative;

    input {
      width: 100%;
      height: 60px;
      background-color: var(--light-gray-3);
      border: none;
      border-radius: 8px;
      padding: 0 55px 0 20px;
      font-size: 16px;
      color: var(--dark-gray-2);
      outline: none;

      &::placeholder {
        color: var(--light-gray);
      }
    }

    .search-icon-inside {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 24px;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--light-gray);
      cursor: pointer;
    }
  }
`;

const UserArea = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }

  .desktop-only {
    display: flex;
    align-items: center;
    gap: 20px;

    @media (max-width: 768px) {
      display: none !important;
    }
  }

  .mobile-search-toggle {
    display: none;
    font-size: 20px;
    width: 20px;
    height: 20px;
    color: var(--dark-gray-2);
    cursor: pointer;

    @media (max-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .cart-box {
    position: relative;
    font-size: 24px;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary);
    cursor: pointer;

    .badge {
      position: absolute;
      top: -6px;
      right: -8px;
      background-color: var(--primary);
      color: var(--white);
      font-size: 11px;
      font-weight: bold;
      border-radius: 50%;
      width: 17px;
      height: 17px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;
  margin-top: 20px;

  @media (max-width: 768px) {
    display: ${(props) => (props.$open ? 'flex' : 'none')};
    flex-direction: column;
    padding-top: 15px;
    border-top: 1px solid var(--light-gray-3);
    margin-top: 15px;
  }

  a {
    font-size: 16px;
    color: var(--dark-gray-2);
    text-decoration: none;

    &.active {
      color: var(--primary);
      font-weight: bold;
    }
  }
`;

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpenMobile, setSearchOpenMobile] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/produtos?filter=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <HeaderContainer>
      <TopHeader>
        <MenuIconButton onClick={() => setMenuOpen(!menuOpen)}>
          <i className={menuOpen ? "pi pi-times" : "pi pi-bars"} />
        </MenuIconButton>

        <LogoWrapper>
          <Logo />
        </LogoWrapper>

        <DesktopSearchContainer>
          <input
            type="text"
            placeholder="pesquisar produto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          <i className="pi pi-search search-icon-inside" onClick={handleSearch} />
        </DesktopSearchContainer>

        <UserArea>
          <i
            className="pi pi-search mobile-search-toggle"
            onClick={() => setSearchOpenMobile(!searchOpenMobile)}
          />

          <div className="desktop-only">
            <Link to="/cadastre-se" style={{ color: 'var(--dark-gray-2)', textDecoration: 'underline' }}>
              Cadastre-se
            </Link>
            <Link
              to="/login"
              style={{
                backgroundColor: 'var(--primary)',
                color: 'var(--white)',
                padding: '10px 24px',
                borderRadius: '4px',
                fontWeight: 'bold',
                textDecoration: 'none'
              }}
            >
              Entrar
            </Link>
          </div>

          <div className="cart-box">
            <i className="pi pi-shopping-cart" />
            <span className="badge">2</span>
          </div>
        </UserArea>
      </TopHeader>

      {/* Busca Mobile expansível (315x60px) - Só existe e aparece em telas <= 768px */}
      <MobileSearchContainer $open={searchOpenMobile}>
        <input
          type="text"
          placeholder="pesquisar produto..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <i className="pi pi-search search-icon-inside" onClick={handleSearch} />
      </MobileSearchContainer>

      {/* Menu de Navegação retrátil */}
      <Nav $open={menuOpen}>
        <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/produtos" onClick={() => setMenuOpen(false)}>Produtos</NavLink>
        <NavLink to="/categorias" onClick={() => setMenuOpen(false)}>Categorias</NavLink>
        <NavLink to="/meus-pedidos" onClick={() => setMenuOpen(false)}>Meus Pedidos</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;