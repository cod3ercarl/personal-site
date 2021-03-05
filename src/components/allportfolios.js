import engage from "../img/portImages/engage.png";
import engageMate from "../img/portImages/EngageMate.mp4";
import recipeRoom from "../img/portImages/the-recipe-room.mp4";
import recipe from "../img/portImages/my-recipes.png";
import wwdatabase from "../img/portImages/wwdatabase.mp4";
import wwd from "../img/portImages/wwdatabase.png";
import bootcamperio from "../img/portImages/bootcamper.mp4";
import bootcamper from "../img/portImages/bootcamper.png";
import rickTacToe from "../img/portImages/rick-tac-toe.mp4";
import rick from "../img/portImages/rick.png";
import socFM from "../img/portImages/soc-fm.mp4";
import socNews from "../img/portImages/socNews.png";
import spotify from "../img/portImages/spotify.png";
import mentor from "../img/portImages/mentor.png";
import rock from "../img/portImages/rock.png";
import weather from "../img/portImages/weather.png";
import bad from "../img/portImages/bad.png";
import snake from "../img/portImages/snake.png";

import { SiPostman, SiMongodb, SiCss3, SiWwe, SiFirebase, SiGithub, SiHeroku, SiHtml5, SiJavascript, SiJest, SiNetlify, SiNodeDotJs, SiPostgresql, SiReact, SiSocketDotIo, SiSpotify, SiAuth0 } from "react-icons/si";

import { MdNotifications } from "react-icons/md";
import { BsLightningFill } from "react-icons/bs";
import { IoLogoVercel } from "react-icons/io5";

const portfolios = [
  {
    id: 1,
    category: "Full-stack",
    category2: "School of Code",
    link1: "https://engagemate.netlify.app/",
    link2: "https://github.com/cod3rcarl/engageMate",
    icon1: "Website",
    icon2: "Github",
    image: engage,
    video: engageMate,
    title: "EngageMate",
    details: {
      responsiveness: "Mobile First",
      text:
        "Built for the School of Code. Our final project was built to solve the problem ‘how to improve remote teaching delivery’.  Working as part of an agile team, we chose to focus on creating an app to sit alongside Zoom or a similar team meeting platform.  Built utilising Web Sockets we wanted to gain live feedback from the participants in a remote learning setting. We achieved this by enhancing existing features such as hand raising and live polls, while creating an engaging feature ‘The Thumbometer’ so that speakers could gain real-time feedback via an interactive thumb.  The app also utilised sounds and used the Spotify API to generate playlists to play music during different School of Code tasks. We performed integration tests using Jest and end to end test using cypress.io.",
    },

    technologies: [SiCss3, SiHtml5, SiJavascript, SiReact, BsLightningFill, SiAuth0, SiSocketDotIo, SiHeroku, SiPostgresql, SiNetlify, SiNodeDotJs, MdNotifications, SiJest, SiSpotify, SiGithub],
  },
  {
    id: 2,
    category: "Full-stack",
    category2: "Personal",
    link1: "https://the-recipe-room.netlify.app/",
    link2: "https://github.com/cod3rcarl/meal-planner",
    icon1: "Website",
    icon2: "Github",
    image: recipe,
    video: recipeRoom,
    title: "Meal Planner",
    details: {
      responsiveness: "Mobile First",
      text:
        "I love to cook, but i always find myself cooking the same meals over and over again, so I thought I would use my coding skills to come up with a web app that would solve this problem.  I fetch data from two different APIs, the Spoonacular and Edamam APIs.  I made it so that you can pick the amount of calories you want to consume in a day and the API will fetch three recipes totalling that amount.  I also allow the user to search for a particular ingredient and it will bring back recipes using that ingredient.  Because the recipes all link to outside sources.  I created my own API to allow users to setup their own account so that they could save any recipes they liked.  Once in their own account they could store as many recipes as they wanted with a search feature within their profile so they could search through their own recipes. All routes through my own API use middleware to protect all the routes so that there can be no unauthorised access.",
    },
    technologies: [SiReact, SiCss3, SiHtml5, SiJavascript, SiPostman, SiHeroku, SiMongodb, SiNetlify, SiNodeDotJs],
  },
  {
    id: 3,
    category: "Full-stack",
    category2: "Personal",
    link1: "https://wwdatabase.netlify.app/",
    link2: "https://github.com/cod3rcarl/wwdatabaseFE",
    icon1: "Website",
    icon2: "Github",
    image: wwd,
    video: wwdatabase,
    title: "WWDatabase",
    details: {
      responsiveness: "Mobile First",
      text:
        "A personal project of mine, built with a React front-end, and deployed on Netlify for the front end and Heroku for the backend with an Node/Express server and Postgres database. This app fetches data from a database I created based on a date. It will return whomever was WWE Champion on that day. I plan to expand on this with different titles in the future. Originally built using vanilla JavaScript, I refactored the code once I was taught React.",
    },

    technologies: [SiReact, SiCss3, SiHtml5, SiJavascript, SiHeroku, SiPostgresql, SiNetlify, SiNodeDotJs, SiWwe],
  },
  {
    id: 4,
    category: "Back-end",
    category2: "Personal",
    link1: "https://bootcamper-io.herokuapp.com/",
    link2: "https://github.com/cod3rcarl/bootcamper.io",
    icon1: "Website",
    icon2: "Github",
    image: bootcamper,
    video: bootcamperio,
    title: "Bootcamp Database",
    details: {
      text:
        "This is a backend app built to help broaden my knowledge on RESTful APIs.  I used Postman extensively to create endpoints and apply CRUD functionality.  The app utlises pagination, sorting and filtering for different bootcamps and allows querying different courses and jobs within those bootcamps.  The app uses MongoDB to store user data,  which is used to set roles to differentiate between admins, publishers and users.  There is also login and logout functonality. The landing page was made using a package called DocGen, which took the documentation i made in the Postman app and converted the json data into html.",

      responsiveness: "Made for desktop, but responsive to allow mobile and tablet use.",
    },
    technologies: [SiPostman, SiMongodb, SiCss3, SiHtml5, SiJavascript, SiHeroku, SiNodeDotJs],
  },
  {
    id: 5,
    category: "Full-stack",
    category2: "School of Code",
    link1: "https://mentor-diary.netlify.app/",
    link2: "https://github.com/cod3rcarl/mentor-diary",
    icon1: "Website",
    icon2: "Github",
    image: mentor,
    video: null,
    title: "Mentor Diary",
    details: {
      text:
        "Our mid-way project on the School of Code Bootcamp. In teams of 4 we worked to create an app to make our mentoring experience better. We created a diary using a Node/Express server and Postgres database. The front-end was created using React with bootstrap used to style the app. The user can signup to access the app using Google Firebase with an email/password login.",

      responsiveness: "Desktop",
    },

    technologies: [SiReact, SiCss3, SiHtml5, SiJavascript, SiHeroku, SiPostgresql, SiNetlify, SiNodeDotJs, SiFirebase, SiGithub],
  },
  {
    id: 6,
    category: "Front-end",
    category2: "School of Code",
    link1: "https://rick-tac-toe.vercel.app/",
    link2: "https://github.com/cod3rcarl/rick-tac-toe",
    icon1: "Website",
    icon2: "Github",
    image: rick,
    video: rickTacToe,
    title: "Rick-Tac-Toe",
    details: {
      text:
        "A game of noughts and crosses with a twist. The challenge on this project was to take code from the offical React documentation written with the older class based system and then refactor that code to use the React hook useState and props.  The app utilises 'time travel' functionality so the player can revert back to a previous move.  The next strp for this project is to utilise web sockets so that the game becomes a tru two player experience.",

      responsiveness: "Desktop",
    },

    technologies: [IoLogoVercel, SiReact, SiCss3, SiHtml5, SiJavascript],
  },
  {
    id: 7,
    category: "Front-end",
    category2: "School of Code",
    link1: "https://soc-fm.netlify.app/",
    link2: "https://github.com/cod3rcarl/soc-fm-app",
    icon1: "Website",
    icon2: "Github",
    image: spotify,
    video: socFM,
    title: "SOC FM",
    details: {
      text: "A web app utilising the Spotify API to fetch playlists, based on different music genres that can be set by the user. The API requires a bearer token as well as my api key in order to retrieve the data.",

      responsiveness: "Desktop",
    },
    technologies: [SiReact, SiCss3, SiHtml5, SiJavascript, SiSpotify, SiNetlify],
  },
  {
    id: 8,
    category: "Front-end",
    category2: "School of Code",
    link1: "https://github.com/cod3rcarl/soc-news",
    link2: "https://github.com/cod3rcarl/soc-news",
    icon1: "Website",
    icon2: "Github",
    image: socNews,
    video: null,
    title: "SOC News",
    details: {
      text: "A web app utilising the Guardian API to fetch news articles, the user can search for any topic and the results will show. The API requires an api key in order to retrieve the data.",

      responsiveness: "Mobile First",
    },
    technologies: [SiReact, SiCss3, SiHtml5, SiJavascript],
  },
  {
    id: 9,
    category: "Front-end",
    category2: "School of Code",
    link1: "https://rock-paper-scissors-8loxzw4gt.vercel.app/",
    link2: "https://github.com/cod3rcarl/rockPaperScissors",
    icon1: "Website",
    icon2: "Github",
    image: rock,
    video: null,
    title: "Rock, Paper, Scissors",
    details: {
      text: "For the first project I worked on at the School of Code I created a Rock, Paper, Scissors game using vanilla JavaScript. This was a great way to learn about functions and conditionals.",

      responsiveness: "Desktop",
    },
    technologies: [IoLogoVercel, SiCss3, SiHtml5, SiJavascript],
  },

  {
    id: 10,
    category: "Front-end",
    category2: "Personal",
    link1: "https://the-weather-room.netlify.app/",
    link2: "https://github.com/cod3rcarl/PWA-weather-app",
    icon1: "Website",
    icon2: "Github",
    image: weather,
    video: null,
    title: "Weather PWA",
    details: {
      text: "A progressive web app that fetches data from the Open Weather api depending on user search parameters.  This app utilizes a service worker to allow for offline connectivity",

      responsiveness: "Desktop",
    },
    technologies: [SiReact, SiCss3, SiHtml5, SiJavascript, SiNetlify],
  },
  {
    id: 11,
    category: "Front-end",
    category2: "Personal",
    link1: " https://break-bad.netlify.app/",
    link2: "https://github.com/cod3rcarl/breaking-bad",
    icon1: "Website",
    icon2: "Github",
    image: bad,
    video: null,
    title: "Breaking Bad Character App",
    details: {
      text: "A web app that fetches data from the Breaking Bad Api.  The app has a search function to filter data to specific charaters and is styled using flip animations.",

      responsiveness: "Mobile First",
    },
    technologies: [SiReact, SiCss3, SiHtml5, SiJavascript, SiNetlify],
  },
  {
    id: 12,
    category: "Front-end",
    category2: "Personal",
    link1: "https://snake-by-carl.netlify.app/",
    link2: "https://github.com/cod3rcarl/snake",
    icon1: "Website",
    icon2: "Github",
    image: snake,
    video: null,
    title: "Classic Snake",
    details: {
      text: "A classic game created using the Canvas tag in html.  This was an early personal project built to understand canvas, event key codes and basic animation in a JavaScript environment.",

      responsiveness: "Desktop",
    },
    technologies: [SiCss3, SiHtml5, SiJavascript],
  },
];

export default portfolios;
