import React from 'react';
import { icons, baseURL, skills } from '../constants/skills';
const Skills = (props) => {
    const listSkills = skills.map((skill) => {
        return (
            <div className="checkbox skill" key={skill}>
                <input type="checkbox" checked={props.skills[skill]}
                    onChange={event => props.handleSkillsChange(skill)} />
                <span className="checkboxLabel">
                    <img className="skill-icon" src={baseURL + icons[skill]}
                        alt={skill} />
                </span>
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