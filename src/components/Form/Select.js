import { useController } from 'react-hook-form';
const Select = ({ label, name, control, options, rules, ...others }) => {
  const {
    field: { ref, ...selectProps },
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
      <select id={name} name={name} ref={ref} {...selectProps} {...others}>
      <option key={0} value={""}>
          -- Select Option --
          </option>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      {error && <span className='form-error-message'>{error.message} </span>}
    </div>
  );
};

export default Select;
