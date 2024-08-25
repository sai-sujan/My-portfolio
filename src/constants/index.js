import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  pro1,
  ineuron,
  pro2,
  pro3,
  pro4,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  tf,
  torch,
  meta,
  starbucks,
  grootan,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  flutter,
  tableau,
  python
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Data Scientist",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Flutter Developer",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Pytorch",
    icon: torch,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Tensorflow",
    icon: tf,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "tableau",
    icon: tableau,
  },
];

const experiences = [
  {
    title: "Machine Learning Intern    ",
    company_name: "ineuron.ai",
    icon: ineuron,
    iconBg: "#E6DEDD",
    date: "Nov 2021 – Mar 2022",
    points: [
      "Delivered a credit card default prediction project with end-to-end deployment.      ",
      "Utilized Docker, CircleCI, and Heroku to streamline the deployment process.      ",
      "Built predictive models to analyze and predict credit card defaults.      ",
      "Created a CI/CD pipeline to automate the integration and deployment of the project.      ",
      "Successfully deployed the solution to production, ensuring scalability and reliability.      ",
    ],
  },
  {
    title: "Research and development Intern",
    company_name: "Grootan Technologies",
    icon: grootan,
    iconBg: "#383E56",
    date: "Sep 2022 - Sep 2024",
    points: [
      "Contributed to the desktop application of EZTO using Electron.js and React.js.",
      "Developed and maintained web applications using React.js and other related technologies.",
      "Implemented anomaly detection in company data for Multi-Factor Authentication (MFA).      ",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Helped with dataset creation and maintenance for various projects.",
    
    ],
  },
  {
    title: "Machine Learning Engineer",
    company_name: "Grootan Technologies",
    icon: grootan,
    iconBg: "#E6DEDD",
    date: "Sep 2024 - Dec 2024",
    points: [
      "Applied  Deep learning techniques for the detection of holograms on national ID cards, significantly enhancing document security.",
      "Led projects on anomaly detection, utilizing machine learning algorithms to identify irregularities and potential fraud in data, contributing to a robust fraud detection system.",
      "Developed and implemented deep learning-based face verification and liveness detection systems for KYC (Know Your Customer) processes, ensuring secure and reliable user authentication",
      "Contributed to the development of machine learning models for data analysis and predictive analytics, optimizing decision-making processes within the organization.",
      "Stayed at the forefront of machine learning advancements, exploring and integrating cutting-edge algorithms to enhance the capabilities of our products.",
      "Utilized Generative Adversarial Networks (GANs) to enhance data generation and image synthesis capabilities, contributing to innovative solutions within the research and development projects."
    ],
  },




  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Cooking AI - Gemini LLM",
    description:
      "Cooking AI is a mobile app that simplifies meal planning with personalized recipe suggestions and culinary tips. It tailors recommendations based on user inputs, whether images or text.                          ",
    tags: [
      {
        name: "Tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "Gemini",
        color: "green-text-gradient",
      },
      {
        name: "Flutter",
        color: "pink-text-gradient",
      },
    ],
    image: pro1,
    source_code_link: "https://github.com/sai-sujan/Cooking-AI-mobile-app",
  },
  {
    name: "Lung Cancer Classification with Vision Transformers",
    description:
      "A web app for classifying lung cancer images using Vision Transformers (ViT).      ",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: pro2,
    source_code_link: "https://github.com/sai-sujan/Lung_cancer_classification-using-Vision-Transformer",
  },
  // {
  //   name: "Credit Card Default Prediction    ",
  //   description:
  //     "An end-to-end project for predicting credit card defaults. It integrates CircleCI for CI/CD, Docker for containerization, and is deployed on Heroku.      ",
  //   tags: [
  //     {
  //       name: "sklearn",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Python",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Docker,Circle CI",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: pro3,
  //   source_code_link: "https://github.com/sai-sujan/Credit-card-default-prediction-End-to-End",
  // },
  {
    name: "British Airways Reviews Dashboard    ",
    description:
      "This Tableau dashboard analyzes British Airways reviews, focusing on key aspects like service, entertainment, and comfort, with filters for tailored insights.      ",
    tags: [
      {
        name: "tableau",
        color: "blue-text-gradient",
      },
      // {
      //   name: "Python",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "Docker,Circle CI",
      //   color: "pink-text-gradient",
      // },
    ],
    image: pro4,
    source_code_link: "https://github.com/sai-sujan/Tableau-British-Airways-Reviews",
  },
];

export { services, technologies, experiences, testimonials, projects };
