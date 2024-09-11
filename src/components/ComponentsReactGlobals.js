import React from 'react';
import '../css/FileCSS.css';

const redirigirA = (url) => {
  window.location.href = url; // Redirige a la URL dada
};


// SkillCircle.js
const SkillCircle = ({ clasename, title, description, url = '' }) => {
  const handleClick = () => {
    if (url) { window.location.href = url; }
  };
  return (
    <div
      className={clasename}

      onClick={url ? handleClick : undefined}
      style={url ? { cursor: 'pointer' } : {}}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};





// SkillSection.js
const SkillSection = ({ text, images = [], heading = null, dangerouslySetInnerHTML = false }) => {
  return (
    <section id="skills">
      <div className="skills">
        <div className="squarebox">

          {heading && <h3 style={{ textAlign: 'justify' }}>{heading}</h3>}

          {dangerouslySetInnerHTML ? (
            <p style={{ textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: text }}></p>
          ) : (
            <p style={{ textAlign: 'justify' }}>{text}</p>
          )}

          {images.length > 0 && (
            <div className="image-container">
              {images.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} width={image.width} />
              ))}

            </div>
          )}

        </div>
      </div>
    </section>
  );
};

// Exporta ambos componentes
export { redirigirA, SkillCircle, SkillSection };