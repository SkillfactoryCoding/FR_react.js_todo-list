import React from 'react';

import './index.css';

const Button = ({ name, onClick, customClass }) => {
  return (
    <button
      className={`btn ${customClass ? customClass : ''}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;