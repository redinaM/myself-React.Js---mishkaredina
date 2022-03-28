import React from 'react';
import Skills from './Skills';
import './style.css';

const Body = () => {
  return (
    <div className='body'>
        <p>A highly motivated student that always likes to
             learn new things and explore new opportunities. 
             Seeking to increase my knowledge in the programming field.</p>
        <p><b><u>EDUCATION</u></b> <br />EPOKA UNIVERSITY | 2019 - Ongoing <br/>
        <i>BSc in Business Informatics</i><br/></p>
        <p><u><b>SKILLS</b></u></p>
        <Skills/>

    </div>
  )
}

export default Body;