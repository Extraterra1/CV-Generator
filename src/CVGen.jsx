import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './CVGen.css';
import Input from './Input';

export default function CVGen() {
  const [name, setName] = useState('');
  const handleInputChange = (ev, key) => {
    console.log(ev, key);
    // return setName(ev.target.value);
  };
  const inputs = [
    {
      name: 'name',
      type: 'text',
      label: 'Full Name',
      id: uuid()
    },
    {
      name: 'phone',
      type: 'tel',
      label: 'Phone',
      id: uuid()
    }
  ];

  const inputElements = inputs.map((e) => {
    return <Input name={e.name} type={e.type} label={e.label} key={e.id} handleInputChange={(ev) => handleInputChange(ev, e.id)} />;
  });

  return (
    <div className="container">
      <div className="inputs-container">
        <div className="inputs">
          <h2 className="inputs-title">Your Info</h2>
          {inputElements}
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
