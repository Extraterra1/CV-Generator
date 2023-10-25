import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './CVGen.css';
import Input from './Input';
import Page from './Page';

const initialInputs = [
  {
    name: 'name',
    type: 'text',
    label: 'Full Name',
    value: '',
    id: uuid()
  },
  {
    name: 'phone',
    type: 'tel',
    label: 'Phone',
    value: '',
    id: uuid()
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    value: '',
    id: uuid()
  },
  {
    name: 'desc',
    type: 'text',
    label: 'Description',
    value: '',
    id: uuid()
  },
  {
    name: 'country',
    type: 'select',
    label: 'Country',
    value: '',
    id: uuid()
  }
];

export default function CVGen() {
  const handleInputChange = (ev, key) => {
    const newInputs = inputs.map((e) => {
      if (e.id !== key) return e;
      return { ...e, value: ev.target.value };
    });
    setInputs(newInputs);
  };

  const [inputs, setInputs] = useState(initialInputs);

  return (
    <div className="container">
      <div className="inputs-container">
        <div className="inputs">
          <h2 className="inputs-title">Your Info</h2>
          <div className="inputs-group personal">
            <h3 className="inputs-personal">Personal Information</h3>
            {initialInputs.map((e) => {
              return <Input name={e.name} type={e.type} label={e.label} key={e.id} handleInputChange={(ev) => handleInputChange(ev, e.id)} />;
            })}
          </div>
        </div>
      </div>
      <div className="page-container">
        <Page inputs={inputs} />
      </div>
    </div>
  );
}
