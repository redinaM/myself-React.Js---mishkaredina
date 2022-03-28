import React, {useState} from 'react';
import Counter from './Counter';

const Skills = () => {

    const [skills, setSkills] = useState([
        {skillName:"Communication"},
        {skillName:"Creativity"},
        {skillName:"Problem-solving"}
    ])
  return (
    <div>{
        skills.map((skill) =>{
            return(
                <div>
                    <ul>
                        <li>
                        {skill.skillName}
                        </li>
                    </ul>
                </div>
            )
        })
        }
        <Counter />
        </div>
  )
}

export default Skills