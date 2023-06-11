import { useController } from 'react-hook-form';
import React from 'react';

const Input = ({ label, name, control, rules,...restProps }) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue: '',
  });

 
  return (
    <div className="form__group">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} ref={ref} {...inputProps}{...restProps} />
      {error&&<span className='form-error-message'>{error.message}   </span>}
    </div>
  );
};

export default Input;
