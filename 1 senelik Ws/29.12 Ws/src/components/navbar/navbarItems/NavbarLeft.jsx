import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavbarLeft = () => {

  const navigate = useNavigate();
  return (
    <div>
      <h1 onClick={()=>navigate("/")} className='cursor-pointer text-4xl font-extrabold text-black'>2B<span className=' text-yellow-400'>2</span> Workshop</h1>
    </div>
  );
}

export default NavbarLeft;
