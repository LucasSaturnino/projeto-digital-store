import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-column min-h-screen">
      {/* 1. Cabeçalho fixo no topo de todas as páginas */}
      <Header />

      {/* 2. Conteúdo dinâmico da página atual (substitui a prop 'children') */}
      <main className="flex-grow-1" style={{ backgroundColor: 'var(--light-gray-3)' }}>
        {children}
      </main>

      {/* 3. Rodapé fixo na parte inferior de todas as páginas */}
      <Footer />
    </div>
  );
};

export default Layout;