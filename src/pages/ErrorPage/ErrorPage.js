import React from 'react';
import './ErrorPage.css';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div id="error" className="text-center mt-4">
      <h1 className='error-title'>Oops!</h1>
      <p>You are trying to access a page that doesn't exist on this website.</p>
      <p>
        <span>404 </span>
        <i>Not Found</i>
      </p>
      <span>Return to</span> <Link className='return fw-semibold' to="/">Home</Link>
    </div>
  );
};

export default ErrorPage;