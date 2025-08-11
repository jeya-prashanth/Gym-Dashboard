import React from 'react';
import { FaDumbbell, FaUsers, FaClock, FaTrophy } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import cardio from '../assets/cardio.png';
import yoga from '../assets/yoga.png';
import strength from '../assets/strength.png';

const HomePage = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Main Content */}
      <main className='container mx-auto px-2 sm:px-4 lg:px-8 py-6 sm:py-12'>
        {/* Hero Section */}
        <div className='text-center mb-10 sm:mb-16'>
          <h2 className='text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6'>
            Welcome to Rebel Gym
          </h2>
          <p className='text-base sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto'>
            Transform your life with our state of the art facilities, expert trainers, 
            and supportive community. Start your fitness journey today!
          </p>
          <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center'>
            <button className='border-2 border-[#2196f3] bg-[#2196f3] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:border-2 hover:border-[#2196f3] hover:text-[#2196f3] transition-colors'>
              Join Now
            </button>
            <button className='border-2 border-[#2196f3] text-[#2196f3] px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold text-base sm:text-lg hover:bg-[#2196f3] hover:text-white transition-colors'>
              View Classes
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className='mb-10 sm:mb-16'>
          <h3 className='text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12'>
            Why Choose Rebel Gym?
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8'>
            <div className='text-center p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow'>
              <FaDumbbell className='text-3xl sm:text-4xl text-[#1c1f2a] mx-auto mb-2 sm:mb-4' />
              <h4 className='text-lg sm:text-xl font-semibold mb-1 sm:mb-2'>Premium Equipment</h4>
              <p className='text-gray-600 text-sm sm:text-base'>
                State of the art fitness equipment for all your training needs
              </p>
            </div>
            <div className='text-center p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow'>
              <FaUsers className='text-3xl sm:text-4xl text-[#1c1f2a] mx-auto mb-2 sm:mb-4' />
              <h4 className='text-lg sm:text-xl font-semibold mb-1 sm:mb-2'>Expert Trainers</h4>
              <p className='text-gray-600 text-sm sm:text-base'>
                Certified personal trainers to guide your fitness journey
              </p>
            </div>
            <div className='text-center p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow'>
              <FaClock className='text-3xl sm:text-4xl text-[#1c1f2a] mx-auto mb-2 sm:mb-4' />
              <h4 className='text-lg sm:text-xl font-semibold mb-1 sm:mb-2'>24/7 Access</h4>
              <p className='text-gray-600 text-sm sm:text-base'>
                Work out anytime with our round-the-clock facility access
              </p>
            </div>
            <div className='text-center p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow'>
              <FaTrophy className='text-3xl sm:text-4xl text-[#1c1f2a] mx-auto mb-2 sm:mb-4' />
              <h4 className='text-lg sm:text-xl font-semibold mb-1 sm:mb-2'>Proven Results</h4>
              <p className='text-gray-600 text-sm sm:text-base'>
                Join thousands of members who have achieved their fitness goals
              </p>
            </div>
          </div>
        </div>

        {/* Classes Section */}
        <div id='classes' className='mb-10 sm:mb-16'>
          <h3 className='text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12'>
            Popular Classes
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            <div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
              <img src={strength} className='h-32 sm:h-48 w-96' alt="" />
              <div className='p-4 sm:p-6'>
                <h4 className='text-lg sm:text-xl font-semibold mb-1 sm:mb-2'>Strength Training</h4>
                <p className='text-gray-600 text-sm sm:text-base mb-2 sm:mb-4'>
                  Build muscle and increase strength with our expert-led sessions
                </p>
                <button className='text-blue-600 font-semibold hover:text-blue-700 text-sm sm:text-base'>
                  Learn More →
                </button>
              </div>
            </div>
            <div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
              <img src={cardio} className='h-32 sm:h-48 w-96' alt="" />
              <div className='p-4 sm:p-6'>
                <h4 className='text-lg sm:text-xl font-semibold mb-1 sm:mb-2'>Cardio Blast</h4>
                <p className='text-gray-600 text-sm sm:text-base mb-2 sm:mb-4'>
                  High-intensity cardio workouts to boost your endurance
                </p>
                <button className='text-green-600 font-semibold hover:text-green-700 text-sm sm:text-base'>
                  Learn More →
                </button>
              </div>
            </div>
            <div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
              <img src={yoga} className='h-32 sm:h-48 w-96' alt="" />
              <div className='p-4 sm:p-6'>
                <h4 className='text-lg sm:text-xl font-semibold mb-1 sm:mb-2'>Yoga & Flexibility</h4>
                <p className='text-gray-600 text-sm sm:text-base mb-2 sm:mb-4'>
                  Improve flexibility and find inner peace with our yoga classes
                </p>
                <button className='text-purple-600 font-semibold hover:text-purple-700 text-sm sm:text-base'>
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className='bg-gradient-to-r from-purple-600 to-[#1c1f2a] text-white rounded-lg p-4 sm:p-8 text-center'>
          <h3 className='text-2xl sm:text-3xl font-bold mb-2 sm:mb-4'>
            Ready to Start Your Fitness Journey?
          </h3>
          <p className='text-base sm:text-xl mb-4 sm:mb-6 opacity-90'>
            Join PowerFit Gym today and transform your life with our comprehensive fitness programs
          </p>
          <button className='bg-white text-blue-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 transition-colors'>
            Get Started Today
          </button>
        </div>
      </main>
    </div>
  );
};

export default HomePage; 