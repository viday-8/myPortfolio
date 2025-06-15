import { jobby, kitchen, KYC } from "../assets";

export const navLinksdata = [
  {
    _id: 1001,
    title: "Home",
    link: "home",
  },
  {
    _id: 1002,
    title: "Features",
    link: "features",
  },
  {
    _id: 1003,
    title: "Projects",
    link: "projects",
  },
  {
    _id: 1004,
    title: "Resume",
    link: "resume",
  },
  {
    _id: 1006,
    title: "Contact",
    link: "contact",
  },
];

export const skillsData = [
    {
      skillTitle : "ReactJS",
      skillRating : 80
    },
    {
      skillTitle : "HTML",
      skillRating : 100
    },
    {
      skillTitle : "Styling",
      skillRating : 100
    },
    {
      skillTitle : "Javascript",
      skillRating : 80
    },
    {
      skillTitle : "Typescript",
      skillRating : 80
    },
  ]

  export  const projectsData = [
    {
      projectTitle : "Job Finder",
      img : jobby,
      gitLink : "https://github.com/viday-8/jobby_App/tree/master",
      hostLink : "https://vidayjobbyapp.netlify.app/",
      description : "JobFinder is a responsive job search app built with React.js that helps users find and filter jobs based on title, location, and type. It features search, filtering, bookmarking, and real-time job listings via public APIs."
    },
     {
      projectTitle : "KYC (Know Your Colleague)",
      img : KYC,
      gitLink : "https://github.com/viday-8/KYC/tree/master",
      hostLink : "https://vidaytenalikyc.netlify.app/",
      description : "A static HTML and CSS template for employees to introduce themselves to the team with details like name, role, hobbies, and fun facts. Designed for desktop use during Know Your Colleague sessions."
    },
     {
      projectTitle : "Tasty kitchen",
      img : kitchen,
      gitLink : "https://github.com/viday-8/KYC/tree/master",
      hostLink : "https://vidaytenalikyc.netlify.app/",
      description : "TastyKitchen is a Swiggy-like food ordering web app where users can browse restaurants, view menus, and place orders with a simple and intuitive interface."
    }
  ]
