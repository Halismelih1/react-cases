import React from 'react'
import { FaSort } from "react-icons/fa";


const Sorting = ({setSort}) => {
  return (
    
    <div className='border my-10 p-5 flex items-center justify-end rounded-lg'>

      <select onChange={e => setSort (e.target.value)} className='text-white bg-gray-800 p-2 rounded-full' name="" id="">
        <option disabled value="">Seçiniz</option>
        <option value="inc">Fiyata Göre Artan</option>
        <option value="dec">Fiyata Göre Azalan</option>
      </select>
      
    </div>
  )
}

export default Sorting