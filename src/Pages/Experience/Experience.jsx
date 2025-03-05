import React from 'react';
import experience from '../../Data/Experience';
import certifications from '../../Data/Certifications';
import acheivements from '../../Data/Acheivements';
import './Experience.css';

const Experience = () => {
  return (
    <>
      <div className="experience-class">

        <div className="experience-content"></div>
        <h1>Experience</h1>

        <div className="internship">
          <h2>Internship</h2>
          {experience.map((exp, index) => (
            <div key={index} className="internship-details">
              <h3>{exp.company}</h3>
              <p><strong>Duration:</strong>{exp.duration}</p>
              <p><strong>Year:</strong>{exp.year}</p>
              <p><strong>Role:</strong>{exp.role}</p>
            </div>
          ))}
        </div>

        <div className="Certification">
          <h2>Certification and Workshops</h2>
          {certifications.map((course, index) => (
            <div className="course-details">
              <h3>{course.title}</h3>
              <p><strong>Year:</strong>{course.provider}</p>
              <p><strong>Role:</strong>{course.details}</p>
            </div>
          ))}
        </div>
        <div className="Acheivement">
          <h2>Acheivement</h2>
          {acheivements.map((acheivement,index)=>(
            <div className="acheivements-details">
              <h3>{acheivement.description}</h3>
            </div>
          ))}
        </div>


      </div>
    </>
  )
}

export default Experience