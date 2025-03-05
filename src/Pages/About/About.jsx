import React from 'react'
import './About.css'
import education from "../../Data/Education_data";
const About = () => {
  const hobbies = ["Reading", "Chess Playing", "Meditating", "Playing Volleyball", "Exercise"];
  const interests = ["Watching Cricket", "Exploring new Movies", "Making new friends"];
  
  return (
    <>
      <div className="about-class">
        <div className="about-content">
          <h1>About</h1>
          <div className="education">
            {education.map((item, index) => (
              <div key={index} className='education-content'>
                <p><strong>{item.institution}</strong></p>
                <p><strong>Course: </strong> {item.course}</p>
                {item.percentage ? <p> <strong>Percentage: </strong>{item.percentage}%</p> : <p><strong>CGPA: </strong> {item.CGPA}</p>}
                <p><strong>Year: </strong>{item.year}</p>
              </div>
            ))}

          </div>
          <div className="hobbies-interest">
            <div className="hobbies">
              <h2>Hobbies</h2>
              <ul>
                {hobbies.map((hobby,index)=>(
                  <li key={index}>{hobby}</li>
                ))}
              </ul>
            </div>
            <div className="interests">
              <h2>Interests</h2>
              <ul>
                {interests.map((interest,index)=>(
                  <li key={index}>{interest}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default About