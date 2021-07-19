import React , {useState} from "react";
import { NavLink } from "react-router-dom";

import classes from "./Navigation.module.css";

const Navigation = (props) => {

  const [humbState, setHumbState] = useState(false)
  
  const humbMove = () => {
    setHumbState(state => !state)
  }

  const humbGone = () => {
    setHumbState(false);
  }


  return (
    <header className={classes.mainHeader}>
     <div className={`${classes.humb} ${humbState ? classes.humbOn : classes.humbOff}`} onClick={humbMove}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      <nav className={`${humbState ? classes.Open : classes.Close}`}>
       
        <ul>
          <li>
            <NavLink to="/" exact onClick={humbGone}>
              All Posts
            </NavLink>
          </li>
          <li>
            <NavLink to="/favoritesposts" onClick={humbGone}>Favorites Posts</NavLink>
          </li>
          <li>
            <NavLink to="/favoritescomments" onClick={humbGone}>Favorites Comments</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
