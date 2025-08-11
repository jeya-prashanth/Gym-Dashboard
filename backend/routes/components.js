import express from 'express';
import Component from '../models/Component.js';

const router = express.Router();

// Get all components data
router.get('/', async (req, res) => {
  try {
    let components = await Component.findOne();
    
    if (!components) {
      // Create default components if none exist
      components = new Component();
      await components.save();
    }
    
    res.json({
      success: true,
      data: components
    });
  } catch (error) {
    console.error('Error fetching components:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch components'
    });
  }
});

// Update header component
router.put('/header', async (req, res) => {
  try {
    const { title, imageUrl } = req.body;
    
    let components = await Component.findOne();
    if (!components) {
      components = new Component();
    }
    
    components.header = {
      title: title || components.header.title,
      imageUrl: imageUrl || components.header.imageUrl
    };
    
    await components.save();
    
    res.json({
      success: true,
      message: 'Header updated successfully',
      data: components.header
    });
  } catch (error) {
    console.error('Error updating header:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update header'
    });
  }
});

// Update navbar component
router.put('/navbar', async (req, res) => {
  try {
    const { links } = req.body;
    
    if (!links || !Array.isArray(links)) {
      return res.status(400).json({
        success: false,
        message: 'Links array is required'
      });
    }
    
    let components = await Component.findOne();
    if (!components) {
      components = new Component();
    }
    
    components.navbar.links = links;
    await components.save();
    
    res.json({
      success: true,
      message: 'Navbar updated successfully',
      data: components.navbar
    });
  } catch (error) {
    console.error('Error updating navbar:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update navbar'
    });
  }
});

// Update footer component
router.put('/footer', async (req, res) => {
  try {
    const { email, phone, address } = req.body;
    
    let components = await Component.findOne();
    if (!components) {
      components = new Component();
    }
    
    components.footer = {
      email: email || components.footer.email,
      phone: phone || components.footer.phone,
      address: address || components.footer.address
    };
    
    await components.save();
    
    res.json({
      success: true,
      message: 'Footer updated successfully',
      data: components.footer
    });
  } catch (error) {
    console.error('Error updating footer:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update footer'
    });
  }
});

// Update specific navbar link
router.put('/navbar/link/:index', async (req, res) => {
  try {
    const { index } = req.params;
    const { label, url } = req.body;
    
    if (index < 0 || index > 2) {
      return res.status(400).json({
        success: false,
        message: 'Invalid link index. Must be 0, 1, or 2'
      });
    }
    
    let components = await Component.findOne();
    if (!components) {
      components = new Component();
    }
    
    if (!components.navbar.links[index]) {
      components.navbar.links[index] = { label: '', url: '' };
    }
    
    if (label !== undefined) {
      components.navbar.links[index].label = label;
    }
    if (url !== undefined) {
      components.navbar.links[index].url = url;
    }
    
    await components.save();
    
    res.json({
      success: true,
      message: 'Navbar link updated successfully',
      data: components.navbar.links[index]
    });
  } catch (error) {
    console.error('Error updating navbar link:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update navbar link'
    });
  }
});

export default router; 