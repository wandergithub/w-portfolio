import { TbApi, TbBrandGithub } from 'react-icons/tb';
import { GoBrowser } from 'react-icons/go';
import { SiRubyonrails } from 'react-icons/si';
import image1 from '../Assets/portfolio-6.webp';
import image3 from '../../assets/img/portfolio/portfolio-1.webp';
import budgetApp from '../../assets/img/portfolio/app_screenshot3.webp';

const projects = [
  {
    title: 'E-commerce',
    type: 'frontend',
    image: image1,
    description:
      'Completely responsive E-commerce web page. build with React/Redux and MaterialUI-styled-components. This allows the user to navigate through different categories of items, filter them by category and add them to the shopping cart.',
    links: [
      {
        image: <TbBrandGithub title="Github icon" size="2em" />,
        href: 'https://github.com/wandergithub/e-commerce',
      },
      {
        image: <GoBrowser title="Live demo icon" size="2em" />,
        href: 'https://wandergithub.github.io/e-commerce/',
      },
    ],
  },
  {
    title: 'Budget App',
    type: 'fullstack',
    image: budgetApp,
    description: 'A mobile/web application where you can manage your budget.',
    links: [
      {
        image: <TbBrandGithub title="Github icon" size="2em" />,
        href: 'https://github.com/wandergithub/budget-app',
      },
      {
        image: <GoBrowser title="Live demo icon" size="2em" />,
        href: 'https://budget-app-vmhn.onrender.com/',
      },
    ],
  },
  {
    title: 'The Future Mobility',
    type: 'fullstack',
    image: image3,
    description:
      'Is a RoR API to manage CRUD operations in an electric cars users website.',
    links: [
      {
        image: <TbBrandGithub title="Github icon" size="2em" />,
        href: 'https://github.com/wandergithub/the_future_mobility_frontend',
      },
      {
        image: <TbApi title="Github icon" size="2em" />,
        href: 'https://github.com/wandergithub/the_future_mobility_backend',
      },
      {
        image: <GoBrowser title="Live demo icon" size="2em" />,
        href: 'https://future-mobility.netlify.app/',
      },
    ],
  },
  {
    title: 'Recipe app',
    type: 'fullstack',
    image: 'https://user-images.githubusercontent.com/65109017/207920564-8c683110-cecf-42d3-935c-e7ea561ccb49.png',
    description:
      'The Recipe App keeps track of all our recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe.',
    links: [
      {
        image: <TbBrandGithub title="Github icon" size="2em" />,
        href: 'https://github.com/wandergithub/Recipe-app',
      },
      {
        image: <SiRubyonrails title="Github icon" size="2em" />,
        href: 'https://recipe-app-7d79.onrender.com/',
      },
    ],
  },
  {
    title: 'Portfolio',
    type: 'frontend',
    image: 'https://github.com/wandergithub/w-portfolio/blob/main/appscreenshots/screen1.jpeg?raw=true',
    description:
      'This is my personal portfolio website made to showcase my work and experience. Made from scratch with different simple design inspirations.',
    links: [
      {
        image: <TbBrandGithub title="Github icon" size="2em" />,
        href: 'https://github.com/wandergithub/w-portfolio',
      },
      {
        image: <GoBrowser title="Live demo icon" size="2em" />,
        href: 'https://wander-portfolio.netlify.app/',
      },
    ],
  },
];

export default projects;
