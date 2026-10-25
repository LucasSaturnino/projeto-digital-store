import React from 'react';
import ProductListingPage from './ProductListingPage'; // Importação necessária se for usar o componente

const ProductViewPage = () => {
  return (
    <div style={{ padding: '40px 100px' }}>
      <h1>Detalhes do Produto</h1>
      {/* Se estiver chamando o componente aqui, use o nome correto com 's': */}
      {/* <ProductListingPage /> */}
    </div>
  );
};

export default ProductViewPage;