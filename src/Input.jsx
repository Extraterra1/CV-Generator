/* eslint-disable react/prop-types */
import './Input.css';

export default function Input({ handleInputChange, name, label, type = 'text' }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={name} onChange={handleInputChange} />
    </div>
  );
}
