import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';

export function Menu () {
  return (
    <li>  
        <li><Link to="/home" ><FormattedMessage id="menuAbout" /></Link></li>
        <li><Link to="/contact" ><FormattedMessage id="menuContact" /></Link></li>
        <li><Link to="/" ><FormattedMessage id="menuPosts" /></Link></li>
    </li>
  )
};

Menu.propTypes = {
    intl: PropTypes.object.isRequired,
  };

export default Menu;