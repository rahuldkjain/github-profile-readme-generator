import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo';
import './404.css';

const NotFoundPage = () => (
  <div className="not-found-container">
    <SEO 
      title="Page Not Found - Error 404"
      description="This page could not be found. Return to the homepage to continue exploring our site."
      meta={[
        { name: 'robots', content: 'noindex, follow' }
      ]}
    />
    
    <div className="not-found-content">
      <h1>404</h1>
      <h2>Oops! This page doesn't exist.</h2>
      <p>The page you are looking for seems to be missing.</p>
      <Link to="/" className="home-button">Return to Homepage</Link>
    </div>
</div>
);

export default NotFoundPage;
