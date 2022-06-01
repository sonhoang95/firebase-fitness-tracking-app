import React, { useEffect } from 'react';

const Alert = ({ msg, type, showAlert, exercises }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [exercises, showAlert]);

  return (
    <div
      className={`${
        type === 'success' ? 'bg-green-600' : 'bg-rose-600'
      } text-center mt-6 rounded-lg text-white p-1`}
    >
      <p>{msg}</p>
    </div>
  );
};

export default Alert;
