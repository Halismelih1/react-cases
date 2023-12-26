import React, { useState } from 'react';
import { FaSearch, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const LoginHeader = ({ handleSignOut }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();

  // SEARCH
  const handleSearch = () => {
    navigate(`/search?q=${searchQuery}`);
  };

  const handleUserIconClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center mb-4 md:mb-0">
        <Link to="/" className="text-2xl font-bold">
          2B2 E-Commerce
        </Link>
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
      <div className="flex items-center mt-4 md:mt-0 relative">
        <div className="cursor-pointer" onClick={handleUserIconClick}>
          <FaUser />
        </div>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-32  bg-white text-black border rounded-md shadow-md w-[200px]">
            <button className="block w-full py-2 px-4 text-left" onClick={handleSignOut}>
              Çıkış Yap
            </button>
            <Link >
              <button className="block w-full py-2 px-4 text-left">
                Profilim
              </button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default LoginHeader;
