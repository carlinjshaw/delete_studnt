import React from 'react'
import '../styles/Pages.css';
import resume from '../Images/Philip_Ruggiero_Resume.pdf';

const techs = ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PWA', 'React', 'Bootstrap', 'APIs', 'Node', 'Express', 'MySQL, Sequelize', 'MongoDB, Mongoose', 'GraphQL', 'MERN']

const Resume = () => {
  return (
    <div className="body">
      <h1 className='title'>Resume</h1>
      <p><a href={resume} download>Download My Resume</a></p>
      <ul>
      <h2 className='title'>Technology Experience</h2>
        {techs.map((name) => (
          <li key={name} className='list-item'>{name}</li> 
        ))}
      </ul>
    </div>
  )
}

export default Resume