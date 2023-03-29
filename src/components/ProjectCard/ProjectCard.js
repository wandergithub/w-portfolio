import './ProjectCard.scss';
import { PropTypes } from 'prop-types';

const ProjectCard = (props) => {
  const {
    image, title, description, links, type,
  } = props;

  return (
    <div className="card">
      <div className="image">
        <div className="one">
          <h1>{type}</h1>
        </div>
        <img src={image} alt="" />
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
            {links.map((link) => (
              <li>
                <a href={link.href}>{link.image}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  links: PropTypes.string,
  type: PropTypes.string,
};

ProjectCard.defaultProps = {
  image: '',
  title: '',
  description: '',
  links: '',
  type: 'Others',
};

export default ProjectCard;
