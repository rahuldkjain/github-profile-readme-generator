import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  
  .social img {
    filter: ${({ theme }) => theme.iconColor};
  }

  .generate-readme-field {
    color: ${({ theme }) => theme.generateReadMeColor}; 
  }

  .skills-title {
    color: ${({ theme }) => theme.skillTitleColor}; 
  }

  .work-section input{
    color: ${({ theme }) => theme.workInputColor}; 
  }

  .subtitle-color {
    color: ${({ theme }) => theme.subtitleColor};  
  }

  .title input{
    color: ${({ theme }) => theme.titleInfoColor};   
  }
  
  .header {
    color: ${({ theme }) => theme.headerColor};   
  }
  
  .header-title {
    color: ${({ theme }) => theme.headerTitleColor};   
  }
  
  .config-restore-form, .config-reset-form {
    color: ${({ theme }) => theme.configColor};   
  }

  .tips div {
    color: ${({ theme }) => theme.configTipsColor};    
  }
  
`