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
    placeholder: 'John Doe',
    id: uuid(),
    group: 'personal'
  },
  {
    name: 'phone',
    type: 'tel',
    label: 'Phone',
    value: '',
    placeholder: '999 999 999',
    id: uuid(),
    group: 'personal'
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    value: '',
    placeholder: 'example@gmail.com',
    id: uuid(),
    group: 'personal'
  },
  {
    name: 'country',
    type: 'select',
    label: 'Country',
    value: '',
    placeholder: '',
    id: uuid(),
    group: 'personal'
  },
  {
    name: 'desc',
    type: 'textarea',
    label: 'Description',
    value: '',
    placeholder: 'Write something about yourself...',
    id: uuid(),
    group: 'personal'
  },
  {
    name: 'institution',
    type: 'text',
    label: 'Institution',
    value: '',
    placeholder: 'UofE',
    id: uuid(),
    group: 'education',
    subgroup: 'education1'
  },
  {
    name: 'subject',
    type: 'text',
    label: 'Subject',
    value: '',
    placeholder: 'Bachelor in Science',
    id: uuid(),
    group: 'education',
    subgroup: 'education1'
  },
  {
    name: 'from',
    type: 'date',
    label: 'From',
    value: '',
    placeholder: '22/02/1956',
    id: uuid(),
    group: 'education',
    subgroup: 'education1'
  },
  {
    name: 'until',
    type: 'date',
    label: 'Until',
    value: '',
    placeholder: '22/02/1957',
    id: uuid(),
    group: 'education',
    subgroup: 'education1'
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
  const addNewSubGroup = (ev, group) => {
    const subGroup = [
      {
        name: 'institution',
        type: 'text',
        label: 'Institution',
        value: '',
        placeholder: 'UofE',
        id: uuid(),
        group: 'education',
        subgroup: `education${educationSubgroup}`
      },
      {
        name: 'subject',
        type: 'text',
        label: 'Subject',
        value: '',
        placeholder: 'Bachelor in Science',
        id: uuid(),
        group: 'education',
        subgroup: `education${educationSubgroup}`
      },
      {
        name: 'from',
        type: 'date',
        label: 'From',
        value: '',
        placeholder: '22/02/1956',
        id: uuid(),
        group: 'education',
        subgroup: `education${educationSubgroup}`
      },
      {
        name: 'until',
        type: 'date',
        label: 'Until',
        value: '',
        placeholder: '22/02/1957',
        id: uuid(),
        group: 'education',
        subgroup: `education${educationSubgroup}`
      }
    ];
    setInputs(inputs.concat(subGroup));
    setEducationSubgroup(educationSubgroup + 1);
  };
  const educationGroupsArray = () => {
    const groupedEducation = {};

    inputs.forEach((input) => {
      if (input.group === 'education') {
        const subgroup = input.subgroup;

        if (!groupedEducation[subgroup]) {
          groupedEducation[subgroup] = [];
        }

        groupedEducation[subgroup].push(input);
      }
    });
    return Object.values(groupedEducation);
  };

  const [inputs, setInputs] = useState(initialInputs);
  const [educationSubgroup, setEducationSubgroup] = useState(2);

  return (
    <div className="container">
      <div className="inputs-container">
        <div className="inputs">
          <h2 className="inputs-title">Your Info</h2>
          <div className="inputs-group personal">
            <h3 className="inputs-group-title">Personal Information</h3>
            {initialInputs.map((e) => {
              if (e.group === 'personal')
                return (
                  <Input
                    placeholder={e.placeholder}
                    name={e.name}
                    type={e.type}
                    label={e.label}
                    key={e.id}
                    handleInputChange={(ev) => handleInputChange(ev, e.id)}
                  />
                );
              return null;
            })}
          </div>
          <div className="inputs-group education">
            <div className="education-title">
              <h3 className="inputs-group-title">Education</h3>
              <button onClick={(ev) => addNewSubGroup(ev, 'education')} className="education-add-input">
                Add New
              </button>
            </div>
            {educationGroupsArray().map((subgroup) => {
              return (
                <div key={subgroup[0].id} className="education-subgroup">
                  {subgroup.map((e) => {
                    return (
                      <Input
                        placeholder={e.placeholder}
                        name={e.name}
                        type={e.type}
                        label={e.label}
                        key={e.id}
                        handleInputChange={(ev) => handleInputChange(ev, e.id)}
                      />
                    );
                  })}
                </div>
              );
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
