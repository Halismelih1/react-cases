import React from 'react'

type CategoriesProps = {
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

const Categories: React.FC<CategoriesProps> = ({ setCategory }) => {
  return (
    <div>Categories</div>
  )
}

export default Categories