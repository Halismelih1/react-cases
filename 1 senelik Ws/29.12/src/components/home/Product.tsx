import React from 'react'

type ProductProps = {
  category: string;
  sort: string;
};

const Product: React.FC<ProductProps> = ({ category, sort }) => {
  return (
    <div>Product</div>
  )
}

export default Product