import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import styled from 'styled-components';
import { useCart } from '../contexts/CartContext';

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
    grid-template-columns: 24px 1fr auto;
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

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

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

const MobileSearchContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${(props) => (props.$isOpen ? 'block' : 'none')};
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
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 30px;
  margin-top: 25px;

  @media (max-width: 768px) {
    display: ${(props) => (props.$isMenuOpen ? 'flex' : 'none')};
    flex-direction: column;
    gap: 15px;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid var(--light-gray-2, #CCCCCC);
  }

  a {
    text-decoration: none;
    color: var(--dark-gray-2);
    font-size: 16px;
    transition: color 0.2s;

    &.active {
      color: var(--primary);
      font-weight: bold;
      border-bottom: 2px solid var(--primary);
      padding-bottom: 2px;
    }

    &:hover {
      color: var(--primary);
    }
  }
`;

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { totalItems } = useCart();

  const handleSearch = (e) => {
    if ((e.key === 'Enter' || e.type === 'click') && searchQuery.trim()) {
      navigate(`/produtos?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsMobileSearchOpen(false);
    }
  };

  return (
    <HeaderContainer>
      <TopHeader>
        <MenuIconButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <i className={isMobileMenuOpen ? "pi pi-times" : "pi pi-bars"} />
        </MenuIconButton>

        <LogoWrapper>
          <Link to="/">
            <Logo />
          </Link>
        </LogoWrapper>

        <DesktopSearchContainer>
          <input
            type="text"
            placeholder="Pesquisar produto..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
          />
          <i className="pi pi-search search-icon-inside" onClick={handleSearch} />
        </DesktopSearchContainer>

        <UserArea>
          <div className="mobile-search-toggle" onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}>
            <i className="pi pi-search" />
          </div>

          <div className="desktop-only">
            <Link to="/cadastrar" style={{ color: 'var(--dark-gray-2)', textDecoration: 'underline', fontSize: '16px' }}>
              Cadastre-se
            </Link>
            <Link to="/entrar">
              <button style={{ backgroundColor: 'var(--primary)', color: 'var(--white)', border: 'none', borderRadius: '8px', padding: '10px 25px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer' }}>
                Entrar
              </button>
            </Link>
          </div>

          <Link to="/carrinho" style={{ position: 'relative', color: 'var(--primary)', fontSize: '24px', display: 'flex', alignItems: 'center' }}>
            <i className="pi pi-shopping-cart" />
            {totalItems > 0 && (
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                backgroundColor: 'var(--error, #EE4266)',
                color: '#FFFFFF',
                fontSize: '12px',
                fontWeight: 'bold',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {totalItems}
              </span>
            )}
          </Link>
        </UserArea>
      </TopHeader>

      <MobileSearchContainer $isOpen={isMobileSearchOpen}>
        <input
          type="text"
          placeholder="Pesquisar produto..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleSearch}
        />
        <i className="pi pi-search search-icon-inside" onClick={handleSearch} />
      </MobileSearchContainer>

      <NavMenu $isMenuOpen={isMobileMenuOpen}>
        <NavLink to="/" end onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
        <NavLink to="/produtos" onClick={() => setIsMobileMenuOpen(false)}>Produtos</NavLink>
        <NavLink to="/categorias" onClick={() => setIsMobileMenuOpen(false)}>Categorias</NavLink>
        <NavLink to="/pedidos" onClick={() => setIsMobileMenuOpen(false)}>Meus Pedidos</NavLink>
      </NavMenu>
    </HeaderContainer>
  );
};

export default Header;