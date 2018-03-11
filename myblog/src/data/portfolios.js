//import {portfolio1} from './articles/portfolio/portfolio1';
//import * as portfolio from './articles/portfolio'
//Maybe I have to use nodejs...  
// const portfolios = [
//   portfolio
// ];

export default [
  {
    number:1,
    date: "11/03/2018",
    title:"CV page based on Vue.js2",
    body: { 
            img: "/src/assets/portfolio/CV.jpg",
            link: "https://cvhaeseong.firebaseapp.com/",
            skills: [
                "Vue.js2: VUEX, VUE-ROUTER",
                "Bootstrap4",
                "Webpack",
                "Firebase",
                "ES6",
                "SCSS",
                "GIT",
                "ChromeDevTools",
                "VSCode",
                "babel.js"
            ],
            processes: [
                "Made a single page with Bootstrap4",
                "Divided it to templates and data files",
                "Merged similar parts of templates to shared functional template",
                "Added VUEX store functionality to deal with data",
                "Added routing with vue-router package",
                "Add icons from a vendor",
                "Add SCSS",
                "Adjust responsiveness",
                "Deploy it with firebase hosting"


            ]
    }
  },
  {
    number:2,
    date: "11/03/2018",
    title:"BLOG based on Vue.js2",
    body: { 
            img: "/src/assets/portfolio/BLOG.jpg",
            link: "/",
            skills: [
                "Vue.js2: VUEX, VUE-ROUTER",
                "Bootstrap4",
                "Webpack",
                "Firebase",
                "ES6",
                "SCSS",
                "GIT",
                "ChromeDevTools",
                "VSCode",
                "babel.js"
            ],
            processes: [
                "NOTE: Bigger project than CV page",
                "Made templates and dummy datas for abstractions",
                "Set Stroring and Routing",
                "Added some functions by event listening",
                "Added Animation: Vue transition, Bootstrap, SCSS",
                "Achieved resonsiveness",
                "Deploy it with firebase hosting"
            ]
    }
  }
]