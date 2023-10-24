import { useState } from 'react';
import './CVGen.css';
import Input from './Input';

export default function CVGen() {
  const [name, setName] = useState('');
  const handleInputChange = (ev) => {
    return setName(ev.target.value);
  };
  return (
    <div className="container">
      <div className="inputs-container">
        <div className="inputs">
          <h2 className="inputs-title">Your Info</h2>
          <Input name="name" handleInputChange={handleInputChange} />
        </div>
      </div>
      <div className="page-container">
        <div className="page">
          <h1>{name}</h1>
        </div>
      </div>
    </div>
  );
}
