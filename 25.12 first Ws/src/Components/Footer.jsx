import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <div className="container mx-auto">
        <p className="mb-2">&copy; 2023 2B2 E-Commerce. Tüm hakları saklıdır.</p>
        <div className="flex justify-center">
          <a href="#" className="text-white hover:text-gray-500 mx-2">
            Gizlilik Politikası
          </a>
          <span className="mx-2">|</span>
          <a href="#" className="text-white hover:text-gray-500 mx-2">
            Kullanım Şartları
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
