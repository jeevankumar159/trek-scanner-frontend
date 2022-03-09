import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';
const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Trek Scanner</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About Us</Link>
          <Link to='/organisers'>Organisers</Link>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
