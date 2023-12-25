
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';



const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();

  //SEARCH
  const handleSearch = () => {
    navigate(`/search?q=${searchQuery}`);
  };


  //ADD
  const handleAddProduct = () => {
    const title = prompt('Ürün Başlığı:');
    const price = prompt('Ürün Fiyatı:');
  
    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title,
        price: price,
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log('Ürün Başarıyla Eklendi:', data);
      });
  };

  //DELETE
  const handleDeleteProduct = () => {
    const productId = prompt('Silmek istediğiniz ürünün ID\'sini girin:');
  
    fetch(`https://dummyjson.com/products/${productId}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        console.log('Ürün Başarıyla Silindi:', data);
      });
  };


  return (
    <header className="bg-gray-800 text-white p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center mb-4 md:mb-0">
        <Link to="/" className="text-2xl font-bold">2B2 E-Commerce</Link>
      </div>
      <div className="flex items-center justify-end w-full md:w-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="py-1 px-2 rounded border-2 border-gray-600 text-black"
          />
          <FaSearch
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            onClick={handleSearch}
          />
        </div>
      </div>
      <div className="flex items-center mt-4 md:mt-0">
        <Link to="#" onClick={handleAddProduct} className="text-green-500 cursor-pointer mr-4 md:mr-2">Ürün Ekleme</Link>
        <Link to="#" onClick={handleDeleteProduct} className="text-red-500 cursor-pointer">Ürün Silme</Link>
      </div>
    </header>
  );
};

export default Header;

