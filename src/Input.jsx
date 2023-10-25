/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import './Input.css';

export default function Input({ handleInputChange, name, label, type = 'text' }) {
  const options = useMemo(() => countryList().getData(), []);
  const changeHandler = (value) => {
    console.log(value);
  };

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      {type !== 'select' && <input type={type} name={name} id={name} onChange={handleInputChange} />}
      {type === 'select' && name === 'country' && <Select options={options} name={name} id={name} value="" onChange={changeHandler} />}
    </div>
  );
}
