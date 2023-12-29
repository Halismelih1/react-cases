import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../../../redux/CartSlice';
import { useNavigate } from 'react-router-dom';
import { FaPlusCircle } from 'react-icons/fa';
import { CgLogOut  } from "react-icons/cg";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ProductFormSchema = Yup.object().shape({
  productName: Yup.string().required('Product name is required'),
  quantity: Yup.number().required('Quantity is required').positive('Quantity must be positive'),
});

const NavbarRight = ({setIsLogin}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { itemCount } = useSelector((state) => state.carts);

  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    dispatch(getCartTotal());

    const handleOutsideClick = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [dispatch]);

  const handleInputClick = () => {
    setIsExpanded(true);
  };

  const inputStyle = {
    width: isExpanded ? '300px' : '200px',
    padding: '8px',
    transition: 'width 0.3s ease',
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (values, { resetForm }) => {
    console.log('Adding product:', values);
    resetForm();
    closeModal();
  };

  const handleLogoutClick = () => {
    setIsLogin(false);
  };

  return (
    <div className='flex items-center gap-6'>
      <div className='flex items-center border p-3 rounded-full bg-gray-200 h-12'>
        <input
          ref={inputRef}
          style={inputStyle}
          onClick={handleInputClick}
          className='outline-none bg-gray-200 items-center'
          type='text'
          placeholder='Search...'
        />
        <AiOutlineSearch className='cursor-pointer' size={26} />
      </div>
      <FaPlusCircle className='cursor-pointer text-green-500' onClick={openModal} size={26} />
      {isModalOpen && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center'>
          <div className='absolute w-full h-full bg-gray-800 bg-opacity-80'></div>
          <div className='bg-white p-6 rounded-md relative z-20'style={{ width: '400px' }}>
            <h2 className='text-xl font-bold mb-4 text-center'>Add Product</h2> <hr />
            <Formik
              initialValues={{ productName: '', quantity: '', price: '', stock: '', desc: '' }}
              validationSchema={ProductFormSchema}
              onSubmit={handleFormSubmit}
            >
              <Form>
                <div className='mb-4 mt-4 '>
                  <label htmlFor='productName' className='block text-sm font-medium text-gray-600'>
                    Product Name
                  </label>
                  <Field
                    type='text'
                    id='productName'
                    name='productName'
                    placeholder='Product Name'
                    className='mt-1 p-2 block w-full border rounded-md'
                  />
                  <ErrorMessage name='productName' component='p' className='text-red-500 text-sm mt-1' />
                </div>

                <div className='mb-4'>
                  <label htmlFor='quantity' className='block text-sm font-medium text-gray-600'>
                    Quantity
                  </label>
                  <Field
                    type='number'
                    id='quantity'
                    name='quantity'
                    placeholder='Quantity'
                    className='mt-1 p-2 block w-full border rounded-md'
                  />
                  <ErrorMessage name='quantity' component='p' className='text-red-500 text-sm mt-1' />
                </div>

                <div className='mb-4'>
                  <label htmlFor='price' className='block text-sm font-medium text-gray-600'>
                    Price
                  </label>
                  <Field
                    type='text'
                    id='price'
                    name='price'
                    placeholder='Price'
                    className='mt-1 p-2 block w-full border rounded-md'
                  />
                  <ErrorMessage name='price' component='p' className='text-red-500 text-sm mt-1' />
                </div>

                <div className='mb-4'>
                  <label htmlFor='stock' className='block text-sm font-medium text-gray-600'>
                    Stock
                  </label>
                  <Field
                    type='text'
                    id='stock'
                    name='stock'
                    placeholder='Stock'
                    className='mt-1 p-2 block w-full border rounded-md'
                  />
                  <ErrorMessage name='stock' component='p' className='text-red-500 text-sm mt-1' />
                </div>

                <div className='mb-4'>
                  <label htmlFor='desc' className='block text-sm font-medium text-gray-600'>
                    Description
                  </label>
                  <Field
                    as='textarea'
                    id='desc'
                    name='desc'
                    placeholder='Description'
                    className='mt-1 p-2 block w-full border rounded-md'
                  />
                  <ErrorMessage name='desc' component='p' className='text-red-500 text-sm mt-1' />
                </div>
                <div className='flex justify-center gap-4'>
                <button
                  type='submit'
                  className='bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600'
                >
                  Add Product
                </button>
                <button className='bg-red-500 text-white rounded-md px-4 py-2 ' onClick={closeModal}>
              Close
            </button>
                </div>

               
              </Form>
            </Formik>
            
          </div>
        </div>
      )}
      <div className='relative'>
        <div
          onClick={() => navigate('cart')}
          className='mr-4 absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center cursor-pointer'
        >
          {itemCount}
        </div>
        <SlBasket className='cursor-pointer mr-4' size={26} />
        
      </div>
      <div onClick={handleLogoutClick} className='flex border p-2 justify-center items-center cursor-pointer'>
  <span className='font-bold text-red-500'>Sign Out</span>
  <CgLogOut size={26} /> 
</div>

    </div>
  );
};

export default NavbarRight;
