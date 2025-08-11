import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { FaSave, FaUpload, FaEye, FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Dashboard = () => {
  const { state, updateHeader, updateNavbar, updateFooter, updateNavbarLink } = useAppContext();
  const [imagePreview, setImagePreview] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  // Cloudinary configuration - Update these with your actual values
  const CLOUDINARY_UPLOAD_PRESET = 'task_dashboard'; // Create this preset in your Cloudinary dashboard
  const CLOUDINARY_CLOUD_NAME = 'drnwiye6r'; // Your cloud name

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file');
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast.error('Image size should be less than 10MB');
      return;
    }

    // Preview image
    const reader = new FileReader();
    reader.onload = (e) => setImagePreview(e.target.result);
    reader.readAsDataURL(file);

    setIsUploading(true);

    try {
      console.log('Starting upload with preset:', CLOUDINARY_UPLOAD_PRESET);
      console.log('File details:', { name: file.name, type: file.type, size: file.size });
      
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Cloudinary error response:', errorData);
        
        // If preset not found, try alternative approach
        if (errorData.error?.message?.includes('preset not found')) {
          throw new Error('Upload preset not found. Please create a preset in your Cloudinary dashboard or contact support.');
        }
        
        throw new Error(errorData.error?.message || `Upload failed with status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Success response:', data);

      if (data.secure_url) {
        updateHeader({ imageUrl: data.secure_url });
        toast.success('Image uploaded successfully!');
        setImagePreview(null);
      } else {
        throw new Error('No secure URL received from Cloudinary');
      }
    } catch (error) {
      console.error('Upload error:', error);
      toast.error(`Failed to upload image: ${error.message}`);
    } finally {
      setIsUploading(false);
    }
  };

  const handleHeaderSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    updateHeader({
      title: formData.get('title')
    });
    toast.success('Header updated successfully!');
  };

  const handleNavbarSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const links = [];
    for (let i = 0; i < 3; i++) {
      links.push({
        label: formData.get(`label${i}`),
        url: formData.get(`url${i}`)
      });
    }
    
    updateNavbar({ links });
    toast.success('Navigation updated successfully!');
  };

  const handleFooterSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    updateFooter({
      email: formData.get('email'),
      phone: formData.get('phone'),
      address: formData.get('address')
    });
    toast.success('Footer updated successfully!');
  };

  return (
    <div className='min-h-screen bg-gray-100 py-4 sm:py-8'>
      <div className='container mx-auto px-2 sm:px-4 lg:px-8'>
        <div className='max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto'>
          <h1 className='text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center'>
            Gym Page Dashboard
          </h1>

          {/* Header Section */}
          <div className='bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6 sm:mb-8'>
            <h2 className='text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-blue-600'>Header Settings</h2>
            <form onSubmit={handleHeaderSubmit} className='space-y-3 sm:space-y-4'>
              <div>
                <label className='block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2'>
                  Header Title
                </label>
                <input
                  type='text'
                  name='title'
                  defaultValue={state.header.title}
                  className='w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base'
                  placeholder='Enter header title'
                />
              </div>

              <div>
                <label className='block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2'>
                  Header Image
                </label>
                <div className='space-y-2 sm:space-y-4'>
                  <input
                    type='file'
                    accept='image/*'
                    onChange={handleImageUpload}
                    className='w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base'
                    disabled={isUploading}
                  />
                  {isUploading && (
                    <div className='text-blue-600 flex items-center space-x-2'>
                      <FaUpload className='animate-spin' />
                      <span>Uploading...</span>
                    </div>
                  )}
                  {imagePreview && (
                    <div className='relative inline-block'>
                      <img
                        src={imagePreview}
                        alt='Preview'
                        className='w-20 h-20 sm:w-32 sm:h-32 object-cover rounded-lg'
                      />
                      <button
                        type='button'
                        onClick={() => setImagePreview(null)}
                        className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1'
                      >
                        <FaTimes size={12} />
                      </button>
                    </div>
                  )}
                  {state.header.imageUrl && (
                    <div className='flex items-center space-x-2'>
                      <FaEye className='text-green-500' />
                      <span className='text-xs sm:text-sm text-gray-600'>Image uploaded successfully</span>
                    </div>
                  )}
                </div>
              </div>

              <button
                type='submit'
                className='bg-blue-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center space-x-2 text-sm sm:text-base'
              >
                <FaSave />
                <span>Save Header</span>
              </button>
            </form>
          </div>

          {/* Navbar Section */}
          <div className='bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6 sm:mb-8'>
            <h2 className='text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-green-600'>Navigation Settings</h2>
            <form onSubmit={handleNavbarSubmit} className='space-y-3 sm:space-y-4'>
              {state.navbar.links.map((link, index) => (
                <div key={index} className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4'>
                  <div>
                    <label className='block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2'>
                      Link {index + 1} Label
                    </label>
                    <input
                      type='text'
                      name={`label${index}`}
                      defaultValue={link.label}
                      className='w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base'
                      placeholder='Enter link label'
                    />
                  </div>
                  <div>
                    <label className='block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2'>
                      Link {index + 1} URL
                    </label>
                    <input
                      type='text'
                      name={`url${index}`}
                      defaultValue={link.url}
                      className='w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base'
                      placeholder='Enter link URL'
                    />
                  </div>
                </div>
              ))}
              <button
                type='submit'
                className='bg-green-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md hover:bg-green-700 transition-colors flex items-center space-x-2 text-sm sm:text-base'
              >
                <FaSave />
                <span>Save Navigation</span>
              </button>
            </form>
          </div>

          {/* Footer Section */}
          <div className='bg-white rounded-lg shadow-md p-4 sm:p-6'>
            <h2 className='text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-purple-600'>Footer Settings</h2>
            <form onSubmit={handleFooterSubmit} className='space-y-3 sm:space-y-4'>
              <div>
                <label className='block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2'>
                  Email Address
                </label>
                <input
                  type='email'
                  name='email'
                  defaultValue={state.footer.email}
                  className='w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base'
                  placeholder='Enter email address'
                />
              </div>
              <div>
                <label className='block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2'>
                  Phone Number
                </label>
                <input
                  type='tel'
                  name='phone'
                  defaultValue={state.footer.phone}
                  className='w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base'
                  placeholder='Enter phone number'
                />
              </div>
              <div>
                <label className='block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2'>
                  Address
                </label>
                <textarea
                  name='address'
                  defaultValue={state.footer.address}
                  rows='3'
                  className='w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base'
                  placeholder='Enter address'
                />
              </div>
              <button
                type='submit'
                className='bg-purple-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md hover:bg-purple-700 transition-colors flex items-center space-x-2 text-sm sm:text-base'
              >
                <FaSave />
                <span>Save Footer</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 