import mongoose from 'mongoose';

const linkSchema = new mongoose.Schema({
  label: { type: String, required: true, trim: true },
  url: { type: String, required: true, trim: true },
});

const headerSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, default: 'Rebel Gym' },
  imageUrl: { type: String, trim: true }
});

const navbarSchema = new mongoose.Schema({
  links: { type: [linkSchema], required: true,
    default: [
      { label: 'Home', url: '/' },
      { label: 'Classes', url: '/classes' },
      { label: 'About', url: '/about' }
    ]
  }
});

const footerSchema = new mongoose.Schema({
  email: { type: String, required: true, trim: true, default: 'info@rebelgym.com' },
  phone: { type: String, required: true, trim: true, default: '+94779876543' },
  address: { type: String, required: true, trim: true, default: 'Main Street, Colombo, Sri Lanka' }
});

const componentSchema = new mongoose.Schema({
  header: { type: headerSchema, required: true, default: {} },
  navbar: { type: navbarSchema, required: true, default: {} },
  footer: { type: footerSchema, required: true, default: {} }
}, {
  timestamps: true
});

const Component = mongoose.model('Component', componentSchema);

export default Component; 