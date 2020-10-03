import mysqlworkbench from "../images/icons/mysqlworkbench.svg"
const devEnvironmentArr = [
    {
               title:"vim",
               image:"https://upload.wikimedia.org/wikipedia/commons/9/9f/Vimlogo.svg",
               url:"https://www.vim.org/"
    },
    { 
               title:"vscode",
               image:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
               url:"https://code.visualstudio.com/"
    }, 
    { 
               title:"eclipse",
               image:"https://cdn.worldvectorlogo.com/logos/eclipse-11.svg",
               url:"https://www.eclipse.org/"
    }, 
    { 
               title:"pycharm",
               image:"https://upload.wikimedia.org/wikipedia/commons/a/a1/PyCharm_Logo.svg",
               url:"https://www.jetbrains.com/pycharm/"
    }, 
    { 
               title:"jupyter notebooks",
               image:"https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg",
               url:"https://jupyter.org/"
    }, 
    { 
               title:"intellij",
               image:"https://upload.wikimedia.org/wikipedia/commons/d/d5/IntelliJ_IDEA_Logo.svg",
               url:"https://www.jetbrains.com/idea/"
    }, 
    {
               title:"webstorm",
               image:"https://cdn.freebiesupply.com/logos/large/2x/webstorm-icon-logo-svg-vector.svg",
               url:"https://www.jetbrains.com/webstorm/"
    }, 
    { 
               title:"sublime",
               image:"https://cdn.worldvectorlogo.com/logos/sublime-text.svg",
               url:"https://www.sublimetext.com/" 
    }, 
    { 
               title:"mysql workbench",
               image:mysqlworkbench,
               url:"https://www.mysql.com/products/workbench/"
    }, 
    { 
               title:"atom",
               image:"https://github.com/haideralipunjabi/atom-icons/raw/master/svg/poptheme_night-owl.svg",
               url:"https://atom.io/"
    },
    { 
               title:"brackets",
               image:"https://upload.wikimedia.org/wikipedia/commons/4/4c/Brackets_Icon.svg",
               url:"http://brackets.io/"
    }
];

const devEnvInitialState = {}

devEnvironmentArr.map(({title}) => {
    devEnvInitialState[title] = false
})

export {devEnvInitialState,devEnvironmentArr}