import React from 'react';
import { FaCheck, FaClock, FaUsers, FaTrophy, FaStar, FaDumbbell, FaHeart, FaShieldAlt } from 'react-icons/fa';

const Membership = () => {
  const membershipPlans = [
    {
      name: '1 Week Plan',
      price: 'LKR 2,000',
      duration: '7 Days',
      description: 'Perfect for trying out our gym',
      features: [
        'Access to all gym equipment',
        'Group fitness classes',
        'Locker room access',
        'Free consultation',
        'Basic fitness assessment'
      ],
      popular: false,
      icon: FaClock
    },
    {
      name: '1 Month Plan',
      price: 'LKR 5,000',
      duration: '30 Days',
      description: 'Great for short-term fitness goals',
      features: [
        'All Week Plan features',
        'Personal trainer session (1x)',
        'Nutrition consultation',
        'Progress tracking',
        'Access to swimming pool',
        'Spa & sauna access'
      ],
      popular: true,
      icon: FaUsers
    },
    {
      name: '1 Year Plan',
      price: 'LKR 50,000',
      duration: '365 Days',
      description: 'Best value for long-term commitment',
      features: [
        'All Month Plan features',
        'Unlimited personal training',
        'Custom meal plans',
        'Body composition analysis',
        'Priority booking for classes',
        'Guest passes (2 per month)',
        'Free fitness gear',
        'Exclusive member events'
      ],
      popular: false,
      icon: FaTrophy
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <div className="bg-[#1c1f2a] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Choose Your Fitness Journey
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Transform your life with our flexible membership plans designed to
            fit your schedule and goals
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-full">
              <FaDumbbell className="text-yellow-300" />
              <span className="text-[#1c1f2a]">Premium Equipment</span>
            </div>
            <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-full">
              <FaUsers className="text-yellow-300" />
              <span className="text-[#1c1f2a]">Expert Trainers</span>
            </div>
            <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-full">
              <FaHeart className="text-yellow-300" />
              <span className="text-[#1c1f2a]">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Membership Plans */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Membership Plans
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select the perfect plan that aligns with your fitness goals and
            schedule
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {membershipPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  plan.popular ? "ring-4 ring-yellow-400 scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-yellow-400 text-yellow-900 px-6 py-2 rounded-full font-bold text-sm">
                      <FaStar className="inline mr-2" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                      <IconComponent className="text-blue-600 text-2xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-blue-600">
                        {plan.price}
                      </span>
                      <span className="text-gray-500 ml-2">
                        / {plan.duration}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                    <FaShieldAlt />
                    <span>Get Started</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Additional Benefits Section */}
      <div className="px-4 py-16 mb-10 sm:mb-16">
        <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
          Why Choose Rebel Gym?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <FaDumbbell className="text-3xl sm:text-4xl text-[#1c1f2a] mx-auto mb-2 sm:mb-4" />
            <h4 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
              Premium Equipment
            </h4>
            <p className="text-gray-600 text-sm sm:text-base">
              State of the art fitness equipment for all your training needs
            </p>
          </div>
          <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <FaUsers className="text-3xl sm:text-4xl text-[#1c1f2a] mx-auto mb-2 sm:mb-4" />
            <h4 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
              Expert Trainers
            </h4>
            <p className="text-gray-600 text-sm sm:text-base">
              Certified personal trainers to guide your fitness journey
            </p>
          </div>
          <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <FaClock className="text-3xl sm:text-4xl text-[#1c1f2a] mx-auto mb-2 sm:mb-4" />
            <h4 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
              24/7 Access
            </h4>
            <p className="text-gray-600 text-sm sm:text-base">
              Work out anytime with our round-the-clock facility access
            </p>
          </div>
          <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <FaTrophy className="text-3xl sm:text-4xl text-[#1c1f2a] mx-auto mb-2 sm:mb-4" />
            <h4 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
              Proven Results
            </h4>
            <p className="text-gray-600 text-sm sm:text-base">
              Join thousands of members who have achieved their fitness goals
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Fitness Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our membership options and take
            the first step towards a healthier you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200">
              Contact Us
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-800 font-bold py-3 px-8 rounded-lg transition-colors duration-200">
              Schedule a Tour
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Membership; 