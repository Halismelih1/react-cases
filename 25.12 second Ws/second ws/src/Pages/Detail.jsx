import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { FaStar, FaShoppingCart, FaArrowLeft } from 'react-icons/fa';



const Detail = ({ data,loading }) => {
  const { productId } = useParams();

  if (loading || !data || !data.products) {
    return  <div>Loading...</div>
  }

  const product = data.products.find(item => String(item.id) === productId);


  const { title, description, price, rating, stock, images, brand, category } = product;
  return (
    <div className="container mx-auto my-8 flex">
      <div className="w-2/3 mr-8">
        <div className="flex items-center mb-4">
          <Link to="/">
            <FaArrowLeft className="text-xl mr-2" />
          </Link>
        </div>

        <img src={images[0]} alt={title} className="w-full h-auto rounded-lg mb-4" />

        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="flex items-center mb-4">
          <span className="text-gray-800 font-semibold mr-2">Marka:</span>
          <span>{brand}</span>
        </div>

        <div className="flex items-center mb-4">
          <span className="text-gray-800 font-semibold mr-2">Kategori:</span>
          <span>{category}</span>
        </div>

        <div className="flex items-center mb-4">
          <span className="text-gray-800 font-semibold mr-2">Fiyat:</span>
          <span>${price}</span>
        </div>

        <div className="flex items-center mb-4">
          <span className="text-gray-800 font-semibold mr-2">Stok Durumu:</span>
          <span>{stock} adet</span>
        </div>

        <div className="flex items-center mb-4">
          <span className="text-gray-800 font-semibold mr-2">Puan:</span>
          <div className="flex items-center">
            <FaStar className="text-yellow-500 mr-1" />
            <span>{rating}</span>
          </div>
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <FaShoppingCart className="mr-2" />
          Sepete Ekle
        </button>
      </div>

      <div className="w-1/3">
        <h2 className="text-2xl font-bold mb-4">Diğer Resimler</h2>
        <div className="grid grid-cols-1 gap-4">
          {images.slice(1).map((image, index) => (
            <img key={index} src={image} alt={`${title}-${index}`} className="w-full h-auto rounded-lg mb-4" />
          ))}
        </div>
      </div>
    </div>
  );
};


export default Detail