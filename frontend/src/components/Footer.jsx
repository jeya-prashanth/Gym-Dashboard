import React from 'react';
import { useAppContext } from '../context/AppContext';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const { state } = useAppContext();
  const { footer } = state;

  return (
    <footer id='footer' className='bg-gray-900 text-white py-8 sm:py-12 lg:py-16'>
      <div className='container mx-auto px-2 sm:px-4 lg:px-8'>
        <div className='flex flex-col items-center'>
          <div className='space-y-3 sm:space-y-4 mb-6'>
            <h3 className='text-xl sm:text-2xl font-bold text-yellow-400 mb-2 sm:mb-4'>Contact Us</h3>
            <div className='space-y-2 sm:space-y-3'>
              <div className='flex items-center space-x-2 sm:space-x-3'>
                <FaEnvelope className='text-yellow-400 text-base sm:text-lg' />
                <span className='text-sm sm:text-base lg:text-lg'>{footer.email}</span>
              </div>
              <div className='flex items-center space-x-2 sm:space-x-3'>
                <FaPhone className='text-yellow-400 text-base sm:text-lg' />
                <span className='text-sm sm:text-base lg:text-lg'>{footer.phone}</span>
              </div>
              <div className='flex items-center space-x-2 sm:space-x-3'>
                <FaMapMarkerAlt className='text-yellow-400 text-base sm:text-lg' />
                <span className='text-sm sm:text-base lg:text-lg'>{footer.address}</span>
              </div>
            </div>
          </div>
        </div>
        <div className='border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center'>
          <p className='text-xs sm:text-sm text-gray-400'>
            &copy; 2025 Rebel Gym. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 