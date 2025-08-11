import React from 'react';
import { useAppContext } from '../context/AppContext';
import { FaDumbbell } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const { state } = useAppContext();
  const { header } = state;

  return (
    <header className='bg-gradient-to-r from-[#1c1f2a] to-purple-600 text-white py-6 sm:py-8 lg:py-12'>
      <div className='container mx-auto px-2 sm:px-4 lg:px-8'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <div className='flex items-center space-x-2 sm:space-x-4 mb-4 md:mb-0'>
            <Link to='/' className='flex items-center space-x-2 sm:space-x-4'>
              <FaDumbbell className='text-3xl sm:text-4xl lg:text-5xl text-yellow-400' />
              <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold hover:opacity-80 transition-opacity'>
                {header.title || 'Rebel Gym'}
              </h1>
            </Link>
          </div>
          {header.imageUrl && (
            <div className='relative'>
              <img
                src={header.imageUrl}
                alt='Gym Header'
                className='w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover rounded-lg shadow-lg border-4 border-white'
              />
            </div>
          )}
        </div>
        <div className='mt-4 sm:mt-6 text-center'>
          <p className='text-lg sm:text-xl md:text-2xl font-semibold'>
            Transform Your Body, Transform Your Life
          </p>
          <p className='text-base sm:text-lg mt-2 opacity-90'>
            Join the ultimate fitness experience
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header; 