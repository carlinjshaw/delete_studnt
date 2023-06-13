import React from 'react';
import '../styles/Static.css';
import Navigation from './Navigation';


function Header({ currentPage, handlePageChange }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-name">PJ Ruggiero</h1>
        <Navigation className="header-navigation" currentPage={currentPage} handlePageChange={handlePageChange}/>        
      </div>
    </header>
  );
}

export default Header;
