import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import Membership from './components/Membership';
import About from './components/About';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <div className='App'>
          <Header />
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/membership' element={<Membership />} />
            <Route path='/about' element={<About />} />
          </Routes>
          <Footer />
          <Navigation />
          <ToastContainer
            position='top-right'
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
