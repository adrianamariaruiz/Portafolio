import { angularAppLanguajes, aviationLanguajes, ecommerceLanguajes, FleetManagementLanguages, javaLanguages, jsCssReactBts, jsCssReactGql, jsCssTailwindReact, jsReactCss, jsvanillaCss, jsVanillaCssFirebase, paymentAppLanguages } from "./languages";
import paymentsApp from "../imagen/paymentsApp.png";
import infoapp from "../imagen/infoapp.png";
import appRickMorty from "../imagen/appRickMorty.png";
import triqui from "../imagen/triqui.jpg";

import apiPaises from "../imagen/apiPaises.jpg";
import dataLover from "../imagen/dataLover.jpg";
import socialNetwork from "../imagen/socialNetwork.jpg";
import burgerQueen from "../imagen/burgerQueen.jpg";
import movieApp from "../imagen/movieApp.jpg";
import todoApp from "../imagen/todoApp.jpg";
import ecommerce from "../imagen/ecommerce.png";
import housesApp from "../imagen/housesApp.png";
// import dragonballApp from "../imagen/dragonballApp2.png";
// import pokemonApp from "../imagen/pokemonApp.png";
import templatesServices from "../imagen/templatesServices.png";
import aviation from "../imagen/aviationStack.png";

export const projects = [
  // TODO: Agregar Tetris, survey app
  {
    id: 22,
    title: "Aviation App",
    notas: "En Construcción",
    url: "",
    cardImage: aviation,
    urlRepo: "https://github.com/adrianamariaruiz/aviation-app",
    altImage: "En Construcción",
    languages: aviationLanguajes
  },
  {
    id: 21,
    title: "Backend Templates services",
    url: "",
    cardImage: "",
    urlRepo: "https://github.com/adrianamariaruiz/back-templates-services",
    altImage: "Backend templates services",
    languages: javaLanguages
  },
  {
    id: 20,
    title: "Fleet Management API",
    url: "",
    cardImage: "",
    urlRepo: "https://github.com/adrianamariaruiz/fleet-management-api",
    altImage: "Fleet Management API",
    languages: FleetManagementLanguages
  },
  // {
  //   id: 19,
  //   title: "Dragonball App",
  //   url: "",
  //   cardImage: dragonballApp,
  //   urlRepo: "https://github.com/adrianamariaruiz/dragonball-vue-app",
  //   altImage: "dragonball-app",
  //   languages: vueAppLanguajes
  // },
  // {
  //   id: 18,
  //   title: "Poke App",
  //   url: "",
  //   cardImage: pokemonApp,
  //   urlRepo: "https://github.com/adrianamariaruiz/vue-pokeApi",
  //   altImage: "pokemon-app",
  //   languages: vueAppLanguajes
  // },
  {
    id: 17,
    title: "Templates services",
    url: "",
    cardImage: templatesServices,
    urlRepo: "https://github.com/adrianamariaruiz/front-template-services",
    altImage: "templates services",
    languages: angularAppLanguajes
  },
  {
    id: 16,
    title: "Houses app",
    url: "https://github.com/adrianamariaruiz/angular-houses-app",
    cardImage: housesApp,
    urlRepo: "https://angular-houses-app.netlify.app/",
    altImage: "houses-app",
    languages: angularAppLanguajes
  },
  {
    id: 15,
    title: "E-commerce",
    url: "https://next-e-commerce-prisma.vercel.app/",
    cardImage: ecommerce,
    urlRepo: "https://github.com/adrianamariaruiz/next-e-commerce",
    altImage: "e-commerce",
    languages: ecommerceLanguajes
  },
  {
    id: 14,
    title: "Payments App",
    url: "https://pagos-app.vercel.app/",
    cardImage: paymentsApp,
    urlRepo: "https://github.com/adrianamariaruiz/pagosApp",
    altImage: "payments-app",
    languages: paymentAppLanguages
  },
  {
    id: 13,
    title: "Info App",
    url: "https://infoapp-table.netlify.app/",
    cardImage: infoapp,
    urlRepo: "https://github.com/adrianamariaruiz/infoapp",
    altImage: "info-app",
    languages: jsCssReactBts
  },
  {
    id: 12,
    title: "App Rick and Morty",
    url: "https://app-rick-and-morty-graphql.netlify.app/",
    cardImage: appRickMorty,
    urlRepo: "https://github.com/adrianamariaruiz/app-rick-and-morty-graphql",
    altImage: "app-rick-morty",
    languages: jsCssReactGql
  },
  {
    id: 11,
    title: "Juego-triqui",
    url: "https://juega-triqui.netlify.app/",
    cardImage: triqui,
    urlRepo: "https://github.com/adrianamariaruiz/juego-triqui",
    altImage: "Juego-triqui",
    languages: jsReactCss
  },
  {
    id: 10,
    title: "Todo app",
    url: "https://todo-app-react-tailwind.netlify.app/",
    cardImage: todoApp,
    urlRepo: "https://github.com/adrianamariaruiz/Todo-app",
    altImage: "Todo-app",
    languages: jsCssTailwindReact
  },
  // {
  //   id: 9,
  //   title: "Lab notes",
  //   url: "https://lab-notes-156fc.web.app/login",
  //   cardImage: labNotes,
  //   urlRepo: "https://github.com/adrianamariaruiz/lab-notes",
  //   altImage: "Lab-notes",
  //   languages: jsCssTailwindReactFirebase
  // },
  {
    id: 8,
    title: "Movie app",
    url: "https://flourishing-truffle-4a186a.netlify.app/",
    cardImage: movieApp,
    urlRepo: "https://github.com/adrianamariaruiz/movie-api",
    altImage: "Movie-api",
    languages: jsReactCss
  },
  {
    id: 7,
    title: "Burger queen",
    url: "https://burger-queen-zeta.vercel.app/",
    cardImage: burgerQueen,
    urlRepo: "https://github.com/adrianamariaruiz/BOG005-burger-queen-api-client",
    altImage: "Burger-queen",
    languages: jsReactCss
  },
  {
    id: 6,
    title: "Data lover",
    url: "https://adrianamariaruiz.github.io/BOG005-data-lovers/src/",
    cardImage: dataLover,
    urlRepo: "https://github.com/adrianamariaruiz/BOG005-data-lovers",
    altImage: "data-lover",
    languages: jsvanillaCss
  },
  {
    id: 5,
    title: "Social network",
    url: "https://socialnetwork-13.firebaseapp.com/",
    cardImage: socialNetwork,
    urlRepo: "https://github.com/adrianamariaruiz/BOG005-social-network",
    altImage: "socialNetwork",
    languages: jsVanillaCssFirebase
  },
  {
    id: 3,
    title: "App API paises",
    url: "https://adrianamariaruiz.github.io/App_API_paises/",
    cardImage: apiPaises,
    urlRepo: "https://adrianamariaruiz.github.io/App_API_paises/",
    altImage: "apiPaises",
    languages: jsReactCss
  }
];
