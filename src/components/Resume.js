import React from 'react'
import '../styles/Pages.css';


const techs = ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PWA', 'React', 'Bootstrap', 'APIs', 'Node', 'Express', 'MySQL, Sequelize', 'MongoDB, Mongoose', 'GraphQL', 'MERN']

const Resume = () => {
  return (
    <div className="body">
      <h1 className='title'>Resume</h1>
      <p><a href={resume}></a></p>
      <ul>
      <h2 className='title'>Technology Experience</h2>
        {techs.map((name) => (
          <li key={name}>{name}</li> 
        ))}
      </ul>
    </div>
  )
}

export default Resume