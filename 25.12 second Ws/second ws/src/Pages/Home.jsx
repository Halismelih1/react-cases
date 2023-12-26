import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../Components/Card';

const Home = ({ data,loading }) => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchQuery) {
          const response = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}`);
          const data = await response.json();
          setProducts(data.products || []);
        } else {
          setProducts(data.products || []);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [data.products, searchQuery]);

  return (
    <div className="container mx-auto flex flex-wrap">
      {loading ? (
        <p>Loading...</p>
      ) : (
        products.map((product) => (
          <Card key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default Home;
