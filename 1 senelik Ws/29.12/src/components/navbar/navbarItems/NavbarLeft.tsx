import React from 'react'
import { useNavigate } from 'react-router-dom';


type Props = {}

const NavbarLeft = (props: Props) => {
    const navigate = useNavigate();

    
  return (
    <div>
    <h1 onClick={()=>navigate("/")} className='cursor-pointer text-4xl font-extrabold text-black'>2<span className=' text-yellow-400'>B</span>2 E-Commerce</h1>
  </div>
);
}

export default NavbarLeft