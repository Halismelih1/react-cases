import React from 'react';
import NavbarRight from './navbarItems/NavbarRight';
import NavbarLeft from './navbarItems/NavbarLeft';


const Navbar = () => {
  return (
    <nav className='flex flex-wrap md:flex-nowrap items-center justify-between p-4 '>
      <NavbarLeft/>
      <NavbarRight/>
    </nav>
  );
}

export default Navbar;
