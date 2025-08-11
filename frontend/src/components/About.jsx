import React from 'react';
import { FaDumbbell, FaHeartbeat, FaUsers, FaMedal } from 'react-icons/fa';
import interior from '../assets/interior.png';

const About = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <section className='bg-[#1c1f2a] text-white py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold mb-6'>About Rebel Gym</h1>
          <p className='text-xl max-w-3xl mx-auto'>
            Empowering your fitness journey with world-class facilities and expert guidance since 2010
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className='py-16 px-4'>
        <div className='container mx-auto max-w-6xl'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-800 mb-4'>Our Mission</h2>
            <div className='w-20 h-1 bg-[#1c1f2a] rounded-full mx-auto mb-6'></div>
            <p className='text-gray-600 max-w-3xl mx-auto'>
              At Rebel Gym, we believe fitness should be accessible to everyone, regardless of age, 
              gender, or fitness level. Our mission is to provide a supportive and motivating 
              environment where members can achieve their health and fitness goals.
            </p>
          </div>

          {/* Features */}
          <div className='grid md:grid-cols-3 gap-8 mb-16'>
            <div className='bg-white p-6 rounded-lg shadow-md text-center'>
              <div className='text-4xl text-[#1c1f2a] mb-4 flex justify-center'>
                <FaDumbbell />
              </div>
              <h3 className='text-xl font-semibold mb-3'>Modern Equipment</h3>
              <p className='text-gray-600'>
                State-of-the-art fitness equipment from leading brands to support all your workout needs.
              </p>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-md text-center'>
              <div className='text-4xl text-[#1c1f2a] mb-4 flex justify-center'>
                <FaHeartbeat />
              </div>
              <h3 className='text-xl font-semibold mb-3'>Expert Trainers</h3>
              <p className='text-gray-600'>
                Certified personal trainers dedicated to helping you reach your fitness goals safely and effectively.
              </p>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-md text-center'>
              <div className='text-4xl text-[#1c1f2a] mb-4 flex justify-center'>
                <FaUsers />
              </div>
              <h3 className='text-xl font-semibold mb-3'>Community</h3>
              <p className='text-gray-600'>
                Join a supportive community of fitness enthusiasts who motivate and inspire each other.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className='bg-gray-100 py-16 px-4'>
        <div className='container mx-auto max-w-6xl'>
          <div className='flex flex-col md:flex-row items-center'>
            <div className='md:w-1/2 mb-8 md:mb-0 md:pr-8'>
              <h2 className='text-3xl font-bold text-gray-800 mb-6'>Our Story</h2>
              <div className='space-y-4 text-gray-600'>
                <p>
                  Founded in 2024, Rebel Gym started as a small fitness center with a big dream, to revolutionize the way 
                  people approach health and fitness. What began as a single location has grown into a premier fitness 
                  destination with multiple facilities across the region.
                </p>
                <p>
                  Our founder, Jeyaprashanth, envisioned a place where people of all fitness levels could feel welcome and 
                  supported in their journey to better health. Today, that vision lives on through our dedicated team of 
                  trainers and staff who are passionate about helping you succeed.
                </p>
              </div>
            </div>
            <div className='md:w-1/2'>
              <div className='bg-gray-300 h-64 md:h-96 rounded-lg overflow-hidden'>
                <div className='w-full h-full flex items-center justify-center bg-gray-200 text-gray-400'>
                  <img src={interior} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='py-16 px-4'>
        <div className='container mx-auto max-w-6xl text-center'>
          <h2 className='text-3xl font-bold text-gray-800 mb-12'>Our Core Values</h2>
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='p-6'>
              <div className='text-4xl text-[#1c1f2a] mb-4 flex justify-center'>
                <FaMedal />
              </div>
              <h3 className='text-xl font-semibold mb-3'>Excellence</h3>
              <p className='text-gray-600'>
                We strive for excellence in everything we do, from our facilities to our training programs.
              </p>
            </div>
            <div className='p-6'>
              <div className='text-4xl text-[#1c1f2a] mb-4 flex justify-center'>
                <FaHeartbeat />
              </div>
              <h3 className='text-xl font-semibold mb-3'>Health First</h3>
              <p className='text-gray-600'>
                Your health and safety are our top priorities in every aspect of your fitness journey.
              </p>
            </div>
            <div className='p-6'>
              <div className='text-4xl text-[#1c1f2a] mb-4 flex justify-center'>
                <FaUsers />
              </div>
              <h3 className='text-xl font-semibold mb-3'>Community</h3>
              <p className='text-gray-600'>
                We believe in building strong, supportive communities that inspire and motivate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
