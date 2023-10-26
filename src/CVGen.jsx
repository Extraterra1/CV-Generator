import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './CVGen.css';
import Input from './Input';
import Page from './Page';
import ExpertiseBox from './ExpertiseBox';

const MySwal = withReactContent(Swal);

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
  },
  {
    name: 'company',
    type: 'text',
    label: 'Company',
    value: '',
    placeholder: 'Company Name',
    id: uuid(),
    group: 'experience',
    subgroup: 'experience1'
  },
  {
    name: 'position',
    type: 'text',
    label: 'Position',
    value: '',
    placeholder: 'Clerk',
    id: uuid(),
    group: 'experience',
    subgroup: 'experience1'
  },
  {
    name: 'start',
    type: 'date',
    label: 'Start',
    value: '',
    placeholder: '22/02/1957',
    id: uuid(),
    group: 'experience',
    subgroup: 'experience1'
  },
  {
    name: 'end',
    type: 'date',
    label: 'End',
    value: '',
    placeholder: '22/02/1957',
    id: uuid(),
    group: 'experience',
    subgroup: 'experience1'
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
    if (group === 'education') {
      if (subGroupsArray('education').length === 3)
        return MySwal.fire({
          icon: 'error',
          title: "You can't have more than 3 education groups",
          toast: true,
          position: 'top-right',
          iconColor: 'red',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true
        });
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
      if (subGroupsArray('experience').length === 3)
        return MySwal.fire({
          icon: 'error',
          title: "You can't have more than 3 experience groups",
          toast: true,
          position: 'top-right',
          iconColor: 'red',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true
        });
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
  const [expertise, setExpertise] = useState([]);

  return (
    <div className="container">
      <div className="inputs-container">
        <div className="inputs">
          <h2 className="inputs-title">Your Info</h2>
          <div className="inputs-group personal">
            <h3 className="inputs-group-title">Personal Information</h3>
            {inputs.map((e) => {
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
            {subGroupsArray('education').map((subgroup) => {
              return (
                <div key={subgroup[0].id} className="subgroup">
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
          <div className="inputs-group expertise">
            <div className="expertise-title">
              <h3 className="inputs-group-title">Expertise</h3>
            </div>
            <ExpertiseBox />
          </div>
        </div>
      </div>
      <div className="page-container">
        <Page inputs={inputs} />
      </div>
    </div>
  );
}
