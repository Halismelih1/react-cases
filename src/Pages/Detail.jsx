import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { FaStar, FaShoppingCart, FaArrowLeft } from 'react-icons/fa';



const Detail = ({ data }) => {
  console.log(data);

  const { productId } = useParams();
  const product = data.products.find(item => String(item.id) === productId);

  if (!product) {
    return <div>Ürün bulunamadı</div>;
  }

  const { title, description, price, rating, stock, images, brand, category } = product;

  return (
    <div className="container mx-auto my-8">
      <div className="flex items-center mb-4">
        <Link to={"/"}>
        <FaArrowLeft className="text-xl mr-2" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <img src={images[0]} alt={title} className="w-full h-auto rounded-lg" />
        </div>
        <div className="col-span-2">
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
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Ürün Resimleri</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`${title}-${index}`} className="w-full h-auto rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail