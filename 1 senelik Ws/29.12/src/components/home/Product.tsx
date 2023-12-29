import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryProduct, getProducts } from '../../redux/ProductSlice'; // Make sure to import the correct actions
import Loading from './Loading';
import ProductMap from './ProductMap';
import ProductType, { RootState } from '../../utils/Types'; // Assuming ProductType is your type definition

type ProductProps = {
  category: string;
  sort: string;
};

const Product: React.FC<ProductProps> = ({ category, sort }) => {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    if (category) {
      dispatch(getCategoryProduct(category));
    } else {
      dispatch(getProducts());
    }
  }, [dispatch, category]); 

  return (
    <div className="p-8">
      {productsStatus === 'LOADING' ? (
        <Loading />
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products
            ?.slice()
            .sort((a: ProductType, b: ProductType) =>
  sort === 'inc' ? a.price - b.price : sort === 'dec' ? b.price - a.price : 0
)
            .map((product: ProductType, i: number) => <ProductMap key={i} product={product} />)}
        </div>
      )}
    </div>
  );
};

export default Product;
