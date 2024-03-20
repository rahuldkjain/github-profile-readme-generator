import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import '../styles/toggle.css';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.isDarkMode ? '#1C3336' : '#fff'};
    color: ${props => props.isDarkMode ? '#d0d0d5' : '#1C3336'};
    transition: background-color 0.3s ease;
  }
`;


const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const toggleMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };
  
  return ( 
    <>
      <GlobalStyle isDarkMode={isDarkMode} />
      <div class="toggle-container">
        <span class="toggle-label">Light</span>
        <div class="toggle">
            <input type="checkbox" id="dark-mode-toggle" checked={isDarkMode} onChange={toggleMode} class="toggle-input" />
            <label for="dark-mode-toggle" class="toggle-slider"></label>
            <div class={`toggle-ball ${isDarkMode ? 'dark' : 'light'}`} />
        </div>
        <span class="toggle-label">Dark</span>
      </div>
    </>
  );
};

export default DarkMode;
