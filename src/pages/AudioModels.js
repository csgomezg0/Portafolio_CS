// AnotherPage.js
import React from 'react';
import '../css/FileCSS.css';

//import { Link } from 'react-router-dom';
import { textos } from '../textos/textosVar.js'; // Importa la constante desde texto.js

import Footerpage from '../components/footer.js';
import Headerpage from '../components/header.js';
import Contactpage from '../components/contact.js';

import { SkillSection } from '../components/ComponentsReactGlobals.js';

import imagenAu0 from '../img/AudioModels/Au0.png';
import imagenAu1 from '../img/AudioModels/Au1.png';
import imagenAu2 from '../img/AudioModels/Au2.png';




const AnotherPage = () => {
  return (
    <div>

      <Headerpage id="texto2" text={textos.texto2} />

      <div className="container">

        <section id="about">
          <h2 id="texto50">{textos.texto50}</h2>
          <p id="texto51" style={{ textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: textos.texto51 }}></p>
          
        </section>


        <SkillSection
          heading={textos.texto52}
          text={textos.texto53}
          images={[
            { src: imagenAu0, alt: 'Imagen 1', width: '80%' }]}
          dangerouslySetInnerHTML={true}
        />

        <SkillSection
          heading={textos.texto54}
          text={textos.texto55}
          images={[
            { src: imagenAu1, alt: 'Imagen 1', width: '80%' }]}
          dangerouslySetInnerHTML={true}
        />

        <SkillSection
          heading={textos.texto56}
          text={textos.texto57}
          images={[
            { src: imagenAu2, alt: 'Imagen 1', width: '80%' }]}
          dangerouslySetInnerHTML={true}
        />




<SkillSection
          text={textos.texto58}
        />


        <Contactpage />

      </div >

      <Footerpage id="texto26" text={textos.texto26} />

    </div >
  );
};

export default AnotherPage;