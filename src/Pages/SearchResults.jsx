import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import { useLocation } from 'react-router-dom';


const SearchResults = ({ data }) => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const searchQuery = new URLSearchParams(window.location.search).get('q');

    if (searchQuery && data && data.products) {
      const lowerCaseSearchQuery = searchQuery.toLowerCase();

      const filteredResults = data.products.filter(
        (product) =>
          product.title.toLowerCase().includes(lowerCaseSearchQuery)
      );

      setSearchResults(filteredResults);
    }
  }, [data,location]);

  return (
    <div className="container mx-auto flex flex-wrap">
      {searchResults.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default SearchResults;
