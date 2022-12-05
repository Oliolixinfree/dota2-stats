import React from 'react';
import { API_URL } from '../../config';

const Card = ({ icon, name }) => {
  return (
    <div>
      <h3>{name}</h3>
      <img src={API_URL + icon} alt={'heroImg'} />
    </div>
  );
};

export default Card;
