import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';
import SectionsMenu from './sectionsMenu';

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <SectionsMenu />
    <header>
      <Header heading="GitHub Profile README Generator" />
    </header>
    <main className="flex-grow">{children}</main>
    <footer>
      <Footer />
    </footer>
  </div>
);
export default Layout;

Layout.defaultProps = {
  children: '',
};

Layout.propTypes = {
  children: PropTypes.element,
};
