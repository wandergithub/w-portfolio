import "./ProjectCard.scss";

const ProjectCard = (props) => {
  const { image, title, description, links } = props;

  return (
    <div class="card">
      <div class="image">
        <img src={image} />
      </div>
      <div class="details">
        <div class="center">
          <h1>
            {title}
            <br />
            {/* <span>team leader</span> */}
          </h1>
          <p>{description}</p>
          <ul>
            {links.map((link) => {
              return (
                <li>
                  <a href={link.href}>
                    {link.image}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
