import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Navigation.module.css';

const Navigation = props => {
  return (
    <header className={classes.mainHeader}>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>All Posts</NavLink>
          </li>
          <li>
            <NavLink to="/favoritesposts">Favorites Posts</NavLink>
          </li>
          <li>
            <NavLink to="/favoritescomments">Favorites Comments</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
