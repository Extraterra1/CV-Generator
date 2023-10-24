/* eslint-disable react/prop-types */
export default function Input({ handleInputChange, name, type = 'text' }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>Name</label>
      <input type={type} name={name} id={name} onChange={handleInputChange} />
    </div>
  );
}
