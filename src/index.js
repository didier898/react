import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import Variables from './components/Variables';
import Contador from './components/Contador';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Contador />
  </React.StrictMode>
);

reportWebVitals();
