import type {
  ProfileFormData,
  LinksFormData,
  SocialFormData,
  SupportFormData,
} from './validations';
import { DEFAULT_PREFIX } from '@/constants/defaults';

interface GenerateMarkdownOptions {
  profile: Partial<ProfileFormData>;
  links: Partial<LinksFormData>;
  social: Partial<SocialFormData>;
  support: Partial<SupportFormData>;
  skills: Record<string, boolean>;
}

const socialPlatformUrls: Record<string, (username: string) => string> = {
  github: (u) => `https://github.com/${u}`,
  linkedin: (u) => `https://linkedin.com/in/${u}`,
  twitter: (u) => `https://twitter.com/${u}`,
  dev: (u) => `https://dev.to/${u}`,
  stackoverflow: (u) => `https://stackoverflow.com/users/${u}`,
  kaggle: (u) => `https://kaggle.com/${u}`,
  fb: (u) => `https://fb.com/${u}`,
  instagram: (u) => `https://instagram.com/${u}`,
  dribbble: (u) => `https://dribbble.com/${u}`,
  behance: (u) => `https://behance.net/${u}`,
  medium: (u) => `https://medium.com/${u}`,
  youtube: (u) => `https://youtube.com/${u}`,
  codepen: (u) => `https://codepen.io/${u}`,
  codesandbox: (u) => `https://codesandbox.io/${u}`,
  leetcode: (u) => `https://leetcode.com/${u}`,
  hackerrank: (u) => `https://hackerrank.com/${u}`,
  codeforces: (u) => `https://codeforces.com/profile/${u}`,
  codechef: (u) => `https://codechef.com/users/${u}`,
  topcoder: (u) => `https://topcoder.com/members/${u}`,
  hackerearth: (u) => `https://hackerearth.com/${u}`,
  geeks_for_geeks: (u) => `https://auth.geeksforgeeks.org/user/${u}`,
  discord: (u) => `https://discord.gg/${u}`,
};

const socialIcons: Record<string, string> = {
  github: 'github.svg',
  linkedin: 'linked-in-alt.svg',
  twitter: 'twitter.svg',
  dev: 'devto.svg',
  stackoverflow: 'stack-overflow.svg',
  kaggle: 'kaggle.svg',
  fb: 'facebook.svg',
  instagram: 'instagram.svg',
  dribbble: 'dribbble.svg',
  behance: 'behance.svg',
  medium: 'medium.svg',
  youtube: 'youtube.svg',
  codepen: 'codepen.svg',
  codesandbox: 'codesandbox.svg',
  leetcode: 'leet-code.svg',
  hackerrank: 'hackerrank.svg',
  codeforces: 'codeforces.svg',
  codechef: 'codechef.svg',
  topcoder: 'topcoder.svg',
  hackerearth: 'hackerearth.svg',
  geeks_for_geeks: 'geeks-for-geeks.svg',
  discord: 'discord.svg',
};

// Generate skill icon URL - uses skillicons.dev for consistent dark mode support
export function getSkillIconUrl(skill: string): string {
  // Skills that use simple-icons for better brand colors and dark mode support
  // Using colors that work in both light and dark modes
  const simpleIconsFallback: Record<string, string> = {
    // DevOps
    circleci: 'circleci/555', // CircleCI in medium gray (visible in both modes)
    travisci: 'travisci', // Travis CI uses teal brand color (works in both modes)
    // Modern AI/ML Tools
    langchain: 'langchain/1C3C3C', // LangChain dark color
    huggingface: 'huggingface', // HuggingFace brand color
    ollama: 'ollama', // Ollama brand color
    mlflow: 'mlflow/0194E2', // MLflow blue
    streamlit: 'streamlit/FF4B4B', // Streamlit red
    gradio: 'gradio/FF7C00', // Gradio orange
    // Frontend
    backbonejs: 'backbonedotjs/0071B5', // Backbone.js blue
    // Mobile
    nativescript: 'nativescript/3655FF', // NativeScript blue
    apachecordova: 'apachecordova/E8E8E8', // Apache Cordova gray
    // Backend
    solr: 'apachesolr/D9411E', // Apache Solr red
    // Database
    cockroachdb: 'cockroachlabs', // CockroachDB official
    hive: 'apachehive/FDEE21', // Apache Hive yellow
    // Data Visualization
    chartjs: 'chartdotjs/FF6384', // Chart.js pink
    // Testing
    puppeteer: 'puppeteer/40B5A4', // Puppeteer teal
    // Software/Design
    framer: 'framer', // Framer brand color
    invision: 'invision/FF3366', // InVision pink
    // Static Site Generators
    '11ty': 'eleventy', // Eleventy brand color
    hexo: 'hexo/0E83CD', // Hexo blue
    gridsome: 'gridsome', // Gridsome brand color
    // Automation
    zapier: 'zapier/FF4A00', // Zapier orange
    n8n: 'n8n/EA4B71', // n8n pinkish orange
    make: 'make/6D00CC', // Make.com purple
    ifttt: 'ifttt/0071CE', // IFTTT brand color
  };

  // Check if skill needs simple-icons fallback
  if (simpleIconsFallback[skill]) {
    const parts = simpleIconsFallback[skill].split('/');
    const iconName = parts[0];
    const color = parts[1] || ''; // Use brand color if specified
    return `https://cdn.simpleicons.org/${iconName}${color ? `/${color}` : ''}`;
  }

  // Skills that need devicon fallback (not available on skillicons.dev)
  const deviconFallback: Record<string, string> = {
    // Database
    oracle: 'oracle/oracle-original',
    realm: 'realm/realm-original',
    couchdb: 'couchdb/couchdb-original',
    mssql: 'microsoftsqlserver/microsoftsqlserver-plain',
    mariadb: 'mysql/mysql-original-wordmark',
    // Mobile
    xamarin: 'dot-net/dot-net-plain',
    ionic: 'ionic/ionic-original',
    // Programming Languages
    erlang: 'erlang/erlang-original',
    // Frontend
    bulma: 'bulma/bulma-plain',
    materialize: 'materialui/materialui-original',
    // Backend
    openresty: 'nginx/nginx-original',
    hadoop: 'hadoop/hadoop-original',
    // AI/ML - Core Data Science
    keras: 'keras/keras-original',
    numpy: 'numpy/numpy-original',
    matplotlib: 'matplotlib/matplotlib-original',
    jupyter: 'jupyter/jupyter-original-wordmark',
    pandas: 'pandas/pandas-original',
    seaborn: 'python/python-original',
    // Data Visualization
    canvasjs: 'javascript/javascript-original', // No official icon available
    kibana: 'kibana/kibana-original',
    // DevOps
    vagrant: 'vagrant/vagrant-original',
    // BaaS
    amplify: 'amazonwebservices/amazonwebservices-plain-wordmark',
    // Framework
    codeigniter: 'codeigniter/codeigniter-plain',
    quasar: 'quasar/quasar-plain',
    // Testing
    mocha: 'mocha/mocha-plain',
    playwright: 'playwright/playwright-original',
    karma: 'karma/karma-original',
    jasmine: 'jasmine/jasmine-original',
    // Software
    sketch: 'sketch/sketch-original',
    maya: 'maya/maya-original',
    // Static Site Generators
    hugo: 'hugo/hugo-original',
    sculpin: 'php/php-original',
    vuepress: 'vuejs/vuejs-original', // VuePress doesn't have official icon, using Vue
    jekyll: 'jekyll/jekyll-original',
    middleman: 'ruby/ruby-original',
    // Angular variant
    scully: 'angularjs/angularjs-original',
  };

  // Check if skill needs devicon fallback
  if (deviconFallback[skill]) {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${deviconFallback[skill]}.svg`;
  }

  // Map skill names to skillicons identifiers
  const skillIconsMap: Record<string, string> = {
    // Programming Languages
    c: 'c',
    cplusplus: 'cpp',
    csharp: 'cs',
    go: 'go',
    java: 'java',
    javascript: 'js',
    typescript: 'ts',
    php: 'php',
    perl: 'perl',
    ruby: 'ruby',
    scala: 'scala',
    python: 'py',
    swift: 'swift',
    objectivec: 'apple',
    clojure: 'clojure',
    rust: 'rust',
    haskell: 'haskell',
    coffeescript: 'coffeescript',
    elixir: 'elixir',
    erlang: 'erlang',
    // Frontend
    vuejs: 'vue',
    react: 'react',
    svelte: 'svelte',
    angularjs: 'angular',
    angular: 'angular',
    backbonejs: 'backbone',
    bootstrap: 'bootstrap',
    vuetify: 'vuetify',
    css3: 'css',
    html5: 'html',
    pug: 'pug',
    gulp: 'gulp',
    sass: 'sass',
    redux: 'redux',
    webpack: 'webpack',
    babel: 'babel',
    tailwind: 'tailwind',
    bulma: 'bulma',
    gtk: 'gtk',
    qt: 'qt',
    ember: 'ember',
    // Backend
    nodejs: 'nodejs',
    spring: 'spring',
    express: 'express',
    graphql: 'graphql',
    kafka: 'kafka',
    rabbitmq: 'rabbitmq',
    rabbitMQ: 'rabbitmq', // Handle capital MQ variant
    hadoop: 'hadoop',
    nginx: 'nginx',
    nestjs: 'nestjs',
    // Mobile
    android: 'androidstudio',
    flutter: 'flutter',
    dart: 'dart',
    kotlin: 'kotlin',
    reactnative: 'react',
    ionic: 'ionic',
    // AI/ML
    tensorflow: 'tensorflow',
    pytorch: 'pytorch',
    opencv: 'opencv',
    scikit_learn: 'scikitlearn',
    anaconda: 'anaconda',
    fastapi: 'fastapi',
    // Database
    mongodb: 'mongodb',
    mysql: 'mysql',
    postgresql: 'postgres',
    redis: 'redis',
    cassandra: 'cassandra',
    elasticsearch: 'elasticsearch',
    sqlite: 'sqlite',
    // Data Visualization
    d3js: 'd3',
    grafana: 'grafana',
    // DevOps
    aws: 'aws',
    docker: 'docker',
    jenkins: 'jenkins',
    gcp: 'gcp',
    kubernetes: 'kubernetes',
    bash: 'bash',
    azure: 'azure',
    vagrant: 'vagrant',
    circleci: 'circleci',
    travisci: 'travis',
    // BaaS
    firebase: 'firebase',
    appwrite: 'appwrite',
    heroku: 'heroku',
    // Framework
    django: 'django',
    dotnet: 'dotnet',
    electron: 'electron',
    symfony: 'symfony',
    laravel: 'laravel',
    codeigniter: 'codeigniter',
    rails: 'rails',
    flask: 'flask',
    quasar: 'quasar',
    // Testing
    cypress: 'cypress',
    selenium: 'selenium',
    jest: 'jest',
    mocha: 'mocha',
    puppeteer: 'puppeteer',
    karma: 'karma',
    jasmine: 'jasmine',
    // Software
    illustrator: 'illustrator',
    photoshop: 'photoshop',
    xd: 'xd',
    figma: 'figma',
    blender: 'blender',
    sketch: 'sketch',
    invision: 'invision',
    framer: 'framer',
    matlab: 'matlab',
    postman: 'postman',
    // Static Site Generators
    gatsby: 'gatsby',
    hugo: 'hugo',
    jekyll: 'jekyll',
    nextjs: 'nextjs',
    nuxtjs: 'nuxtjs',
    '11ty': 'eleventy',
    hexo: 'hexo',
    // Game Engines
    unity: 'unity',
    unreal: 'unreal',
    // Automation
    zapier: 'zapier',
    ifttt: 'ifttt',
    // Other
    linux: 'linux',
    git: 'git',
    arduino: 'arduino',
  };

  const iconName = skillIconsMap[skill] || skill;

  // Use skillicons.dev which provides dark-mode compatible icons
  // This service automatically handles dark mode and provides consistent styling
  return `https://skillicons.dev/icons?i=${iconName}`;
}

export function generateMarkdown(options: GenerateMarkdownOptions): string {
  const { profile, links, social, support, skills } = options;
  let markdown = '';

  // Title and Subtitle
  if (profile.title) {
    markdown += `# ${DEFAULT_PREFIX.title} ${profile.title}\n\n`;
  }

  if (profile.subtitle) {
    markdown += `### ${profile.subtitle}\n\n`;
  }

  // Visitor Badge
  if (profile.visitorsBadge && social.github) {
    markdown += `<p align="left"> <img src="https://komarev.com/ghpvc/?username=${social.github}&label=${profile.badgeLabel || 'Profile views'}&color=${profile.badgeColor || '0e75b6'}&style=${profile.badgeStyle || 'flat'}" alt="${social.github}" /> </p>\n\n`;
  }

  // GitHub Trophy
  if (profile.githubProfileTrophy && social.github) {
    markdown += `<p align="left"> <a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy.vercel.app/?username=${social.github}" alt="${social.github}" /></a> </p>\n\n`;
  }

  // Twitter Badge
  if (social.twitterBadge && social.twitter) {
    markdown += `<p align="left"> <a href="https://twitter.com/${social.twitter}" target="blank"><img src="https://img.shields.io/twitter/follow/${social.twitter}?logo=twitter&style=for-the-badge" alt="${social.twitter}" /></a> </p>\n\n`;
  }

  // About sections
  const aboutSections = [
    {
      key: 'currentWork',
      value: profile.currentWork,
      prefix: DEFAULT_PREFIX.currentWork,
      link: links.currentWork,
    },
    { key: 'currentLearn', value: profile.currentLearn, prefix: DEFAULT_PREFIX.currentLearn },
    {
      key: 'collaborateOn',
      value: profile.collaborateOn,
      prefix: DEFAULT_PREFIX.collaborateOn,
      link: links.collaborateOn,
    },
    {
      key: 'helpWith',
      value: profile.helpWith,
      prefix: DEFAULT_PREFIX.helpWith,
      link: links.helpWith,
    },
    { key: 'ama', value: profile.ama, prefix: DEFAULT_PREFIX.ama },
    { key: 'contact', value: profile.contact, prefix: DEFAULT_PREFIX.contact },
    { key: 'funFact', value: profile.funFact, prefix: DEFAULT_PREFIX.funFact },
  ];

  aboutSections.forEach(({ value, prefix, link }) => {
    if (value) {
      if (link) {
        markdown += `- ${prefix} **[${value}](${link})**\n\n`;
      } else {
        markdown += `- ${prefix} **${value}**\n\n`;
      }
    }
  });

  // Portfolio
  if (links.portfolio) {
    markdown += `- ${DEFAULT_PREFIX.portfolio} **[${links.portfolio}](${links.portfolio})**\n\n`;
  }

  // Blog
  if (links.blog) {
    markdown += `- ${DEFAULT_PREFIX.blog} **[${links.blog}](${links.blog})**\n\n`;
  }

  // Resume
  if (links.resume) {
    markdown += `- ${DEFAULT_PREFIX.resume} **[${links.resume}](${links.resume})**\n\n`;
  }

  // Social Connect
  const socialLinks = Object.entries(social).filter(
    ([key, value]) =>
      key !== 'twitterBadge' && value && typeof value === 'string' && value.trim() !== ''
  );
  if (socialLinks.length > 0) {
    markdown += `<h3 align="left">Connect with me:</h3>\n`;
    markdown += `<p align="left">\n`;

    socialLinks.forEach(([platform, username]) => {
      const icon = socialIcons[platform];
      const url = socialPlatformUrls[platform];
      if (icon && url && username) {
        markdown += `<a href="${url(username as string)}" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/${icon}" alt="${username as string}" height="30" width="40" /></a>\n`;
      }
    });

    markdown += `</p>\n\n`;
  }

  // Skills
  const selectedSkills = Object.entries(skills).filter(([_, selected]) => selected);
  if (selectedSkills.length > 0) {
    markdown += `<h3 align="left">Languages and Tools:</h3>\n`;
    markdown += `<p align="left">`;

    selectedSkills.forEach(([skill]) => {
      const iconUrl = getSkillIconUrl(skill);
      markdown += ` <a href="https://developer.mozilla.org/en-US/docs/Web/${skill}" target="_blank" rel="noreferrer"> <img src="${iconUrl}" alt="${skill}" width="40" height="40"/> </a>`;
    });

    markdown += `</p>\n\n`;
  }

  // Support
  if (support.buyMeACoffee) {
    markdown += `<h3 align="left">Support:</h3>\n`;
    markdown += `<p><a href="https://www.buymeacoffee.com/${support.buyMeACoffee}"> <img align="left" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50" width="210" alt="${support.buyMeACoffee}" /></a></p><br><br>\n\n`;
  }

  // GitHub Stats
  if (profile.githubStats && social.github) {
    markdown += `<p><img align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=${social.github}&show_icons=true&locale=en&layout=compact" alt="${social.github}" /></p>\n\n`;
    markdown += `<p>&nbsp;<img align="center" src="https://github-readme-stats.vercel.app/api?username=${social.github}&show_icons=true&locale=en" alt="${social.github}" /></p>\n\n`;
  }

  // Streak Stats
  if (profile.streakStats && social.github) {
    markdown += `<p><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=${social.github}&" alt="${social.github}" /></p>\n\n`;
  }

  return markdown;
}

export function generateTitle(profile: Partial<ProfileFormData>): string {
  return profile.title || 'My GitHub Profile';
}
