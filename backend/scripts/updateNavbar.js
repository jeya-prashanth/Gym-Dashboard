import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Component from '../models/Component.js';

dotenv.config();

const updateNavbarLinks = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    const defaultLinks = [
      { label: 'Home', url: '/' },
      { label: 'Classes', url: '/classes' },
      { label: 'Membership', url: '/membership' },
      { label: 'About', url: '/about' },
      { label: 'Contact', url: '/contact' }
    ];

    let component = await Component.findOne();
    
    if (!component) {
      component = new Component();
    }

    component.navbar = { links: defaultLinks };
    await component.save();
    
    console.log('Navbar links updated successfully!');
    console.log('Current links:', component.navbar.links);
    
  } catch (error) {
    console.error('Error updating navbar links:', error);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
};

updateNavbarLinks();
