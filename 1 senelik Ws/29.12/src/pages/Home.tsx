import React, { useState } from 'react'
import SliderComp from '../components/home/SliderComp'
import Sorting from '../components/home/Sorting'
import Categories from '../components/home/Categories'
import Product from '../components/home/Product'

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  
  const [sort, setSort] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  return (
    <div>
      <SliderComp />
      <Sorting setSort={setSort} />
      <div className='flex'>
        <Categories setCategory={setCategory} />
        <Product category={category} sort={sort} />
      </div>
    </div>
  );
};
  


export default Home