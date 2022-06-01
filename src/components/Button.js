import React from 'react';

const Button = ({ name, closeModal, styles, type }) => {
  return (
    <button
      className={`bg-blue-700 text-white px-6 py-2 rounded-lg mt-3 text-sm font-bold`}
      onClick={closeModal}
      style={styles}
      type={type === 'submit' ? 'submit' : 'button'}
    >
      {name}
    </button>
  );
};

export default Button;
