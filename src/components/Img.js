import React from 'react';
import Body from './Body';
import img from'./snapchatMe.jpeg';
import './style.css';

const Img = () => {
  return (
    <div className='divBodyImg'>
        <img src={img} /> 
        <Body />
    </div>
  )
}

export default Img;
