import React, { Fragment } from 'react';

const Input = ({ title, type, setNewExercise }) => {
  return (
    <Fragment>
      <input
        type={type}
        name={title}
        className="border p-2 w-full my-2 capitalize rounded-lg"
        placeholder={`${title}...`}
        onChange={setNewExercise}
      />
    </Fragment>
  );
};

export default Input;
