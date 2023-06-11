import React from "react";

export default function TimeInput(props) {
    const {label,name,elementClass}=props;
  return (
    <div className={elementClass}>
        <label>
           {label}
        </label>
      <input
        type="time"
        name={name}
        placeholder={label}
      />
    </div>
  );
}
