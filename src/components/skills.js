import React from 'react';
import { icons, categorizedSkills } from '../constants/skills';
const Skills = (props) => {
    const createSkill = (skill) => {
        return (
            <div className="skillCheckbox" key={skill}>
                <label htmlFor={skill} className="skillCheckboxLabel">
                    <input id={skill} type="checkbox" checked={props.skills[skill]}
                        onChange={event => props.handleSkillsChange(skill)} />
                    <img className="skill-icon" src={icons[skill]}
                        alt={skill} />
                    <span className="tooltiptext">{skill}</span>
                </label>
            </div>
        );
    }
    const listFrontendSkills = categorizedSkills['frontend_dev'].skills.map((skill) => {
        return createSkill(skill)
    });
    const listBackendSkills = categorizedSkills['backend_dev'].skills.map((skill) => {
        return createSkill(skill)
    });
    const listMobileSkills = categorizedSkills['mobile_dev'].skills.map((skill) => {
        return createSkill(skill)
    });
    const listAISkills = categorizedSkills['ai'].skills.map((skill) => {
        return createSkill(skill)
    });
    const listDatabaseSkills = categorizedSkills['database'].skills.map((skill) => {
        return createSkill(skill)
    });
    const listDevopsSkills = categorizedSkills['devops'].skills.map((skill) => {
        return createSkill(skill)
    });
    const listBaasSkills = categorizedSkills['baas'].skills.map((skill) => {
        return createSkill(skill)
    });
    const listDataVisualizationSkills = categorizedSkills['data_visualization'].skills.map((skill) => {
        return createSkill(skill)
    });
    const listFrameworkSkills = categorizedSkills['framework'].skills.map((skill) => {
        return createSkill(skill)
    });
    const listLanguageSkills = categorizedSkills['language'].skills.map((skill) => {
        return createSkill(skill)
    });
    const listSoftwareSkills = categorizedSkills['software'].skills.map((skill) => {
        return createSkill(skill)
    });
    const listStaticSiteGeneratorSkills = categorizedSkills['static_site_generator'].skills.map((skill) => {
        return createSkill(skill)
    });
    const listTestingSkills = categorizedSkills['testing'].skills.map((skill) => {
        return createSkill(skill)
    }); 
    const listOtherSkills = categorizedSkills['other'].skills.map((skill) => {
        return createSkill(skill)
    }); 

    return (
        <div>
            <div className="section-title">Skills</div>

            <h4 className="skills-category-title">Programming Language</h4>
            <div className="skills">
                {listLanguageSkills}
            </div>

            <h4 className="skills-category-title">Frontend Development</h4>
            <div className="skills">
                {listFrontendSkills}
            </div>

            <h4 className="skills-category-title">Backend Development</h4>
            <div className="skills">
                {listBackendSkills}
            </div>

            <h4 className="skills-category-title">Mobile App Development</h4>
            <div className="skills">
                {listMobileSkills}
            </div>

            <h4 className="skills-category-title">AI/ML</h4>
            <div className="skills">
                {listAISkills}
            </div>

            <h4 className="skills-category-title">Database</h4>
            <div className="skills">
                {listDatabaseSkills}
            </div>

            <h4 className="skills-category-title">Data Visualization</h4>
            <div className="skills">
                {listDataVisualizationSkills}
            </div>

            <h4 className="skills-category-title">Devops</h4>
            <div className="skills">
                {listDevopsSkills}
            </div>
        
            <h4 className="skills-category-title">Backend as a Service</h4>
            <div className="skills">
                {listBaasSkills}
            </div>

            <h4 className="skills-category-title">Framework</h4>
            <div className="skills">
                {listFrameworkSkills}
            </div>

            <h4 className="skills-category-title">Software</h4>
            <div className="skills">
                {listSoftwareSkills}
            </div>
        
            <h4 className="skills-category-title">Static Site Generators</h4>
            <div className="skills">
                {listStaticSiteGeneratorSkills}
            </div>

            <h4 className="skills-category-title">Testing</h4>
            <div className="skills">
                {listTestingSkills}
            </div>

            <h4 className="skills-category-title">Other</h4>
            <div className="skills">
                {listOtherSkills}
            </div>
        </div>
    );
}
export default Skills;
