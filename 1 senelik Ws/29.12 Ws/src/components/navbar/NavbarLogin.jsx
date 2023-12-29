import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { CgLogIn } from 'react-icons/cg';

const NavbarLogin = ({ setIsLogin }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleInputClick = () => {
    setIsExpanded(true);
  };

  const inputStyle = {
    width: isExpanded ? '300px' : '200px',
    padding: '8px',
    transition: 'width 0.3s ease',
  };

  const handleLoginClick = () => {
    setIsLogin(true);
  };

  return (
    <div className='flex items-center gap-6'>
      <div className='flex items-center border p-3 rounded-full bg-gray-200 h-12 mr-8'>
        <input
          ref={inputRef}
          style={inputStyle}
          onClick={handleInputClick}
          className='outline-none bg-gray-200 items-center'
          type='text'
          placeholder='Search...'
        />
        <AiOutlineSearch className='cursor-pointer' size={26} />
       
      </div>
      <div onClick={handleLoginClick} className='flex border p-2 justify-center items-center cursor-pointer'>
  <span className='font-bold text-green-500'>Login</span>
  <CgLogIn size={24} /> 
</div>
      
    </div>
    
  );
};

export default NavbarLogin;
