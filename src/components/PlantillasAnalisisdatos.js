import React from 'react';
import '../css/FileCSS.css';

const squar= ({ clasename, title, description}) => {
    return (
        <div className={clasename}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default SkillCircle;