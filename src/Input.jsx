/* eslint-disable react/prop-types */
import React, { useState, useMemo } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import './Input.css';

export default function Input({ handleInputChange, name, label, placeholder, type = 'text' }) {
  const options = useMemo(() => countryList().getData(), []);
  const [selectValue, setSelectValue] = useState('');
  const changeHandler = (value) => {
    handleInputChange({ target: { value: value.label } });
    setSelectValue(value);
  };

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      {type !== 'select' && type !== 'textarea' && <input placeholder={placeholder} type={type} name={name} id={name} onChange={handleInputChange} />}
      {type === 'textarea' && (
        <textarea placeholder={placeholder} maxLength={50} className="inputTextarea" name={name} id={name} onChange={handleInputChange} />
      )}
      {type === 'select' && name === 'country' && (
        <Select
          options={options}
          name={name}
          id={name}
          inputId={name}
          value={selectValue}
          onChange={changeHandler}
          className="countrySelect"
          styles={{
            option: (baseStyles, state) => ({
              ...baseStyles,
              color: '#242424'
            })
          }}
        />
      )}
    </div>
  );
}
