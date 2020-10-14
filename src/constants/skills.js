//const baseURL = 'https://devicons.github.io/devicon/devicon.git/icons/';

// Frontend Development
import jamStack from "../images/icons/fullstack/Jamstack_Icon_Original.svg";
import mernStack from "../images/icons/fullstack/mern.svg";
import meanStack from "../images/icons/fullstack/meanStack.svg";
import lampStack from "../images/icons/fullstack/lamp.svg";


const categorizedSkills = {
  language: {
    title: "Programming Languages",
    skills: [
      "c",
      "cplusplus",
      "csharp",
      "go",
      "java",
      "javascript",
      "typescript",
      "php",
      "perl",
      "ruby",
      "scala",
      "python",
      "swift",
      "objectivec",
      "clojure",
      "rust",
      "haskell",
    ],
  },

  fullstack_dev: {
    title: "Fullstack Development",
    skills: [
      "MERN_stack",
      "MEAN_stack",
      "LAMP_stack",
      "JAM_stack",
    ],
  },

  frontend_dev: {
    title: "Frontend Development",
    skills: [
      "vuejs",
      "react",
      "svelte",
      "angularjs",
      "backbonejs",
      "bootstrap",
      "vuetify",
      "css3",
      "html5",
      "pug",
      "gulp",
      "sass",
      "redux",
      "webpack",
      "babel",
      "tailwind",
      "materialize",
      "bulma",
      "gtk",
      "qt",
      "wx_widgets",
      "ember",
    ],
  },

  backend_dev: {
    title: "Backend Development",
    skills: [
      "nodejs",
      "spring",
      "express",
      "graphql",
      "kafka",
      "solr",
      "rabbitMQ",
      "hadoop",
      "nginx",
      "openresty",
    ],
  },

  mobile_dev: {
    title: "Mobile App Development",
    skills: [
      "android",
      "flutter",
      "dart",
      "kotlin",
      "nativescript",
      "xamarin",
      "reactnative",
      "ionic",
    ],
  },

  

  ai: {
    title: "AI/ML",
    skills: ["tensorflow", "pytorch", "opencv", "scikit_learn"],
  },

  database: {
    title: "Database",
    skills: [
      "mongodb",
      "mysql",
      "postgresql",
      "redis",
      "oracle",
      "cassandra",
      "couchdb",
      "hive",
      "realm",
      "mariadb",
      "cockroachdb",
      "elasticsearch",
    ],
  },

  data_visualization: {
    title: "Data Visualization",
    skills: ["d3js", "chartjs", "canvasjs", "kibana", "grafana"],
  },

  devops: {
    title: "Devops",
    skills: [
      "aws",
      "docker",
      "jenkins",
      "gcp",
      "kubernetes",
      "bash",
      "azure",
      "vagrant",
      "circleci"
    ],
  },

  baas: {
    title: "Backend as a Service(BaaS)",
    skills: ["firebase", "amplify"],
  },

  framework: {
    title: "Framework",
    skills: [
      "django",
      "dotnet",
      "electron",
      "symfony",
      "laravel",
      "codeigniter",
      "rails",
      "flask",
      "quasar"
    ],
  },

  testing: {
    title: "Testing",
    skills: [
      "cypress",
      "selenium",
      "jest",
      "mocha",
      "puppeteer",
      "karma",
      "jasmine",
    ],
  },

  software: {
    title: "Software",
    skills: [
      "illustrator",
      "photoshop",
      "xd",
      "figma",
      "blender",
      "sketch",
      "invision",
      "framer",
    ],
  },

  static_site_generator: {
    title: "Static Site Generators",
    skills: [
      "gatsby", 
      "gridsome", 
      "hugo", 
      "jekyll", 
      "nextjs", 
      "nuxtjs", 
      "11ty", 
      "scully",
      "sculpin",
      "sapper",
      "vuepress"
    ],
  },

  game_engines:{
    title: "Game Engines",
    skills: ["unity"],
  },

  other: {
    title: "Other",
    skills: ["linux", "git"],
  },
}

const icons = {
  JAM_stack: jamStack,
  MEAN_stack: meanStack,
  MERN_stack: mernStack,
  LAMP_stack: lampStack,

}

const skillWebsites = {
  vuejs: "https://vuejs.org/",
  react: "https://reactjs.org/",
  angularjs: "https://angular.io",
  aws: "https://aws.amazon.com",
  android: "https://developer.android.com",
  backbonejs: "https://backbonejs.org",
  bootstrap: "https://getbootstrap.com",
  c: "https://www.cprogramming.com/",
  canvasjs: "https://canvasjs.com",
  coffeescript: "https://offeescript.org",
  codeigniter: "https://codeigniter.com",
  cplusplus: "https://www.w3schools.com/cpp/",
  css3: "https://www.w3schools.com/css/",
  csharp: "https://www.w3schools.com/cs/",
  d3js: "https://d3js.org/",
  django: "https://www.djangoproject.com/",
  docker: "https://www.docker.com/",
  dotnet: "https://dotnet.microsoft.com/",
  electron: "https://www.electronjs.org",
  express: "https://expressjs.com",
  go: "https://golang.org",
  graphql: "https://graphql.org",
  gulp: "https://gulpjs.com",
  html5: "https://www.w3.org/html/",
  hugo: "https://gohugo.io/",
  java: "https://www.java.com",
  javascript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  ionic: "https://ionicframework.com",
  laravel: "https://laravel.com/",
  meteor: "https://www.meteor.com/",
  mongodb: "https://www.mongodb.com/",
  mysql: "https://www.mysql.com/",
  nginx: "https://www.nginx.com",
  nodejs: "https://nodejs.org",
  openresty: "https://openresty.org/",
  oracle: "https://www.oracle.com/",
  photoshop: "https://www.photoshop.com/en",
  xd: "https://www.adobe.com/products/xd.html",
  php: "https://www.php.net",
  perl: "https://www.perl.org/",
  postgresql: "https://www.postgresql.org",
  python: "https://www.python.org",
  rails: "https://rubyonrails.org",
  redis: "https://redis.io",
  ruby: "https://www.ruby-lang.org/en/",
  rust: "https://www.rust-lang.org",
  sass: "https://sass-lang.com",
  scala: "https://www.scala-lang.org",
  symfony: "https://symfony.com",
  spring: "",
  swift: "",
  typescript: "https://www.typescriptlang.org/",
  linux: "https://www.linux.org/",
  redux: "https://redux.js.org",
  webpack: "https://webpack.js.org",
  flutter: "https://flutter.dev",
  dart: "https://dart.dev",
  kotlin: "https://kotlinlang.org",
  tensorflow: "https://www.tensorflow.org",
  chartjs: "https://www.chartjs.org",
  jenkins: "https://www.jenkins.io",
  gcp: "https://cloud.google.com",
  kubernetes: "https://kubernetes.io",
  azure: "https://azure.microsoft.com/en-in/",
  git: "https://git-scm.com/",
  kafka: "https://kafka.apache.org/",
  solr: "https://lucene.apache.org/solr/",
  cassandra: "https://cassandra.apache.org/",
  rabbitMQ: "https://www.rabbitmq.com",
  hadoop: "https://hadoop.apache.org/",
  bash: "https://www.gnu.org/software/bash/",
  pytorch: "https://pytorch.org/",
  opencv: "https://opencv.org/",
  illustrator: "https://www.adobe.com/in/products/illustrator.html",
  figma: "https://www.figma.com/",
  blender: "",
  babel: "https://babeljs.io/",
  sketch: "https://www.sketch.com/",
  flask: "",
  nativescript: "https://nativescript.org/",
  xamarin: "https://dotnet.microsoft.com/apps/xamarin",
  vagrant: "",
  tailwind: "https://tailwindcss.com/",
  materialize: "https://materializecss.com/",
  invision: "https://www.invisionapp.com/",
  framer: "",
  bulma: "https://bulma.io/",
  couchdb: "",
  firebase: "https://firebase.google.com/",
  amplify: "https://aws.amazon.com/amplify/",
  hive: "",
  realm: "",
  gatsby: "https://www.gatsbyjs.com/",
  gridsome: "",
  nuxtjs: "https://nuxtjs.org/",
  jekyll: "https://jekyllrb.com/",
  nextjs: "https://nextjs.org/",
  reactnative: "https://reactnative.dev/",
  mariadb: "https://mariadb.org/",
  cockroachdb: "https://www.cockroachlabs.com/product/cockroachdb/",
  objectivec: "",
  clojure: "",
  haskell: "",
  svelte: "https://svelte.dev",
  vuetify: "https://vuetifyjs.com/en/",
  pug: "https://pugjs.org",
  mocha: "https://mochajs.org",
  jest: "https://jestjs.io",
  cypress: "https://www.cypress.io",
  selenium: "https://www.selenium.dev",
  puppeteer: "https://github.com/puppeteer/puppeteer",
  karma: "https://karma-runner.github.io/latest/index.html",
  jasmine: "https://jasmine.github.io/",
  gtk: "",
  qt: "",
  wx_widgets: "",
  ember: "",
  scikit_learn: "",
  quasar: "https://quasar.dev/",
  kibana: "https://www.elastic.co/kibana",
  grafana: "https://grafana.com",
  elasticsearch: "https://www.elastic.co",
  circleci: "https://circleci.com",
  unity: "https://unity.com/",
  LAMP_stack: "https://en.wikipedia.org/wiki/LAMP_(software_bundle)",
  MERN_stack: "",
  MEAN_stack: "https://meanjs.org",
  JAM_stack: "https://jamstack.org/",
  scully: "https://scully.io/",
  sculpin: "https://sculpin.io/",
  "11ty": "https://www.11ty.dev/",
  sapper: "https://sapper.svelte.dev/",
  vuepress: "https://vuepress.vuejs.org/",
  unity: "https://unity.com/"
}

const initialSkillState = {}

const skillsArray = Object.keys(categorizedSkills).map(
  key => categorizedSkills[key].skills
)
const skills = [].concat.apply([], skillsArray).sort()

skills.forEach(skill => {
  initialSkillState[skill] = false
})

const categories = Object.keys(categorizedSkills)

export {
  initialSkillState,
  icons,
  skills,
  skillWebsites,
  categorizedSkills,
  categories,
}
