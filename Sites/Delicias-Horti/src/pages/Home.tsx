import React from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  return (
    <main style={{ padding: '1rem' }}>
       <h1>Bem-vindo à Delícias Horti!</h1>
      <p>Seu lugar para frutas, verduras e legumes frescos direto do campo.</p>
    </main>
      <h2>Produtos em destaque</h2>
      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem'
      }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default Home;
