import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



export default function Navbar(props) {
  return (
<nav className={`navbar navbar-expand-lg bg-${(props.mode === 'light' ? 'light' : 'body-tertiary')}`}  data-bs-theme={props.mode}>

  <div className="container-fluid">
    <Link className={`navbar-brand text-${(props.mode === 'light' ? 'dark' : 'light')}`} to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link active text-${(props.mode === 'light' ? 'dark' : 'light')}`} aria-current="page" to="/">{props.homeText}</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link active text-${(props.mode === 'light' ? 'dark' : 'light')}`} aria-current="page" to="/darkmode">{props.darkModeExampleText}</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link light text-${(props.mode === 'light' ? 'dark' : 'light')}`} to="/">{props.linkText}</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className={`nav-link dropdown-toggle text-${(props.mode === 'light' ? 'dark' : 'light')}`} to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Another action</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className={`nav-link text-${(props.mode === 'light' ? 'dark' : 'light')}`} to="/" aria-disabled="true">{props.kv}</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className={`form-control me-2 border-${(props.mode === 'light' ? 'dark' : 'light')}`} type="search" placeholder="Search" aria-label="Search" />
        <button className={`btn btn-outline-${(props.mode === 'light' ? 'dark' : 'light')} text-${(props.mode === 'light' ? 'dark' : 'light')}`}   type="submit">{props.searchText}</button>
      </form>
      <div className="form-check form-switch checkbox-lg">
  <input className="form-check-input mx-1" style={{scale: '1.3'}} onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className={`form-check-label mx-2 text-${(props.mode === 'light' ? 'dark' : 'light')}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
    </div>
  </div>
</nav>
  )
};
Navbar.propTypes = {
     title: PropTypes.string.isRequired,
     homeText: PropTypes.string,
     search: PropTypes.string
} ;
Navbar.defaultProps = {
    title: 'Kv',
    homeText: 'Home',
    darkModeExampleText: 'Dark Mode Demo',
    searchText: "Search",
    kv: "disabled   ",
}