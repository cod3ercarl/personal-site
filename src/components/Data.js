import wwdatabase from "../images/wwdatabase.png";
import mentor from "../images/mentor.png";
import spotify from "../images/spotify.png";
import rick from "../images/rick.png";
import rock from "../images/rock.png";
import snake from "../images/snake.png";
import engage from "../images/engage.png";
import engageVid from "../images/EngagaeMate.mp4";

export const experience = [
  {
    title: "Experience",
    text:
      "Before becoming a full time Web Developer I was working in the print industry for 15 years, over 12 years of that time was spent as a Print Production Manager. Technology was constantly changing through the years and it was my job to adapt to the changing needs of the business and industry as a whole while working with a team in a fast paced environment. I had to continuously evolve my working role over the years utilising new information, infrastructure, processes and legislation.  ",
  },
];

export const techStack = [
  {
    title: "Tech Stack",
    text: {
      item1: "Fundamentals of the Web - HTML, CSS, JavaScript",
      item2: "Advanced Javascript - ES6, Classes, Promises",
      item3: "BackEnd - NodeJS, Express, API's, Web Sockets, SQL (Postgres), ",
      item4: "Frameworks - React",
    },
  },
];

export const me = [
  {
    title: "School of Code",
    text:
      "I was given a fantastic opportunity in the summer of 2020 to be apart of the 4th Cohort in the School of Code Bootcamp. This intensive course taught all the necessary skills to become a ready to work Javascript developer.  While also teaching industry best practices.  The course was fully remote and as well as teaching the fundamentals of JavaScript and introducing us to frameworks, such as React on the Front-End and Express on the backend, they taught us the soft skills necessary to become job ready and work within an Agile tech team.  We worked every week in pairs, working with a different person each week, and culminated with a four week project solving a real tech problem and creating an app from start through to minimum viable product and minimum lovable product..",
  },
  {
    title: "Away from Web Development",
    text:
      "The global pandamedi has meant my acivites away from code have become limited. I'm currently training to hopefully take part in Tough Mudder for 2021 so I try to run at least 3 times a week.  I'm an avid wrestling fan (don't judge me please) so can be found watching this from time to time.  I love to read, John Grisham being my favourite author.  Other than that, you'll find me playing Fifa on the Playstation , listening to podcasts on Spotify or binging shows on Netflix or Disney Plus. ",
  },
];

export const final = [
  {
    link: "EngageMate",
    image: engage,
    video: engageVid,
    website: "https://engagemate.netlify.app/",
    technologies:
      "ReactJS, Chakra, Auth0, Socket.io, Heroku/Postgres, Netlify, NodeJS, Express , PushJS, cypress.io, OAuth 2.0 (for Spotify Authentication)",
    text:
      "Built for the School of Code. Our final project was built to solve the problem ‘how to improve remote teaching delivery’.  Working as part of an agile team, we chose to focus on creating an app to sit alongside Zoom or a similar team meeting platform.  Built utilising Web Sockets we wanted to gain live feedback from the participants in a remote learning setting. We achieved this by enhancing existing features such as hand raising and live polls, while creating an engaging feature ‘The Thumbometer’ so that speakers could gain real-time feedback via an interactive thumb.  The app also utilised sounds and used the Spotify API to generate playlists to play music during different School of Code tasks.",
    github: "https://engagemate.netlify.app/",
  },
];

export const work = [
  {
    link: "WWDatabase",
    image: wwdatabase,
    website: "https://wwdatabase.netlify.app",
    technologies: "ReactJS - NodeJS - Heroku Postgres",
    text:
      "A personal project of mine., built with a React front-end, deployed on Postgres database. This app fetches data from a database I created based on a date. It will return whomever was WWE Champion on that day. I plan to expand on this with different titles in the future. Originally built using vanilla JavaScript, I refactored the code once I was taught React.",
    github: "https://github.com/cod3rcarl/wwdatabaseFE",
  },
  {
    link: "Mentor Diary",
    image: mentor,
    website: "https://musing-turing-792e59.netlify.app",
    technologies: "ReactJS - NodeJS - Heroku Postgres - Google Firebase",
    text:
      "Our mid-way project on the School of Code Bootcamp. In teams of 4 we worked to create an app to make our mentoring experience better. We created a diary using a NodeJS server deployed with a Heroku Postgres database. The front-end was created using React with bootstrap used to style the app. The user can signup to access the app , the Firebase with an email/password login.",
    github: "https://github.com/cod3rcarl/wwdatabaseFE",
  },
  {
    link: "SOC Spotify App",
    image: spotify,
    website: "https://soc-fm.netlify.app",
    technologies: "React - JavaScript - OAuth 2.0",
    text:
      "A web app utilising the Spotify API to fetch playlists, based on different music genres that can be set by the user. The API requires a bearer token as well as my api key in order to retrieve the data.",
    github: "https://github.com/cod3rcarl/soc-fm-app",
  },
  {
    link: "Rick-Tac-Toe",
    image: rick,
    website: "https://rick-tac-toe-o2witmuty.vercel.app/",
    technologies: "React - JavaScript - OAuth 2.0",
    text:
      "A game of noughts and crosses with a twist. The challenge on this project was to take code from the offical React documentation written with the older class based system and then refactor that code to use the React hook useState and props.",
    github: "https://github.com/cod3rcarl/rick-tac-toe",
  },
  {
    link: "Rock, Paper Scissors",
    image: rock,
    website: "https://rock-paper-scissors-black-zeta.vercel.app/",
    technologies: "JavaScript",
    text:
      "For one of the first projects I worked on at the School of Code I created a Rock, Paper, Scissors game using vanilla JavaScript. This was a great way to learn about functions and conditionals.",
    github: "https://github.com/cod3rcarl/rockPaperScissors",
  },
  {
    link: "Snake",
    image: snake,
    website: "https://snake-by-carl.netlify.app/",
    technologies: "JavaScript",
    text:
      "A classic game created using the Canvas tag in html.  This was an early personal project built to understand canvas, event key codes and basic animation in a JavaScript environment.",
    github: "https://snake-by-carl.netlify.app/",
  },
];
