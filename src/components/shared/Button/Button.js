import "./Button.scss";

const Button = (props) => {
    const { name, iconComponent } = props;
  return (
    <button className="button" style={{ margin: "20px 0px" }}>
      <span className="button-text">{name}</span>
      <span className="button-icon">{iconComponent}</span>
    </button>
  );
};

export default Button;
