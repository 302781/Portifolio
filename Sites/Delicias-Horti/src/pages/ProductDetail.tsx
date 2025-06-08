import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p>Produto não encontrado.</p>;
  }

  return (
    <main style={{ padding: '1rem' }}>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ width: '300px' }} />
      <p style={{ fontSize: '1.2rem' }}>Preço: R$ {product.price.toFixed(2)}</p>
      <br />
      <Link to="/">← Voltar aos produtos</Link>
    </main>
  );
};

export default ProductDetail;
