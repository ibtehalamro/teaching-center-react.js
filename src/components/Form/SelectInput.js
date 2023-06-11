import React from "react";

export default function SelectInput(props) {
  const { label, name, elementClass, options, onChange ,required} = props;

  let elementAttributes = {};

  
  if (required !== undefined) {
    elementAttributes.required = required;
  }

  return (
    <div className={elementClass}>
      <label>{label}</label>
      <select name={name} onChange={onChange}  {...elementAttributes}>
        <option defaultValue value="-99">
          Select option
        </option>
        {options != null &&
          options.length > 0 &&
          options.map((option) => (
            <option key={option.key} value={option.key}>
              {option.value}
            </option>
          ))}
      </select>
    </div>
  );
}
