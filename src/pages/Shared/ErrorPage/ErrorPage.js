import React, { useContext } from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const ErrorPage = () => {
  const {logOut} = useContext(AuthContext);
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error);

  const handleLogout = () => {
    logOut()
      .then(() => {
        localStorage.removeItem('accessToken');
        navigate('/login')
      })
      .catch(err => console.error(err));
  }

  return (
    <div id="error" className="text-center mt-4">
      <h2 className='font-semibold text-secondary text-2xl mb-2'>Something went wrong!!!</h2>
      <p className='my-2'>
        <span className='text-red-400'>{error.status} </span>
        <i>{error.statusText || error.message}</i>
      </p>
      <p>Return to 
        <Link to='/' className='font-semibold text-indigo-400'>Home</Link> or <button onClick={handleLogout} className='btn btn-secondary btn-xs text-white'>Log out</button> and 
        <Link to='/login' class='font-semibold text-blue-400 hover:text-blue-500'>Login</Link> again.</p>
    </div>
  );
};

export default ErrorPage;