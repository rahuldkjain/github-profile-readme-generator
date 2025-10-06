import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Header from './header';
import Footer from './footer';
import LanguageSelector from './languageSelector';

const Layout = ({ children }) => {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Header heading={t('app.title')} />
      </header>
      <div className="flex justify-end px-4 py-2">
        <LanguageSelector />
      </div>
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
