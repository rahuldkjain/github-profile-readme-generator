import React, { useState } from 'react';
import { categorizedSkills } from '../constants/skills';

export const SectionsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mainSections = [
    { id: 'title-section', label: 'Title' },
    { id: 'subtitle-section', label: 'Subtitle' },
    { id: 'work-section', label: 'Work' },
    { id: 'skills-section', label: 'Skills' },
    { id: 'social-section', label: 'Social' },
    { id: 'addons-section', label: 'Addons' },
    { id: 'support-section', label: 'Support' },
  ];

  const skillSubSections = Object.keys(categorizedSkills).map((key) => ({
    id: `skills-${key}-section`,
    label: categorizedSkills[key].title,
    parent: 'Skills',
  }));

  const sections = [...mainSections, ...skillSubSections];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-0 top-0 p-4" style={{ zIndex: 999999 }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white rounded-full p-3 shadow-lg transition-all duration-200 focus:outline-none"
        style={{ background: '#f3661aff', transform: 'scale(1)' }}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 mx-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200"
          style={{ maxHeight: 'calc(100vh - 100px)' }}
        >
          <div className="px-4 py-2 border-b border-gray-200 font-medium text-gray-700 sticky top-0 bg-white">
            Sections
          </div>
          <ul className="py-2 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 160px)' }}>
            {mainSections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-300 transition-colors duration-200 focus:outline-none flex items-center"
                >
                  <JumpOver16 className="" />
                  {section.label}
                </button>
                {section.label === 'Skills' && (
                  <ul className="pl-4 bg-gray-50">
                    {skillSubSections.map((subSection) => (
                      <li key={subSection.id}>
                        <button
                          onClick={() => scrollToSection(subSection.id)}
                          className="w-full text-left px-4 py-1 text-sm hover:bg-gray-300 transition-colors duration-200 focus:outline-none flex items-center"
                        >
                          {subSection.label}
                        </button>
                        <hr className="my-1 border-gray-300" />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export function JumpOver16(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path fill="currentColor" d="M12 14a2 2 0 1 1 0-4a2 2 0 0 1 0 4Z"></path>
    </svg>
  );
}
