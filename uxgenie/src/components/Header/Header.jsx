import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="icon-container">
        <div className="icon" title="Home">
          <i className="fas fa-home"></i>
        </div>
        <div className="icon" title="Contacts">
          <i className="fas fa-address-book"></i>
        </div>
        <div className="icon" title="People">
          <i className="fas fa-users"></i>
        </div>
        <div className="icon" title="Services">
          <i className="fas fa-cogs"></i>
        </div>
        <div className="icon" title="Blog">
          <i className="fas fa-blog"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
