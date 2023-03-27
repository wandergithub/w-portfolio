import { GoBrowser } from "react-icons/go";
import image1 from "../../assets/img/blog-post-1.webp";
import image2 from "../../assets/img/blog-post-2.png";

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
    title: "Recursion",
    type: "Article",
    image: image2,
    description:
      "Recursion is a fundamental concept in computer science that can be intimidating for beginners. However, with a solid understanding of the basics and the right resources, it can become a powerful tool for solving complex problems.",
    links: [
      {
        image: <GoBrowser title="Live demo icon" size={"2em"} />,
        href: "https://medium.com/@wandergonzalez0/recursion-a-journey-from-basics-to-mastery-d5d4498d4f89",
      },
    ],
  },
];

export default projects;
