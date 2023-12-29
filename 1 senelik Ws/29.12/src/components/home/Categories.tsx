// Categories.tsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../../redux/CategorySlice';
import Product from '../../utils/Types';

interface CategoriesProps {
  setCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({ setCategory }) => {
  const dispatch = useDispatch();
  const categories = useSelector((store: { categories: { categories: Product[] } }) => store.categories.categories);
  const loading = useSelector((store: { categories: { status: string } }) => store.categories.status === 'loading');

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      {loading ? (
        <p>Loading categories...</p>
      ) : (
        categories.map((product: Product, i: number) => (
          <div
            onClick={() => setCategory(product.category)}
            key={i}
            className="flex items-center justify-between py-3 px-4 bg-white border-t border-gray-300 last:border-b"
          >
            <span className="text-gray-800 hover:font-bold cursor-pointer">{product.category}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default Categories;
