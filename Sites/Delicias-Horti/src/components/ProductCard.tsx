import React from 'react';
import { Product } from '../data/products';
import { Link } from 'react-router-dom';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Link to={`/produto/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
    <div style={{
      border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', textAlign: 'center', width: '180px'
    }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto' }} />
      <h3>{product.name}</h3>
      <p>R$ {product.price.toFixed(2)}</p>
    </div>
  </Link>
    <div style={{
      border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', textAlign: 'center', width: '180px'
    }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto' }} />
      <h3>{product.name}</h3>
      <p>R$ {product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;

