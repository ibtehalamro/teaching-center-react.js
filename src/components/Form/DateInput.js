import React from "react";

export default function DateInput(props) {
    const {label,name,elementClass}=props;
  return (
    <div className={elementClass}>
        <label>
           {label}
        </label>
      <input
        type="date"
        name={name}
        placeholder={label}
      />
    </div>
  );
}
