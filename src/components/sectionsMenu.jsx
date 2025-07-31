import React, { useState } from 'react';

const SectionsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: 'title-section', label: 'Title' },
    { id: 'subtitle-section', label: 'Subtitle' },
    { id: 'work-section', label: 'Work' },
    { id: 'skills-section', label: 'Skills' },
    { id: 'social-section', label: 'Social' },
    { id: 'addons-section', label: 'Addons' },
    { id: 'support-section', label: 'Support' },
  ];

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
        <div className="absolute right-0 mt-2 mx-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200">
          <div className="px-4 py-2 border-b border-gray-200 font-medium text-gray-700">Sections</div>
          <ul className="py-2">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-300 transition-colors duration-200 focus:outline-none"
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SectionsMenu;
