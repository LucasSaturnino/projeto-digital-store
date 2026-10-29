import React from 'react';
import Logo from './Logo';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--dark-gray, #1F1F1F);
  color: var(--white, #FFFFFF);
  padding: 60px 80px;

  @media (max-width: 992px) {
    padding: 40px 30px;
  }

  @media (max-width: 576px) {
    padding: 40px 20px;
  }
`;

const ContentGrid = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: nowrap;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const BrandColumn = styled.div`
  flex: 1.5;
  min-width: 200px;

  .footer-logo-wrapper {
    display: flex;
    align-items: center;

    svg, img {
      width: 253px;
      height: 44px;

      @media (max-width: 768px) {
        width: 170px !important;
        height: 29.57px !important;
      }
    }
  }

  p {
    margin: 20px 0;
    font-size: 14px;
    color: var(--light-gray-2, #CCCCCC);
    line-height: 22px;
  }

  .social-icons {
    display: flex;
    gap: 15px;
    font-size: 18px;

    a {
      color: var(--white);
      &:hover { color: var(--primary); }
    }
  }
`;

const Column = styled.div`
  flex: 1;

  h4 {
    font-size: 16px;
    margin-bottom: 20px;
    white-space: nowrap;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 10px;
      a {
        color: var(--light-gray-2, #CCCCCC);
        text-decoration: none;
        font-size: 14px;
        white-space: nowrap;
        &:hover { color: var(--primary, #C92071); }
      }
    }
  }
`;

const ContactColumn = styled.div`
  flex: 1.2;

  h4 {
    font-size: 16px;
    margin-bottom: 20px;
  }

  p {
    font-size: 14px;
    color: var(--light-gray-2, #CCCCCC);
    line-height: 22px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <ContentGrid>
        <BrandColumn>
          <div className="footer-logo-wrapper">
            <Logo variant="white" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
          <div className="social-icons">
            <a href="#facebook"><i className="pi pi-facebook" /></a>
            <a href="#instagram"><i className="pi pi-instagram" /></a>
            <a href="#twitter"><i className="pi pi-twitter" /></a>
          </div>
        </BrandColumn>

        {/* 2. Informação */}
        <Column>
          <h4>Informação</h4>
          <ul>
            <li><a href="/sobre">Sobre Drip Store</a></li>
            <li><a href="/seguranca">Segurança</a></li>
            <li><a href="/wishlist">Wishlist</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/trabalhe-conosco">Trabalhe conosco</a></li>
            <li><a href="/meus-pedidos">Meus Pedidos</a></li>
          </ul>
        </Column>

        {/* 3. Categorias */}
        <Column>
          <h4>Categorias</h4>
          <ul>
            <li><a href="/camisetas">Camisetas</a></li>
            <li><a href="/calcas">Calças</a></li>
            <li><a href="/bones">Bonés</a></li>
            <li><a href="/headphones">Headphones</a></li>
            <li><a href="/tenis">Tênis</a></li>
          </ul>
        </Column>

        {/* 4. Contato */}
        <ContactColumn>
          <h4>Contato</h4>
          <p>
            Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161<br />
            (85) 3051-3411
          </p>
        </ContactColumn>
      </ContentGrid>

      <hr style={{ border: 'none', borderTop: '1px solid #333', margin: '40px 0 20px 0' }} />
      <div style={{ textAlign: 'center', fontSize: '14px', color: 'var(--light-gray)' }}>
        © 2024 Digital Store
      </div>
    </FooterContainer>
  );
};

export default Footer;