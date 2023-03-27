import "./ProjectCard.scss";

const ProjectCard = (props) => {
  const { image, title, description, links, type } = props;

  return (
    <div className="card">
      <div className="image">
        <div class="one">
          <h1>{type}</h1>
        </div>
        <img src={image} />
      </div>
      <div className="details">
        <div className="center">
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
                  <a href={link.href}>{link.image}</a>
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
