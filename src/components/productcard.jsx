import React from 'react';
import Button from '../component/button';

const Productcard = () => {

  const productImage = 'https://via.placeholder.com/200';
  const productName = 'Wireless Headphones';
  const productPrice = '$59.99';

  return (
    <div className="border rounded-lg shadow-md p-4 w-64 text-center">
      <img
        src={productImage}
        alt={productName}
        className="w-full h-40 object-cover rounded"
      />
      <h2 className="text-lg font-semibold mt-3">{productName}</h2>
      <p className="text-gray-700 text-md mt-1">{productPrice}</p>
      <div className="mt-4">
        <Button />
      </div>
    </div>
  );
};

export default Productcard;
