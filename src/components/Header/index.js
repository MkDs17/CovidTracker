import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Image } from 'semantic-ui-react';

import './header.scss';

const Header = () => {

  return (
    <div id="header">
      <Menu>
        <NavLink to="/">
          <Menu.Item>
            Covid Tracker
          </Menu.Item>
        </NavLink>
      </Menu>
    </div>
  );
};

export default Header;
