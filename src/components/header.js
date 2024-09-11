import React from 'react';
import '../css/FileCSS.css';
import logo from '../img/index.png'; 


const Headerpage = ({ id = "texto26", text }) => {
  return (
      <header className="header-container">
          <h1 id={id} className="header-title">{text}</h1>

          <a href="/" className="header-link">
              <img src={logo} alt="Logo" className="header-logo" />
          </a>

      </header>
  );
};



export default Headerpage;