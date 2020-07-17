import React from 'react';
import { icons, baseURL, skills } from '../constants/skills';
const Skills = (props) => {
    const listSkills = skills.map((skill) => {
        return (
            <div className="skillCheckbox" key={skill}>
                <label htmlFor={skill} className="skillCheckboxLabel">
                    <input id={skill} type="checkbox" checked={props.skills[skill]}
                        onChange={event => props.handleSkillsChange(skill)} />
                        <img className="skill-icon" src={baseURL + icons[skill]}
                            alt={skill} />
                </label>
            </div>
        );
    });
    return (
        <div>
            <h3>Skills</h3>
            <div className="skills">
                {listSkills}
            </div>
        </div>
    );
}
export default Skills;