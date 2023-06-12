import React from 'react';
// Here we import the Header.css file to grant access to some additional classNames
import '../styles/Header.css';
import Navigation from './Navigation';


function Header({ currentPage, handlePageChange }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-name">PJ Ruggiero</h1>
        <Navigation className="header-navigation" />
      </div>
    </header>
  );
}

export default Header;
