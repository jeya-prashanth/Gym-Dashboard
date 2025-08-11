import React, { useCallback } from 'react';
import { useAppContext } from '../context/AppContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaDumbbell, FaUserFriends, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

// Default navigation links
const DEFAULT_LINKS = [
  { label: 'Home', url: '/' },
  { label: 'Classes', url: '/classes' },
  { label: 'Membership', url: '/membership' },
  { label: 'About', url: '/about' },
  { label: 'Contact', url: '/contact' }
];

const Navbar = () => {
  const { state } = useAppContext();
  const { navbar = {} } = state || {};
  
  // Debug: Check the navbar data
  console.log('Navbar data:', navbar);
  
  // Get links from context or use defaults
  const navLinks = React.useMemo(() => {
    try {
      // If we have valid navbar data with links, use it
      if (navbar?.links && Array.isArray(navbar.links) && navbar.links.length > 0) {
        return navbar.links.map(link => ({
          label: link.label || '',
          url: link.url || '#',
          _id: link._id
        }));
      }
      
      // Fallback to default links
      console.warn('Using default navigation links');
      return DEFAULT_LINKS;
      
    } catch (error) {
      console.error('Error processing navigation links:', error);
      return DEFAULT_LINKS;
    }
  }, [navbar]);
  
  console.log('Rendering nav links:', navLinks);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle navigation with smooth transitions
  const handleNavigation = useCallback((e, link) => {
    e.preventDefault();
    
    // If we're on the homepage and it's a scrollable section
    if (location.pathname === '/' && (link.url === '/classes' || link.url === '/contact')) {
      if (link.url === '/classes') {
        const classesSection = document.getElementById('classes');
        if (classesSection) {
          classesSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (link.url === '/contact') {
        const footerSection = document.getElementById('footer');
        if (footerSection) {
          footerSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } 
    // For Membership and About pages, navigate with smooth transition
    else if (link.url && link.url !== location.pathname) {
      // Add fade-out effect
      document.documentElement.style.scrollBehavior = 'smooth';
      document.body.style.opacity = '0.8';
      document.body.style.transition = 'opacity 200ms ease-in-out';
      
      // Navigate after the fade-out
      setTimeout(() => {
        navigate(link.url);
        // Reset styles after navigation
        setTimeout(() => {
          document.body.style.opacity = '1';
          document.body.style.transition = 'opacity 300ms ease-in-out';
        }, 100);
      }, 200);
    }
  }, [location.pathname, navigate]);

  const getIcon = (linkLabel) => {
    switch (linkLabel) {
      case 'Home':
        return FaHome;
      case 'Classes':
        return FaDumbbell;
      case 'Membership':
        return FaUserFriends;
      case 'About':
        return FaInfoCircle;
      case 'Contact':
        return FaEnvelope;
      default:
        return FaHome;
    }
  };

  // Handle click for any navigation link
  const handleLinkClick = (e, link) => {
    handleNavigation(e, link);
  };
  
  // Determine if a link is active
  const isActive = (url) => {
    if (url === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(url);
  };
  
  // Get active link styles
  const getActiveStyles = (isActive) => {
    return isActive 
      ? 'bg-blue-900 text-white' 
      : 'hover:bg-gray-700';
  };

  // If no links, use defaults
  const linksToRender = navLinks.length ? navLinks : DEFAULT_LINKS;
  
  // Add smooth transition on page load
  React.useEffect(() => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 300ms ease-in-out';
  }, [location.pathname]);

  return (
    <nav className='bg-gray-800 text-white shadow-lg'>
      <div className='w-full'>
        <div className='flex justify-center w-full'>
          <ul className='grid grid-cols-3 sm:grid-cols-5 w-full max-w-6xl gap-1 sm:gap-2 py-2 sm:py-4 px-2 transition-all duration-300'>
            {linksToRender.map((link, index) => {
              const IconComponent = getIcon(link.label);
              const active = isActive(link.url);
              
              return (
                <li key={index} className='w-full relative group'>
                  <a
                    href={link.url}
                    onClick={(e) => handleLinkClick(e, link)}
                    className={`flex flex-col items-center justify-center p-2 rounded-lg transition-colors duration-200 font-medium text-sm sm:text-base text-center w-full ${getActiveStyles(active)}`}
                  >
                    <IconComponent className='text-sm sm:text-lg mb-1' />
                    <span className='text-xs sm:text-sm'>{link.label}</span>
                    {/* Active indicator */}
                    <span 
                      className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-blue-400 rounded-t-full transition-all duration-300 ${active ? 'opacity-100' : 'opacity-0'}`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 