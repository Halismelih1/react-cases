import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';

const SearchResults = ({ data }) => {
  const [searchResults, setSearchResults] = useState([]);

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
  }, [data]);

  return (
    <div className="container mx-auto flex flex-wrap">
      {searchResults.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default SearchResults;
