import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div id="error" className="text-center mt-4">
      <h2 className='font-semibold text-secondary text-2xl mb-2'>Something went wrong!!!</h2>
      <p className='mt-2'>
        <span className='text-red-400'>{error.status} </span>
        <i>{error.statusText || error.message}</i>
      </p>
      <span>Return to</span> <Link className='font-semibold text-primary' to="/">Home</Link>
    </div>
  );
};

export default ErrorPage;