import './css/FileCSS.css';
import { textos } from './textos/textosVar.js'; // Importa la constante desde texto.js
import { SkillCircle } from './components/ComponentsReactGlobals.js';
import Footerpage from './components/footer.js';
import Headerpage from './components/header.js';
import Contactpage from './components/contact.js';

function App() {
  return (
    <div>

      <Headerpage id="texto2" text={textos.texto2} />

      <div className="container">

        <div className="container">
          <section id="about">
            <h2 id="texto1">{textos.texto1}</h2>
            <p id="texto3">{textos.texto3}</p>
          </section>


          <section id="skills">
            <h2 id="texto4">{textos.texto4}</h2>
            <div className="skills">

              <SkillCircle clasename="circle_withou_blu" title={textos.texto5} description={textos.texto6} />
              <SkillCircle clasename="circle_withou_blu" title={textos.texto7} description={textos.texto8} />
              <SkillCircle clasename="circle_withou_blu" title={textos.texto9} description={textos.texto10} />

            </div>
          </section>

          <section id="projects">
            <h2 id="texto11">{textos.texto11}</h2>
            <div className="projects">

              <SkillCircle clasename="project" title={textos.texto12} description={textos.texto13} url='/AnalisisDatos' />
              <SkillCircle clasename="project" title={textos.texto15} description={textos.texto16} />
              <SkillCircle clasename="project" title={textos.texto18} description={textos.texto19} />

            </div>
          </section>

          <section id="projects">
            <h2 id="texto26S0">{textos.texto26S0}</h2>


            <div className="projects">
              <div className="circle_withou_blu">
                <a href="https://github.com/csgomezg0" id="texto26S1">{textos.texto26S1}</a>
              </div>
            </div>

          </section>

          <Contactpage />

        </div>
      </div>

      <Footerpage id="texto26" text={textos.texto26} />

    </div>

  );
}

export default App;