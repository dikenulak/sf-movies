import React from 'react';
import Select from 'react-select';


const CustomSelect = (props) => {
  const { options, onChange, getOptionValue, getOptionLabel, label, placeholder, value } = props;
  return (
    <div>
      <label htmlFor="">{label}</label>
      <Select
        placeholder={placeholder}
        options={options}
        onChange={event => onChange(event)}
        getOptionValue={element => getOptionValue(element)}
        getOptionLabel={element => getOptionLabel(element)}
        value={value}
      />
    </div>
  );
};

export default CustomSelect;
