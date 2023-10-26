/* eslint-disable react/prop-types */
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Toast from './helpers/Toast';
import './ExpertiseBox.css';

export default function ExpertiseBox({ items, setExpertise }) {
  const [value, setValue] = useState('');
  const handleChange = (ev) => {
    setValue(ev.target.value);
  };

  const handleClick = (ev) => {
    if (value === '') return Toast({ title: 'Expertise cannot be blank', icon: 'error', color: 'red' });
    if (items.map((e) => e.name).includes(value)) return Toast({ title: `Item '${value}' already exists`, icon: 'error', color: 'red' });
    const newItems = [...items, { id: uuid(), name: value }];
    setExpertise(newItems);
    setValue('');
  };

  const handleDelete = (id) => {
    const newItems = items.filter((e) => e.id !== id);
    setExpertise(newItems);
  };

  return (
    <div className="expertise-container">
      <div className="expertise-box">
        {items.length === 0 && <h4>Empty</h4>}
        {items.map((e) => (
          <span onClick={() => handleDelete(e.id)} key={e.id}>
            {e.name}
          </span>
        ))}
      </div>
      <div className="expertise-form">
        <label htmlFor="expertise">Add New</label>
        <input value={value} placeholder="Javascript" type="text" name="expertise" id="expertise" onChange={handleChange} />
        <button onClick={handleClick} className="expertise-button">
          Add
        </button>
      </div>
    </div>
  );
}
