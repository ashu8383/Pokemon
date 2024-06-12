import React from 'react';

const Input = ({ errors, name, ...otherProps }) => {
  return (
    <div className='field'>
      <input
        name={name}
        autoComplete='off'
        style={errors[name] ? { borderColor: 'red' } : {}}
        {...otherProps}
      />

      {errors[name] && <span>{errors[name]}</span>}
    </div>
  );
};

export default Input;
