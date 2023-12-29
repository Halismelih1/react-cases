// ProductMap.tsx
import React from 'react';
import Product from '../../utils/Types';

type ProductMapProps = {
  product: Product;
};

const ProductMap: React.FC<ProductMapProps> = ({ product }) => {
  return (
    <div>
      <p>{product.title}</p>
    </div>
  );
};

export default ProductMap;
