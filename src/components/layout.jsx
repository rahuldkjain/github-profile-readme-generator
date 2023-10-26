import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';
import '../pages/index.css';

const Layout = ({ children }) => {
  const storedDarkMode = localStorage.getItem('darkMode') === 'true';
  const [darkMode, setDarkMode] = useState(storedDarkMode);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div 
      className={`flex flex-col min-h-screen ${darkMode ? 'dark' : ''}`}
    >
      <header>
        <Header heading="GitHub Profile README Generator" setDarkMode={setDarkMode} darkMode={darkMode}/>
      </header>
      <main className="flex-grow">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default Layout;

Layout.defaultProps = {
  children: '',
};

Layout.propTypes = {
  children: PropTypes.element,
};
