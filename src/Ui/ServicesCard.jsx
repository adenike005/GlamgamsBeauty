import React from 'react';
import Services from './Services';

const ServicesCard = ({ data }) => {
  return (
    <>
      {data.map(item => (
        <Services key={item.id} item={item} />
      ))}
    </>
  );
}

export default ServicesCard;