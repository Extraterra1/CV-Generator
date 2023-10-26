/* eslint-disable react/prop-types */
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './ExpertiseBox.css';

export default function ExpertiseBox({ items, setExpertise }) {
  const [value, setValue] = useState('');
  const handleChange = (ev) => {
    setValue(ev.target.value);
  };
  const handleClick = (ev) => {
    const newItems = [...items, { id: uuid(), name: value }];
    setExpertise(newItems);
    setValue('');
  };

  return (
    <div className="expertise-container">
      <div className="expertise-box">
        {items.map((e) => (
          <span key={e.id}>{e.name}</span>
        ))}
      </div>
      <div className="expertise-form">
        <label htmlFor="expertise">Add New</label>
        <input value={value} type="text" name="expertise" id="expertise" onChange={handleChange} />
        <button onClick={handleClick} className="expertise-button">
          Add
        </button>
      </div>
    </div>
  );
}
