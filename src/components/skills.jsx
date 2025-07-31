import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SearchIcon, XIcon } from '@primer/octicons-react';
import { icons, categorizedSkills } from '../constants/skills';

const Skills = (props) => {
  const { skills, handleSkillsChange } = props;
  const [search, setSearch] = useState('');
  const [debounce, setDebounce] = useState(undefined);
  const inputRef = React.createRef();
  const createSkill = (skill) => (
    <div className="w-1/3 sm:w-1/4 my-6" key={skill}>
      <label htmlFor={skill} className="checkbox-label flex items-center justify-start">
        <input
          id={skill}
          type="checkbox"
          className="checkbox-label__input"
          checked={skills[skill]}
          onChange={() => handleSkillsChange(skill)}
        />
        <span className="checkbox-label__control" />
        <img className="ml-4 w-8 h-8 sm:w-10 sm:h-10" src={icons[skill]} alt={skill} />
        <span className="tooltiptext">{skill}</span>
      </label>
    </div>
  );

  const onSearchChange = (value) => {
    const callback = () => {
      setSearch(value);
    };
    clearTimeout(debounce);
    setDebounce(setTimeout(callback, 50));
  };

  return (
    <div id="skills-section" className="px-2 sm:px-6 mb-10 relative z-[1]">
      <div className="text-xl sm:text-2xl font-bold font-title mt-2 mb-4 flex justify-between">
        Skills
        <div className="relative flex">
          <input
            type="text"
            onChange={(e) => onSearchChange(e.target.value)}
            className="leading:none text-xs my-0 py-1 px-2 pr-8 sm:text-xl border-2 border-gray-900 focus:border-blue-700 placeholder-gray-700"
            placeholder="Search Skills"
            ref={inputRef}
          />
          <span className="absolute" style={{ right: '10px' }}>
            {search !== '' ? (
              <button
                type="button"
                className="focus:outline-none"
                onClick={() => {
                  setSearch('');
                  inputRef.current.value = '';
                }}
              >
                <XIcon size={16} className="mb-1 transform scale-100 md:scale-125" />
              </button>
            ) : (
              <SearchIcon size={16} className="mb-1 transform scale-100 md:scale-125" />
            )}
          </span>
        </div>
      </div>

      {Object.keys(categorizedSkills)
        .filter((key) => {
          const filtered = categorizedSkills[key].skills.filter((skill) => skill.includes(search.toLowerCase()));
          return filtered.length !== 0;
        })
        .map((key) => (
          <div key={key} className="divide-y divide-gray-500">
            <div className="text-sm sm:text-xl text-gray-900 text-left py-1">{categorizedSkills[key].title}</div>
            <div className="flex justify-start items-center flex-wrap w-full mb-6 pl-4 sm:pl-10">
              {categorizedSkills[key].skills
                .filter((skill) => skill.includes(search.toLowerCase()))
                .map((skill) => createSkill(skill))}
            </div>
          </div>
        ))}
      <span className="flex justify-center text-gray-900">
        {Object.keys(categorizedSkills).filter((key) => {
          const filtered = categorizedSkills[key].skills.filter((skill) => skill.includes(search.toLowerCase()));
          return filtered.length !== 0;
        }).length === 0
          ? 'No Results Found'
          : ''}
      </span>
    </div>
  );
};

export default Skills;

Skills.propTypes = {
  skills: PropTypes.array.isRequired,
  handleSkillsChange: PropTypes.func.isRequired,
};
