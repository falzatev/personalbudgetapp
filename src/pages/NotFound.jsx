import React from 'react';
import { Link } from "react-router-dom";
import '@styles/NotFound.scss';

const NotFound = () => {
  return (
    <div className='not-found'>
      <div className='not-found-container'>
        <h1>404 not found</h1>
        <p>oops! It seems like you're lost</p>
        <Link to="/home">
          <button className='btnBack' >Back to save place</button>
        </Link>
      </div>
        
    </div>
  );
};

export default NotFound;
