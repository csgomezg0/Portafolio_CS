// AnotherPage.js
import React from 'react';
import '../css/FileCSS.css';

//import { Link } from 'react-router-dom';
import { textos } from '../textos/textosVar.js'; // Importa la constante desde texto.js
import Footerpage from '../components/footer.js';
import Headerpage from '../components/header.js';
import Contactpage from '../components/contact.js';

import { SkillSection } from '../components/ComponentsReactGlobals.js';

import imagen0 from '../img/AnalisisDatosImg/An0.jpg';
import imagen1 from '../img/AnalisisDatosImg/An1.png';
import imagen2 from '../img/AnalisisDatosImg/An2.png';
import imagen3 from '../img/AnalisisDatosImg/An3.png';
import imagen4 from '../img/AnalisisDatosImg/An4.png';
import imagen5 from '../img/AnalisisDatosImg/An5.png';
import imagen7 from '../img/AnalisisDatosImg/An7.png';
import imagen8 from '../img/AnalisisDatosImg/An8.png';
import imagen9 from '../img/AnalisisDatosImg/An9.png';





const AnotherPage = () => {
  return (
    <div>

      <Headerpage id="texto2" text={textos.texto2} />

      <div className="container">

        <section id="about">
          <h2 id="texto29">{textos.texto29}</h2>
          <p id="texto30" style={{ textAlign: 'justify' }}>{textos.texto30}</p>
        </section>

        <SkillSection
          text={textos.texto31}
          dangerouslySetInnerHTML={true}
        />

        <SkillSection
          heading={textos.texto32}
          text={textos.texto33}
          images={[
            { src: imagen0, alt: 'Imagen 1', width: '80%' }]}
          dangerouslySetInnerHTML={true}
        />

        <SkillSection
          text={textos.texto34}
          images={[
            { src: imagen1, alt: 'Imagen 1', width: '80%' }]}
          dangerouslySetInnerHTML={false}
        />

        <SkillSection
          text={textos.texto35}
          images={[
            { src: imagen2, alt: 'Imagen 2', width: '80%' }]}
          dangerouslySetInnerHTML={false}
        />



        <SkillSection
          text={textos.texto36}
          images={[
            { src: imagen3, alt: 'Imagen 3', width: '30%' },
            { src: imagen4, alt: 'Imagen 4', width: '30%' },
            { src: imagen5, alt: 'Imagen 5', width: '30%' },
          ]}
        />

        <SkillSection
          text={textos.texto37}
          images={[{ src: imagen7, alt: 'Imagen 7', width: '80%' }]}
        />

        <SkillSection
          heading={textos.texto37S0}

          text={textos.texto37S1}

          images={[
            { src: imagen8, alt: 'Imagen 8', width: '80%' }]}
          dangerouslySetInnerHTML={true}
        />



        <SkillSection
          heading={textos.texto37S2}

          text={textos.texto38}

          images={[
            { src: imagen9, alt: 'Imagen 8', width: '80%' }]}
          dangerouslySetInnerHTML={false}
        />

        <div>
          <section id="skills">
            <div className="skills">
              <div className="squarebox">
                <p id="texto39" style={{ textAlign: 'justify' }}>{textos.texto39}</p>
                <p id="texto40" style={{ textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: textos.texto40 }}></p>
              </div>
            </div>
          </section>
        </div>

        <Contactpage />

      </div >

      <Footerpage id="texto26" text={textos.texto26} />

    </div >
  );
};

export default AnotherPage;