import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="container mx-auto text-center py-8">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <p className="text-gray-600">Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">
        Go back to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
