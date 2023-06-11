import React from "react";

export default function SearchableInput(props) {
  const { label, name, elementClass, options } = props;

  return (
    <div className={elementClass}>
       <label>
               {label}
         </label>
      <input list={name} name={name} autocomplete="off" />
      <datalist id={name}>
        {options!=null&&options.length>0&&options.map(option => <option key={option} value={option} />)}
      </datalist>
    </div>
  );
}
