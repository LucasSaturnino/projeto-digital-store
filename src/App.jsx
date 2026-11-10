import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductViewPage from './pages/ProductViewPage';
import { CartProvider } from './contexts/CartContext';
import CartPage from './components/CartDrawer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/produtos" element={<ProductListingPage />} />
              <Route path="/product/:id" element={<ProductViewPage />} />
              <Route path="/carrinho" element={<CartPage />} />
            </Routes>
          </Layout>
        </ScrollToTop>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;