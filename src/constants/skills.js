//const baseURL = 'https://devicons.github.io/devicon/devicon.git/icons/';
const skills = ['vuejs', 'react', 'angularjs', 'aws', 'android', 'backbonejs', 'bootstrap', 'c', 'cplusplus', 'css3', 'csharp',
    'd3js', 'django', 'docker', 'dotnet', 'electron', 'flask', 'go', 'gulp', 'html5', 'java', 'javascript', 'typescript', 'laravel',
    'symfony', 'codeigniter', 'mongodb', 'mysql', 'php', 'postgresql', 'rails', 'redis', 'ruby', 'rust', 'sass', 'scala', 'nativescript',
    'nodejs', 'python', 'swift', 'spring', 'oracle', 'nginx', 'linux', 'redux', 'webpack', 'express', 'flutter', 'dart', 'kotlin',
    'tensorflow', 'chartjs', 'jenkins', 'gcp', 'kubernetes', 'azure', 'git', 'kafka', 'solr', 'cassandra', 'rabbitMQ',
    'hadoop', 'bash', 'pytorch', 'opencv', 'illustrator', 'photoshop', 'figma', 'blender', 'babel', 'sketch',
    'xamarin', 'vagrant', 'tailwind', 'materialize', 'invision', 'framer', 'couchdb', 'bulma', 'firebase', 'amplify', 'hive', 'realm', 
     'gastby', 'gridsome', 'nuxtjs', 'jekyll', 'nextjs', 'reactnative' ];
skills.sort();
const categories = ['frontend_dev', 'backend_dev', 'ai', 'mobile_dev', 'database', 'data_visualization',
    'devops', 'baas', 'framework', 'language', 'software', 'static_site_generator', 'other'];
const categorizedSkills = {
    frontend_dev: {
        title: 'Frontend Development',
        skills: ['vuejs', 'react', 'angularjs', 'backbonejs', 'bootstrap', 'css3', 'html5', 'gulp', 'sass', 'redux', 'webpack', 'babel', 'tailwind', 'materialize', 'bulma'],
    },
    backend_dev: {
        title: 'Backend Development',
        skills: ['nodejs', 'spring', 'express', 'kafka', 'solr', 'rabbitMQ', 'hadoop', 'nginx'],
    },
    mobile_dev: {
        title: 'Mobile App Development',
        skills: ['android', 'flutter', 'dart', 'kotlin', 'nativescript', 'xamarin', 'reactnative','ionic'],
    },
    ai: {
        title: 'AI/ML',
        skills: ['tensorflow', 'pytorch', 'opencv'],
    },
    database: {
        title: 'Database',
        skills: ['mongodb', 'mysql', 'postgresql', 'redis', 'oracle', 'cassandra', 'couchdb', 'hive', 'realm'],
    },
    devops: {
        title: 'Devops',
        skills: ['aws', 'docker', 'jenkins', 'gcp', 'kubernetes', 'bash', 'azure', 'vagrant'],
    },
    baas: {
        title: 'Backend as a Service(BaaS)',
        skills: ['firebase', 'amplify']
    },
    data_visualization: {
        title: 'Data Visualization',
        skills: ['d3js', 'chartjs','canvasjs']
    },
    framework: {
        title: '',
        skills: ['django', 'dotnet', 'electron', 'symfony', 'laravel', 'codeigniter', 'rails', 'flask']
    },
    language: {
        title: 'Programming Languages',
        skills: ['c', 'cplusplus', 'csharp', 'go', 'java', 'javascript', 'typescript', 'php', 'ruby', 'scala', 'python', 'swift']
    },
    software: {
        title: 'Software',
        skills: ['illustrator', 'photoshop', 'figma', 'blender', 'sketch', 'invision', 'framer']
    },
    static_site_generator: {
        title: 'Static Site Generators',
        skills: ['gastby', 'gridsome', 'hugo', 'jekyll', 'nextjs','nuxtjs']
    },
    other: {
        title: 'Other',
        skills: ['linux', 'git']
    }
}
const icons = {
    vuejs: 'https://devicons.github.io/devicon/devicon.git/icons/vuejs/vuejs-original-wordmark.svg',
    react: 'https://devicons.github.io/devicon/devicon.git/icons/react/react-original-wordmark.svg',
    angularjs: 'https://devicons.github.io/devicon/devicon.git/icons/angularjs/angularjs-original.svg',
    aws: 'https://devicons.github.io/devicon/devicon.git/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    android: 'https://devicons.github.io/devicon/devicon.git/icons/android/android-original-wordmark.svg',
    backbonejs: 'https://devicons.github.io/devicon/devicon.git/icons/backbonejs/backbonejs-original-wordmark.svg',
    bootstrap: 'https://devicons.github.io/devicon/devicon.git/icons/bootstrap/bootstrap-plain.svg',
    c: 'https://devicons.github.io/devicon/devicon.git/icons/c/c-original.svg',
    canvasjs : 'https://raw.githubusercontent.com/Hardik0307/Hardik0307/master/assets/canvasjs-charts.svg',
    coffeescript: 'https://devicons.github.io/devicon/devicon.git/icons/coffeescript/coffeescript-original-wordmark.svg',
    codeigniter: 'https://cdn.worldvectorlogo.com/logos/codeigniter.svg',
    cplusplus: 'https://devicons.github.io/devicon/devicon.git/icons/cplusplus/cplusplus-original.svg',
    css3: 'https://devicons.github.io/devicon/devicon.git/icons/css3/css3-original-wordmark.svg',
    csharp: 'https://devicons.github.io/devicon/devicon.git/icons/csharp/csharp-original.svg',
    d3js: 'https://devicons.github.io/devicon/devicon.git/icons/d3js/d3js-original.svg',
    django: 'https://devicons.github.io/devicon/devicon.git/icons/django/django-original.svg',
    docker: 'https://devicons.github.io/devicon/devicon.git/icons/docker/docker-original-wordmark.svg',
    dotnet: 'https://devicons.github.io/devicon/devicon.git/icons/dot-net/dot-net-original-wordmark.svg',
    electron: 'https://devicons.github.io/devicon/devicon.git/icons/electron/electron-original.svg',
    express: 'https://devicons.github.io/devicon/devicon.git/icons/express/express-original-wordmark.svg',
    go: 'https://devicons.github.io/devicon/devicon.git/icons/go/go-original.svg',
    gulp: 'https://devicons.github.io/devicon/devicon.git/icons/gulp/gulp-plain.svg',
    html5: 'https://devicons.github.io/devicon/devicon.git/icons/html5/html5-original-wordmark.svg',
    hugo : 'https://api.iconify.design/logos-hugo.svg',
    java: 'https://devicons.github.io/devicon/devicon.git/icons/java/java-original-wordmark.svg',
    javascript: 'https://devicons.github.io/devicon/devicon.git/icons/javascript/javascript-original.svg',
    ionic: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg',
    laravel: 'https://devicons.github.io/devicon/devicon.git/icons/laravel/laravel-plain-wordmark.svg',
    meteor: 'https://devicons.github.io/devicon/devicon.git/icons/meteor/meteor-original-wordmark.svg',
    mongodb: 'https://devicons.github.io/devicon/devicon.git/icons/mongodb/mongodb-original-wordmark.svg',
    mysql: 'https://devicons.github.io/devicon/devicon.git/icons/mysql/mysql-original-wordmark.svg',
    nginx: 'https://devicons.github.io/devicon/devicon.git/icons/nginx/nginx-original.svg',
    nodejs: 'https://devicons.github.io/devicon/devicon.git/icons/nodejs/nodejs-original-wordmark.svg',
    oracle: 'https://devicons.github.io/devicon/devicon.git/icons/oracle/oracle-original.svg',
    photoshop: 'https://devicons.github.io/devicon/devicon.git/icons/photoshop/photoshop-plain.svg',
    php: 'https://devicons.github.io/devicon/devicon.git/icons/php/php-original.svg',
    postgresql: 'https://devicons.github.io/devicon/devicon.git/icons/postgresql/postgresql-original-wordmark.svg',
    python: 'https://devicons.github.io/devicon/devicon.git/icons/python/python-original.svg',
    rails: 'https://devicons.github.io/devicon/devicon.git/icons/rails/rails-original-wordmark.svg',
    redis: 'https://devicons.github.io/devicon/devicon.git/icons/redis/redis-original-wordmark.svg',
    ruby: 'https://devicons.github.io/devicon/devicon.git/icons/ruby/ruby-original-wordmark.svg',
    rust: 'https://devicons.github.io/devicon/devicon.git/icons/rust/rust-plain.svg',
    sass: 'https://devicons.github.io/devicon/devicon.git/icons/sass/sass-original.svg',
    scala: 'https://devicons.github.io/devicon/devicon.git/icons/scala/scala-original-wordmark.svg',
    sketch: 'https://devicons.github.io/devicon/devicon.git/icons/sketch/sketch-original-wordmark.svg',
    symfony: 'https://symfony.com/logos/symfony_black_03.svg',
    spring: 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg',
    swift: 'https://devicons.github.io/devicon/devicon.git/icons/swift/swift-original-wordmark.svg',
    typescript: 'https://devicons.github.io/devicon/devicon.git/icons/typescript/typescript-original.svg',
    linux: 'https://devicons.github.io/devicon/devicon.git/icons/linux/linux-original.svg',
    redux: 'https://devicons.github.io/devicon/devicon.git/icons/redux/redux-original.svg',
    webpack: 'https://devicons.github.io/devicon/devicon.git/icons/webpack/webpack-original.svg',
    flutter: 'https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg',
    dart: 'https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg',
    kotlin: 'https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg',
    tensorflow: 'https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg',
    chartjs: 'https://www.chartjs.org/media/logo-title.svg',
    jenkins: 'https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg',
    gcp: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg',
    kubernetes: 'https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg',
    azure: 'https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg',
    git: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
    kafka: 'https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg',
    solr: 'https://www.vectorlogo.zone/logos/apache_solr/apache_solr-icon.svg',
    cassandra: 'https://www.vectorlogo.zone/logos/apache_cassandra/apache_cassandra-icon.svg',
    rabbitMQ: 'https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg',
    hadoop: 'https://www.vectorlogo.zone/logos/apache_hadoop/apache_hadoop-icon.svg',
    bash: 'https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg',
    pytorch: 'https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg',
    opencv: 'https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg',
    illustrator: 'https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg',
    figma: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg',
    blender: 'https://download.blender.org/branding/community/blender_community_badge_white.svg',
    babel: 'https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg',
    sketch: 'https://www.vectorlogo.zone/logos/sketchapp/sketchapp-icon.svg',
    flask: 'https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg',
    nativescript: 'https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/nativescript.svg',
    xamarin: 'https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/xamarin.svg',
    vagrant: 'https://www.vectorlogo.zone/logos/vagrantup/vagrantup-icon.svg',
    tailwind: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
    materialize: 'https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg',
    invision: 'https://www.vectorlogo.zone/logos/invisionapp/invisionapp-icon.svg',
    framer: 'https://www.vectorlogo.zone/logos/framer/framer-icon.svg',
    bulma: 'https://raw.githubusercontent.com/gilbarbara/logos/804dc257b59e144eaca5bc6ffd16949752c6f789/logos/bulma.svg',
    couchdb: 'https://raw.githubusercontent.com/devicons/devicon/0d6c64dbbf311879f7d563bfc3ccf559f9ed111c/icons/couchdb/couchdb-original.svg',
    firebase: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
    amplify: 'https://docs.amplify.aws/assets/logo-dark.svg',
    hive: 'https://www.vectorlogo.zone/logos/apache_hive/apache_hive-icon.svg',
    realm: 'https://raw.githubusercontent.com/bestofjs/bestofjs-webui/8665e8c267a0215f3159df28b33c365198101df5/public/logos/realm.svg',
    gastby: 'https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-icon.svg',
    gridsome: 'https://www.vectorlogo.zone/logos/gridsome/gridsome-icon.svg',
    nuxtjs: 'https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-icon.svg', 
    jekyll: 'https://www.vectorlogo.zone/logos/jekyllrb/jekyllrb-icon.svg',
    nextjs: 'https://cdn.worldvectorlogo.com/logos/nextjs-3.svg',
    reactnative: 'https://reactnative.dev/img/header_logo.svg'
}

const initialSkillState = {}
skills.forEach(skill => {
    initialSkillState[skill] = false
});

export { initialSkillState, icons, skills, categorizedSkills, categories };
