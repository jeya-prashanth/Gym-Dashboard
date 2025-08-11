import React, { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';

const AppContext = createContext();

const initialState = {
  header: {
    title: 'Rebel Gym',
    imageUrl: ''
  },
  navbar: {
    links: [
      { label: 'Home', url: '/' },
      { label: 'Classes', url: '/classes' },
      { label: 'Membership', url: '/membership' },
      { label: 'About', url: '/about' },
      { label: 'Contact', url: '/contact' }
    ]
  },
  footer: {
    email: 'info@rebelgym.com',
    phone: '+94779876543',
    address: 'Main Street, Colombo, Sri Lanka',
  }
};

const appReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_HEADER':
      return {
        ...state,
        header: { ...state.header, ...action.payload }
      };
    case 'UPDATE_NAVBAR':
      return {
        ...state,
        navbar: { ...state.navbar, ...action.payload }
      };
    case 'UPDATE_FOOTER':
      return {
        ...state,
        footer: { ...state.footer, ...action.payload }
      };
    case 'UPDATE_NAVBAR_LINK':
      const updatedLinks = [...state.navbar.links];
      updatedLinks[action.payload.index] = action.payload.link;
      return {
        ...state,
        navbar: { ...state.navbar, links: updatedLinks }
      };
    case 'LOAD_DATA':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const API_URL = 'http://localhost:5000/api/components';

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [isLoading, setIsLoading] = React.useState(true);

  // Load data from backend on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data from backend...');
        const response = await axios.get(API_URL);
        console.log('Backend response:', {
          success: response.data.success,
          data: response.data.data ? {
            header: response.data.data.header ? '' : '',
            navbar: response.data.data.navbar ? {
              linksCount: response.data.data.navbar.links?.length || 0,
              links: response.data.data.navbar.links?.map(l => ({
                label: l.label,
                url: l.url,
                _id: l._id
              }))
            } : '',
            footer: response.data.data.footer ? '' : ''
          } : 'No data'
        });
        
        if (response.data.success && response.data.data) {
          const { header, navbar, footer } = response.data.data;
          
          // Ensure we have valid navbar links
          const validNavbar = {
            links: Array.isArray(navbar?.links) ? navbar.links : []
          };
          
          console.log('Dispatching data to state:', {
            header: header ? '' : '',
            navbar: {
              linksCount: validNavbar.links.length,
              firstFewLinks: validNavbar.links.slice(0, 3).map(l => l.label)
            },
            footer: footer ? '' : ''
          });
          
          dispatch({ 
            type: 'LOAD_DATA', 
            payload: { 
              header: header || initialState.header,
              navbar: validNavbar,
              footer: footer || initialState.footer
            } 
          });
          
          // Save to localStorage as fallback
          const dataToSave = { 
            header: header || initialState.header,
            navbar: validNavbar,
            footer: footer || initialState.footer
          };
          localStorage.setItem('gymPageData', JSON.stringify(dataToSave));
          console.log('Saved to localStorage');
        } else {
          console.warn('No valid data in response');
          throw new Error('No valid data in response');
        }
      } catch (error) {
        console.error('Error fetching data from backend:', error);
        // Fallback to localStorage if backend fails
        const savedData = localStorage.getItem('gymPageData');
        console.log('Falling back to localStorage data:', savedData ? '' : 'No saved data');
        
        if (savedData) {
          try {
            const parsedData = JSON.parse(savedData);
            console.log('Parsed localStorage data:', {
              header: parsedData.header ? '' : '',
              navbar: parsedData.navbar ? {
                linksCount: parsedData.navbar.links?.length || 0
              } : '',
              footer: parsedData.footer ? '' : ''
            });
            
            dispatch({ 
              type: 'LOAD_DATA', 
              payload: {
                ...initialState,
                ...parsedData,
                navbar: {
                  ...initialState.navbar,
                  links: Array.isArray(parsedData.navbar?.links) ? 
                    parsedData.navbar.links : 
                    initialState.navbar.links
                }
              } 
            });
          } catch (parseError) {
            console.error('Error parsing localStorage data:', parseError);
            // If all else fails, use initial state
            dispatch({ type: 'LOAD_DATA', payload: initialState });
          }
        } else {
          // No saved data, use initial state
          console.log('Using initial state');
          dispatch({ type: 'LOAD_DATA', payload: initialState });
        }
      } finally {
        console.log('Finished loading data');
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Save data to localStorage whenever state changes (as fallback)
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('gymPageData', JSON.stringify(state));
    }
  }, [state, isLoading]);

  const updateHeader = async (updates) => {
    try {
      const response = await axios.put(`${API_URL}/header`, updates);
      if (response.data.success) {
        dispatch({ type: 'UPDATE_HEADER', payload: updates });
      }
    } catch (error) {
      console.error('Error updating header:', error);
      // Update local state even if backend fails
      dispatch({ type: 'UPDATE_HEADER', payload: updates });
    }
  };

  const updateNavbar = async (updates) => {
    try {
      const response = await axios.put(`${API_URL}/navbar`, updates);
      if (response.data.success) {
        dispatch({ type: 'UPDATE_NAVBAR', payload: updates });
      }
    } catch (error) {
      console.error('Error updating navbar:', error);
      dispatch({ type: 'UPDATE_NAVBAR', payload: updates });
    }
  };

  const updateFooter = async (updates) => {
    try {
      const response = await axios.put(`${API_URL}/footer`, updates);
      if (response.data.success) {
        dispatch({ type: 'UPDATE_FOOTER', payload: updates });
      }
    } catch (error) {
      console.error('Error updating footer:', error);
      dispatch({ type: 'UPDATE_FOOTER', payload: updates });
    }
  };

  const updateNavbarLink = async (index, link) => {
    try {
      const response = await axios.put(`${API_URL}/navbar/link/${index}`, link);
      if (response.data.success) {
        dispatch({ type: 'UPDATE_NAVBAR_LINK', payload: { index, link } });
      }
    } catch (error) {
      console.error('Error updating navbar link:', error);
      dispatch({ type: 'UPDATE_NAVBAR_LINK', payload: { index, link } });
    }
  };

  const value = {
    state,
    isLoading,
    updateHeader,
    updateNavbar,
    updateFooter,
    updateNavbarLink
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}; 