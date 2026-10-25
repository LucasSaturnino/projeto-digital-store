import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--dark-gray, #1F1F1F)', color: 'var(--white, #FFFFFF)', padding: '40px 100px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
        <div style={{ maxWidth: '300px' }}>
          <Logo variant="white" />
          <p style={{ marginTop: '20px', color: 'var(--light-gray-2, #CCCCCC)', fontSize: '14px', lineHeight: '22px' }}>
            A melhor loja de tênis e artigos esportivos do Brasil.
          </p>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #333', paddingTop: '20px', textAlign: 'center', fontSize: '14px', color: 'var(--light-gray, #8F8F8F)' }}>
        © 2024 Digital Store
      </div>
    </footer>
  );
};

export default Footer;