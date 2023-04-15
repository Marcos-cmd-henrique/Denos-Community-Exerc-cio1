import React from 'react';

const Card = ({ title, description, rate}) => {
  return (
    <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Rate: {rate}</p>
        {rate < 2 && <p>Menos avaliado</p>}
    </div>
  
  );
}

export default Card;