# Gym Page Backend

A Node.js backend application for managing dynamic content of a gym website. Built with Express.js, MongoDB, and Mongoose.

## Features

- RESTful API for managing header, navbar, and footer components
- MongoDB database with Mongoose ODM
- CORS enabled for frontend integration
- Environment variable configuration
- Error handling middleware
- Automatic default data creation

## Prerequisites

- Node.js (v14 or higher)
- MongoDB installed and running locally
- npm or yarn package manager

## Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```bash
cp env.example .env
```

4. Update the `.env` file with your MongoDB connection string:
```
MONGODB_URI=mongodb://localhost:27017/gym_page
PORT=5000
NODE_ENV=development
```

## Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on port 5000 (or the port specified in your .env file).

## API Endpoints

### Components
- `GET /api/components` - Get all component data
- `PUT /api/components/header` - Update header component
- `PUT /api/components/navbar` - Update navbar component
- `PUT /api/components/footer` - Update footer component
- `PUT /api/components/navbar/link/:index` - Update specific navbar link

### Health Check
- `GET /health` - Server health status

## Database Schema

The application uses a single `Component` collection with the following structure:

```javascript
{
  header: {
    title: String,
    imageUrl: String
  },
  navbar: {
    links: [
      {
        label: String,
        url: String
      }
    ]
  },
  footer: {
    email: String,
    phone: String,
    address: String
  }
}
```

## Error Handling

The application includes comprehensive error handling for:
- MongoDB validation errors
- Duplicate key errors
- Invalid ID format errors
- General server errors

## CORS Configuration

CORS is enabled to allow requests from your React frontend. Update the CORS configuration in `server.js` if you need to restrict origins.

## Environment Variables

- `MONGODB_URI`: MongoDB connection string
- `PORT`: Server port (default: 5000)
- `NODE_ENV`: Environment mode (development/production)

## Project Structure

```
backend/
├── config/
│   └── database.js
├── middleware/
│   └── errorHandler.js
├── models/
│   └── Component.js
├── routes/
│   └── components.js
├── .env
├── env.example
├── package.json
├── README.md
└── server.js
```

## Frontend Integration

To connect your React frontend to this backend:

1. Update your frontend API calls to use the backend endpoints
2. Ensure CORS is properly configured
3. Handle the API responses in your frontend components

## Troubleshooting

- **MongoDB Connection Error**: Ensure MongoDB is running and the connection string is correct
- **Port Already in Use**: Change the PORT in your .env file
- **CORS Issues**: Check that your frontend URL is allowed in the CORS configuration

## License

MIT 