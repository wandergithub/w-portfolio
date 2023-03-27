import { TbBrandGithub } from "react-icons/tb";
import { GoBrowser } from "react-icons/go";
import image1 from "../../assets/img/blog-post-1.webp";

const projects = [
  {
    title: "Growth Mindset",
    type: "Article",
    image: image1,
    description:
      "As a developer, having a growth mindset is crucial. It means embracing challenges, viewing obstacles as opportunities to learn and improve, and always striving to better ourselves.",
    links: [
      {
        image: <GoBrowser title="Live demo icon" size={"2em"} />,
        href: "https://medium.com/@wandergonzalez0/growth-mindset-4c74fe20bbd0",
      },
    ],
  },
  {
    title: "E-commerce",
    image: image1,
    description:
      "Completely responsive E-commerce web page. build with React/Redux and MaterialUI-styled-components. This allows the user to navigate through different categories of items, filter them by category and add them to the shopping cart.",
    links: [
      {
        image: <TbBrandGithub title="Github icon" size={"2em"} />,
        href: "https://github.com/wandergithub/e-commerce",
      },
      {
        image: <GoBrowser title="Live demo icon" size={"2em"} />,
        href: "https://wandergithub.github.io/e-commerce/",
      },
    ],
  },
  {
    title: "E-commerce",
    image: image1,
    description:
      "Completely responsive E-commerce web page. build with React/Redux and MaterialUI-styled-components. This allows the user to navigate through different categories of items, filter them by category and add them to the shopping cart.",
    links: [
      {
        image: <TbBrandGithub title="Github icon" size={"2em"} />,
        href: "https://github.com/wandergithub/e-commerce",
      },
      {
        image: <GoBrowser title="Live demo icon" size={"2em"} />,
        href: "https://wandergithub.github.io/e-commerce/",
      },
    ],
  },
];


export default projects;