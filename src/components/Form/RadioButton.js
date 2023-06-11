import { useController } from 'react-hook-form';
import React from 'react';

const RadioButton = ({ label, name, control, rules,...restProps }) => {
  const {
    field: { ref,onChange, ...inputProps },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules
  });

 
  return (
    <div className="radio-group-row">
      <input id={name} name={name} 
                type="radio"          ref={ref}    onChange={e => {
                  onChange(e.target.value);
                }} {...inputProps}{...restProps}    />
      <label htmlFor={name}>{label}</label>
      {error&&<span className='form-error-message'>{error.message}   </span>}
    </div>
  );
};

export default RadioButton;
