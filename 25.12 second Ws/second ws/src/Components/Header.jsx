
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';



const Header = ({onLogin}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();

  //SEARCH
  const handleSearch = () => {
    navigate(`/search?q=${searchQuery}`);
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
        <button className='bg-green-500 text-white p-2 rounded'onClick={onLogin}>Login</button>
        <button className='bg-blue-500 text-white p-2 rounded ml-4'>Sign In</button>
      </div>
    </header>
  );
};

export default Header;