// src/components/DisplayEmployee.jsx
import React from 'react';

const DisplaySimp = ({ character, image, quote }) => {
  return (
    <div >
        <p>{character}</p>
        <img src={image}/>
        <p>{quote}</p>  
    </div>
  );
};

export default DisplaySimp;