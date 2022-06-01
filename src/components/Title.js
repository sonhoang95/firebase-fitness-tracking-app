import React from 'react';

const Title = ({ title, position, largeTitle }) => {
  return (
    <div className="container mx-auto">
      <h1
        className={`${
          largeTitle ? 'text-4xl tracking-wide' : 'text-2xl'
        } text-gray-700 font-bold capitalize ${
          position === 'center' ? 'text-center' : null
        }`}
      >
        {title}
      </h1>
    </div>
  );
};

export default Title;
