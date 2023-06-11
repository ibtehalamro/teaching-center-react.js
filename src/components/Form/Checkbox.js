import React from 'react';
import { useController } from 'react-hook-form';

const Checkbox = ({ label, name, control, defaultValue ,...restProps }) => {
  const {
    field: { ref, ...checkboxProps },
  } = useController({
    name,
    control,
    defaultValue,
  });

  return (
    <div>
      {/* <Tooltip  text={"This student is already assigned"}> */}

      <input
        type="checkbox"
        name={name}
        ref={ref}
        defaultChecked={defaultValue}
        {...checkboxProps}
        {...restProps }
      />

      <label htmlFor={name}>{label}</label>
      {/* </Tooltip> */}
    </div>
  );
};

export default Checkbox;
