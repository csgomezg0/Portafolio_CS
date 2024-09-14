import React from 'react';
//import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

// index.js o App.js
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import AnalisisDatos from './pages/AnalisisDatos'; // Importa la nueva página
import AudioModels from './pages/AudioModels'; // Importa la nueva página



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();


ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />


      <Route path="/AnalisisDatos" element={<AnalisisDatos />} />
      <Route path="/AudioModels" element={<AudioModels />} />

    </Routes>
  </Router>,
  document.getElementById('root')
);



