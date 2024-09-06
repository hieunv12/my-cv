import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <img src="avatar.jpg" alt="Avatar" />
      <h1>Đặng Kim Thi</h1>
      <p>1A Yet Kieu - Hà Nội (317) 585-8468 - thidk@email.com</p>
      <nav>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Experience</a></li>
          
        </ul>
      </nav>
    </header>
  );
}

export default Header;