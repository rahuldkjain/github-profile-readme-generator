import type { CategorizedSkills, SkillState } from '@/types/skills';

export const categorizedSkills: CategorizedSkills = {
  language: {
    title: 'Programming Languages',
    skills: [
      'c',
      'cplusplus',
      'csharp',
      'go',
      'java',
      'javascript',
      'typescript',
      'php',
      'perl',
      'ruby',
      'scala',
      'python',
      'swift',
      'objectivec',
      'clojure',
      'rust',
      'haskell',
      'coffeescript',
      'elixir',
      'erlang',
    ],
  },

  frontend_dev: {
    title: 'Frontend Development',
    skills: [
      'vuejs',
      'react',
      'svelte',
      'angularjs',
      'angular',
      'backbonejs',
      'bootstrap',
      'vuetify',
      'css3',
      'html5',
      'pug',
      'gulp',
      'sass',
      'nextjs',
      'redux',
      'webpack',
      'babel',
      'tailwind',
      'materialize',
      'bulma',
      'gtk',
      'qt',
      'ember',
    ],
  },

  backend_dev: {
    title: 'Backend Development',
    skills: [
      'nodejs',
      'spring',
      'express',
      'graphql',
      'kafka',
      'solr',
      'rabbitMQ',
      'hadoop',
      'nginx',
      'openresty',
      'nestjs',
    ],
  },

  mobile_dev: {
    title: 'Mobile App Development',
    skills: [
      'android',
      'flutter',
      'dart',
      'kotlin',
      'nativescript',
      'xamarin',
      'reactnative',
      'ionic',
      'apachecordova',
    ],
  },

  ai: {
    title: 'AI/ML',
    skills: [
      // Core ML Frameworks
      'tensorflow',
      'pytorch',
      'keras',
      'scikit_learn',
      'opencv',
      // Data Science
      'pandas',
      'numpy',
      'matplotlib',
      'seaborn',
      'jupyter',
      'anaconda',
      // Modern AI Tools
      'langchain',
      'huggingface',
      'ollama',
      // ML Ops & Deployment
      'mlflow',
      'streamlit',
      'fastapi',
      'gradio',
    ],
  },

  database: {
    title: 'Database',
    skills: [
      'mongodb',
      'mysql',
      'postgresql',
      'redis',
      'oracle',
      'cassandra',
      'couchdb',
      'hive',
      'realm',
      'mariadb',
      'cockroachdb',
      'elasticsearch',
      'sqlite',
      'mssql',
    ],
  },

  data_visualization: {
    title: 'Data Visualization',
    skills: ['d3js', 'chartjs', 'canvasjs', 'kibana', 'grafana'],
  },

  devops: {
    title: 'Devops',
    skills: [
      'aws',
      'docker',
      'jenkins',
      'gcp',
      'kubernetes',
      'bash',
      'azure',
      'vagrant',
      'circleci',
      'travisci',
    ],
  },

  baas: {
    title: 'Backend as a Service(BaaS)',
    skills: ['firebase', 'appwrite', 'amplify', 'heroku'],
  },

  framework: {
    title: 'Framework',
    skills: [
      'django',
      'dotnet',
      'electron',
      'symfony',
      'laravel',
      'codeigniter',
      'rails',
      'flask',
      'quasar',
    ],
  },

  testing: {
    title: 'Testing',
    skills: ['cypress', 'selenium', 'jest', 'mocha', 'puppeteer', 'karma', 'jasmine', 'playwright'],
  },

  software: {
    title: 'Software',
    skills: [
      'illustrator',
      'photoshop',
      'xd',
      'figma',
      'blender',
      'sketch',
      'invision',
      'framer',
      'matlab',
      'maya',
      'postman',
    ],
  },

  static_site_generator: {
    title: 'Static Site Generators',
    skills: [
      'gatsby',
      'gridsome',
      'hugo',
      'jekyll',
      'nuxtjs',
      '11ty',
      'scully',
      'sculpin',
      'vuepress',
      'hexo',
      'middleman',
    ],
  },

  game_engines: {
    title: 'Game Engines',
    skills: ['unity', 'unreal'],
  },

  automation: {
    title: 'Automation',
    skills: ['zapier', 'ifttt', 'n8n', 'make'],
  },

  other: {
    title: 'Other',
    skills: ['linux', 'git', 'arduino'],
  },
};

// Get all skills as a flat array
const skillsArray = Object.keys(categorizedSkills).map((key) => categorizedSkills[key].skills);
export const skills = skillsArray.flat().sort();

// Initialize skill state
export const initialSkillState: SkillState = {};
skills.forEach((skill) => {
  initialSkillState[skill] = false;
});

// Export categories
export const categories = Object.keys(categorizedSkills);
