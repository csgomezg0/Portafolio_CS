import React from 'react';
import '../css/FileCSS.css';
import { textos } from '../textos/textosVar.js'; // Importa la constante desde texto.js
console.log("sdjosdnfjksdnsdfjksdfnsdfjknsdfjkn")

console.log(textos.texto25)

const contactPage= () => {
    return (
      <section id="contact">
        <h2 id="texto20">{textos.texto20}</h2>
        <p>
          <span id="texto24">{textos.texto24}</span>
          <a id="texto21" href="https://github.com/csgomezg0">{textos.texto21}</a>
          <span id="texto25">{textos.texto25}</span>
          <a id="texto22" href="https://github.com/csgomezg0">{textos.texto22}</a>.
        </p>
      </section>

    );
};

export default contactPage;