import './Button.scss';

const Button = (props) => {
  const {
    name, iconComponent, type, action,
  } = props;
  return (
    <button type={type} className="button" style={{ margin: '20px 0px' }} onClick={action}>
      <span className="button-text">{name}</span>
      <span className="button-icon">{iconComponent}</span>
    </button>
  );
};

export default Button;
