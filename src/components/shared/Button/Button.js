import "./Button.scss";

const Button = () => {
  return (
    <button className="button" style={{ margin: "20px 0px" }}>
      <span className="button-text">more about me</span>
      <span className="button-icon"></span>
    </button>
  );
};

export default Button;
