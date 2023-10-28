/* eslint-disable react/prop-types */
import { IconMailFilled, IconPhone, IconSchool, IconBooks, IconCalendarPlus, IconCalendarMinus, IconBriefcase, IconBuildingStore } from '@tabler/icons-react';
import moment from 'moment/moment';
import './Page.css';
const imgUrl = new URL('./assets/cat.jpg', import.meta.url);

export default function Page({ personal, education, experience, expertise }) {
  const user = {};
  personal.forEach((e) => (user[e.name] = e.value));
  return (
    <div className="page">
      <div className="page-header">
        <div className="main-info">
          <div className="main-info-content">
            <h1 className="name">{user.name}</h1>
            <h2 className="country">{user.country}</h2>
            <p className="desc">{user.desc}</p>
          </div>
          <div className="main-info-photo">
            <img src={imgUrl} alt="" />
          </div>
        </div>
        <div className="socials">
          <div className="socials-box">
            <IconMailFilled />
            <span>{user.email}</span>
          </div>
          <div className="socials-box">
            <IconPhone />
            <span>{user.phone}</span>
          </div>
        </div>
      </div>
      <div className="page-content">
        <div className="expertise">
          <div className="expertise-title">
            <h2>Areas of Expertise</h2>
          </div>
          <div className="expertise-content">
            {expertise.map((e) => (
              <span key={e.id}>{e.name}</span>
            ))}
          </div>
        </div>
        <div className="education">
          <div className="education-title">
            <h2>Education</h2>
          </div>
          <div className="education-content">
            {education.map((subgroup) => {
              return (
                <div className="education-item" key={subgroup[0].subgroup}>
                  <span className="institution">
                    <IconSchool />
                    {subgroup[0].value}
                  </span>
                  <span className="subject">
                    <IconBooks />
                    {subgroup[1].value}
                  </span>
                  <span className="from">
                    <IconCalendarPlus />
                    {subgroup[2].value !== '' ? moment(subgroup[2].value, 'YYYY-MM-DD').format('DD/MM/YYYY') : 'Present Day'}
                  </span>
                  <span className="until">
                    <IconCalendarMinus />
                    {subgroup[3].value !== '' ? moment(subgroup[3].value, 'YYYY-MM-DD').format('DD/MM/YYYY') : 'Present Day'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="experience">
          <div className="experience-title">
            <h2>Experience</h2>
          </div>
          <div className="experience-content">
            {experience.map((subgroup) => {
              return (
                <div className="experience-item" key={subgroup[0].subgroup}>
                  <span className="company">
                    <IconBriefcase />
                    {subgroup[0].value}
                  </span>
                  <span className="position">
                    <IconBuildingStore />
                    {subgroup[1].value}
                  </span>
                  <span className="from">
                    <IconCalendarPlus />
                    {subgroup[2].value !== '' ? moment(subgroup[2].value, 'YYYY-MM-DD').format('DD/MM/YYYY') : 'Present Day'}
                  </span>
                  <span className="until">
                    <IconCalendarMinus />
                    {subgroup[3].value !== '' ? moment(subgroup[3].value, 'YYYY-MM-DD').format('DD/MM/YYYY') : 'Present Day'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
