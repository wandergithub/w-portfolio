import React from 'react';
import './Sidebar.scss';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import navbarItems from '../shared/NavbarItems';

const Sidebar = ({ isopen, toggle }) => {
  const opacityClasses = ['sidebar-container'];
  if (isopen) {
    opacityClasses.push('opacity-on');
  } else {
    opacityClasses.push('opacity-off');
  }

  return (
    <button
      type="button"
      className={opacityClasses.join(' ')}
      onClick={toggle}
    >
      <div className="icon">
        <FaTimes className="close-icon" onClick={toggle} />
      </div>
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          {navbarItems.map((item) => (
            <Link to={item.link} key={Math.random()} className="sidebar-links">
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </button>
  );
};

Sidebar.propTypes = {
  toggle: PropTypes.func,
  isopen: PropTypes.bool,
};

Sidebar.defaultProps = {
  toggle: false,
  isopen: false,
};

export default Sidebar;
