import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-column min-h-screen">
      <Header />
      <main className="flex-grow-1" style={{ backgroundColor: 'var(--light-gray-3)' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;