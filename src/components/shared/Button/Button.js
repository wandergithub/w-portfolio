import './Button.scss';
import { PropTypes } from 'prop-types';

const Button = (props) => {
  const {
    name, iconComponent, type, action,
  } = props;
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type || 'button'} className="button" style={{ margin: '20px 0px' }} onClick={action}>
      <span className="button-text">{name}</span>
      <span className="button-icon">{iconComponent}</span>
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  iconComponent: PropTypes.element,
  type: PropTypes.string,
  action: PropTypes.func,
};

Button.defaultProps = {
  name: '',
  iconComponent: () => (''),
  type: 'button',
  action: () => (''),
};

export default Button;
