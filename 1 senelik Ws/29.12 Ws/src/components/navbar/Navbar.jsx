import React, { useState } from 'react';
import NavbarRight from './navbarItems/NavbarRight';
import NavbarLeft from './navbarItems/NavbarLeft';
import NavbarLogin from './NavbarLogin';


const Navbar = () => {

  const [isLogin, setIsLogin] = useState(false);

  return (
    <nav className='flex flex-wrap md:flex-nowrap items-center justify-between p-4 '>
      <NavbarLeft />
      {isLogin ? <NavbarRight setIsLogin={setIsLogin} /> : <NavbarLogin setIsLogin={setIsLogin} />}
    </nav>
  );
}

export default Navbar;
