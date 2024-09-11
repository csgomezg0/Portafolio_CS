import React from 'react';
import '../css/FileCSS.css';

const Footerpage= ({id="texto26",text}) => {
    return (
      <div>
      <footer>
      <p id={id}>&copy; {text}</p>
    </footer>
    </div>
    );
};

export default Footerpage;