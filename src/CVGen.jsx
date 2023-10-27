import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { IconTrashXFilled } from '@tabler/icons-react';

import Toast from './helpers/Toast';
import './CVGen.css';
import Input from './Input';
import Page from './Page';
import ExpertiseBox from './ExpertiseBox';

const initialInputs = [
  {
    name: 'name',
    type: 'text',
    label: 'Full Name',
    value: 'John Doe',
    placeholder: 'John Doe',
    id: uuid(),
    group: 'personal'
  },
  {
    name: 'phone',
    type: 'tel',
    label: 'Phone',
    value: '961 776 832',
    placeholder: '999 999 999',
    id: uuid(),
    group: 'personal'
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    value: 'johndoe@gmail.com',
    placeholder: 'example@gmail.com',
    id: uuid(),
    group: 'personal'
  },
  {
    name: 'country',
    type: 'select',
    label: 'Country',
    value: 'Zimbabwe',
    placeholder: '',
    id: uuid(),
    group: 'personal'
  },
  {
    name: 'desc',
    type: 'textarea',
    label: 'Description',
    value:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    placeholder: 'Write something about yourself...',
    id: uuid(),
    group: 'personal'
  },
  {
    name: 'institution',
    type: 'text',
    label: 'Institution',
    value: 'Harvard University',
    placeholder: 'UofE',
    id: uuid(),
    group: 'education',
    subgroup: 'education1'
  },
  {
    name: 'subject',
    type: 'text',
    label: 'Subject',
    value: 'Bachelor of Science in Computer Science',
    placeholder: 'Bachelor in Science',
    id: uuid(),
    group: 'education',
    subgroup: 'education1'
  },
  {
    name: 'from',
    type: 'date',
    label: 'From',
    value: '2015-10-10',
    placeholder: '22/02/1956',
    id: uuid(),
    group: 'education',
    subgroup: 'education1'
  },
  {
    name: 'until',
    type: 'date',
    label: 'Until',
    value: '2020-07-13',
    placeholder: '22/02/1957',
    id: uuid(),
    group: 'education',
    subgroup: 'education1'
  },
  {
    name: 'company',
    type: 'text',
    label: 'Company',
    value: 'Tech Innovators Inc.',
    placeholder: 'Company Name',
    id: uuid(),
    group: 'experience',
    subgroup: 'experience1'
  },
  {
    name: 'position',
    type: 'text',
    label: 'Position',
    value: 'Senior Software Engineer',
    placeholder: 'Clerk',
    id: uuid(),
    group: 'experience',
    subgroup: 'experience1'
  },
  {
    name: 'start',
    type: 'date',
    label: 'Start',
    value: '2022-03-09',
    placeholder: '22/02/1957',
    id: uuid(),
    group: 'experience',
    subgroup: 'experience1'
  },
  {
    name: 'end',
    type: 'date',
    label: 'End',
    value: '2022-09-27',
    placeholder: '22/02/1957',
    id: uuid(),
    group: 'experience',
    subgroup: 'experience1'
  }
];
const initialExpertise = [
  { id: uuid(), name: 'Javascript' },
  { id: uuid(), name: 'React' },
  { id: uuid(), name: 'Node' },
  { id: uuid(), name: 'NEXT.js' },
  { id: uuid(), name: 'Express' },
  { id: uuid(), name: 'COBOL' }
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
    if (group === 'education') {
      if (subGroupsArray('education').length === 3) return Toast({ title: "You can't have more than 3 education groups", icon: 'error', color: 'red' });

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
    }
    if (group === 'experience') {
      if (subGroupsArray('experience').length === 3) return Toast({ title: "You can't have more than 3 experience groups", icon: 'error', color: 'red' });

      const subGroup = [
        {
          name: 'company',
          type: 'text',
          label: 'Company',
          value: '',
          placeholder: 'Company Name',
          id: uuid(),
          group: 'experience',
          subgroup: `experience${experienceSubgroup}`
        },
        {
          name: 'position',
          type: 'text',
          label: 'Position',
          value: '',
          placeholder: 'Clerk',
          id: uuid(),
          group: 'experience',
          subgroup: `experience${experienceSubgroup}`
        },
        {
          name: 'start',
          type: 'date',
          label: 'Start',
          value: '',
          placeholder: '22/02/1957',
          id: uuid(),
          group: 'experience',
          subgroup: `experience${experienceSubgroup}`
        },
        {
          name: 'end',
          type: 'date',
          label: 'End',
          value: '',
          placeholder: '22/02/1957',
          id: uuid(),
          group: 'experience',
          subgroup: `experience${experienceSubgroup}`
        }
      ];
      setInputs(inputs.concat(subGroup));
      setExperienceSubgroup(experienceSubgroup + 1);
    }
  };

  const deleteSubGroup = (item) => {
    if (inputs.filter((e) => e.group === item.group).length === 4)
      return Toast({ title: `You need to have at least one ${item.group} group`, icon: 'error', color: 'red' });
    const newInputs = inputs.filter((e) => e.subgroup !== item.subgroup);
    setInputs(newInputs);
  };

  const subGroupsArray = (group) => {
    const groups = {};

    inputs.forEach((input) => {
      if (input.group === group) {
        const subgroup = input.subgroup;

        if (!groups[subgroup]) {
          groups[subgroup] = [];
        }

        groups[subgroup].push(input);
      }
    });
    return Object.values(groups);
  };

  const [inputs, setInputs] = useState(initialInputs);
  const [educationSubgroup, setEducationSubgroup] = useState(2);
  const [experienceSubgroup, setExperienceSubgroup] = useState(2);
  const [expertise, setExpertise] = useState(initialExpertise);

  return (
    <div className="container">
      <div className="inputs-container">
        <div className="inputs">
          <h2 className="inputs-title">Your Info</h2>
          <div className="inputs-group personal">
            <div className="personal-title">
              <h3 className="inputs-group-title">Personal Information</h3>
            </div>
            <div className="personal-content">
              {inputs.map((e) => {
                if (e.group === 'personal')
                  return (
                    <Input
                      placeholder={e.placeholder}
                      name={e.name}
                      type={e.type}
                      label={e.label}
                      key={e.id}
                      value={e.value}
                      handleInputChange={(ev) => handleInputChange(ev, e.id)}
                    />
                  );
                return null;
              })}
            </div>
          </div>
          <div className="inputs-group expertise">
            <div className="expertise-title">
              <h3 className="inputs-group-title">Expertise</h3>
            </div>
            <ExpertiseBox items={expertise} setExpertise={setExpertise} />
          </div>
          <div className="inputs-group education">
            <div className="education-title">
              <h3 className="inputs-group-title">Education</h3>
              <button onClick={(ev) => addNewSubGroup(ev, 'education')} className="education-add-input">
                Add New
              </button>
            </div>
            {subGroupsArray('education').map((subgroup) => {
              return (
                <div key={subgroup[0].id} className="subgroup">
                  <div className="delete-icon">
                    <IconTrashXFilled onClick={() => deleteSubGroup(subgroup[0])} />
                  </div>
                  {subgroup.map((e) => {
                    return (
                      <Input
                        placeholder={e.placeholder}
                        name={e.name}
                        type={e.type}
                        label={e.label}
                        value={e.value}
                        key={e.id}
                        handleInputChange={(ev) => handleInputChange(ev, e.id)}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className="inputs-group experience">
            <div className="experience-title">
              <h3 className="inputs-group-title">Experience</h3>
              <button onClick={(ev) => addNewSubGroup(ev, 'experience')} className="experience-add-input">
                Add New
              </button>
            </div>
            {subGroupsArray('experience').map((subgroup) => {
              return (
                <div key={subgroup[0].id} className="subgroup">
                  <div className="delete-icon">
                    <IconTrashXFilled onClick={() => deleteSubGroup(subgroup[0])} />
                  </div>
                  {subgroup.map((e) => {
                    return (
                      <Input
                        placeholder={e.placeholder}
                        name={e.name}
                        type={e.type}
                        label={e.label}
                        value={e.value}
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
        <Page
          personal={inputs.filter((e) => e.group === 'personal')}
          education={subGroupsArray('education')}
          experience={subGroupsArray('experience')}
          expertise={expertise}
        />
      </div>
    </div>
  );
}
