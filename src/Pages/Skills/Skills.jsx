import React from 'react'
import './Skills.css'

const Skills = () => {

  const programLang = ["Java", "C", "Python", "Javascript"];
  const framework = ["React", "Node", "Express"];
  const db = ["Sql", "Postgre"];
  const tools = ["VS-code", "Eclipse-IDE", "Keil-MicroVision-4"];
  const languages = ["English", "Kannada", "Tulu"];
  const additional = ["Leadership quality", "Team management","Problem Solving","Critical Thinking"]
  return (
    <>

      <div className="skills-class">
        <h1>Skills</h1>
        <div className="technical-skills">
          <h2>Technical Skills</h2>
          <div className="tech-skillset">
            <h3>Programming Languages:</h3>
            <ul>
              {programLang.map((program, index) => (
                <li key={index}>{program}</li>
              ))}
            </ul>

          </div>
          <div className="tech-skillset">
            <h3>Framework:</h3>
            <ul>
              {framework.map((frame, index) => (
                <li key={index}>{frame}</li>
              ))}
            </ul>

          </div>
          <div className="tech-skillset">
            <h3>DataBase:</h3>
            <ul>
              {db.map((database, index) => (
                <li key={index}>{database}</li>
              ))}
            </ul>

          </div>
          <div className="tech-skillset">
            <h3>Tools:</h3>
            <ul>
              {tools.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>

          </div>

        </div>
        <div className="soft-skills">
          <h2>Soft Skills</h2>
          <div className="soft-skillset">
            <h3>Languages:</h3>
            <ul>
              {languages.map((lang, index) => (
                <li key={index}>{lang}</li>
              ))}
            </ul>
          </div>
          <div className="soft-skillset">
            <h3>Capability:</h3>
            <ul>
              {additional.map((capability, index) => (
                <li key={index}>{capability}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills