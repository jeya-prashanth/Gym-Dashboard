import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaCog } from 'react-icons/fa';

const Navigation = () => {
  const location = useLocation();

  return (
    <div className='fixed top-2 right-2 sm:top-4 sm:right-4 md:top-6 md:right-6 z-50'>
      <div className='flex space-x-1 sm:space-x-2'>
        <Link
          to='/'
          className={`p-2 sm:p-3 rounded-full shadow-lg transition-colors ${
            location.pathname === '/'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
          title='Go to Home Page'
        >
          <FaHome className='text-base sm:text-lg' />
        </Link>
        <Link
          to='/dashboard'
          className={`p-2 sm:p-3 rounded-full shadow-lg transition-colors ${
            location.pathname === '/dashboard'
              ? 'bg-green-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
          title='Go to Dashboard'
        >
          <FaCog className='text-base sm:text-lg' />
        </Link>
      </div>
    </div>
  );
};

export default Navigation; 