import React from 'react';

import './index.css';

import Button from '../Button';

const ListItem = ({ todoName, remove }) => {
  return (
    <div className="item">
      <div className="item__text">
        {todoName}
      </div>
      <Button
        name="remove"
        onClick={() => remove(todoName)}
        customClass="item__btn"
      />
    </div>
  );
};

export default ListItem;