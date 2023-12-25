import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Card from '../Components/Card';

const Hero = ({ data }) => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    if (searchQuery) {
      // Fetch search results
      fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
        .then((res) => res.json())
        .then((data) => setProducts(data.products || []))
        .catch((error) => console.error(error));
    } else {
      // Display all products if there is no search query
      setProducts(data.products || []);
    }
  }, [data.products, searchQuery]);

  return (
    <div className="container mx-auto flex flex-wrap">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Hero;
